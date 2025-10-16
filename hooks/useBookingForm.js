// hooks/useBookingForm.js

import { useState, useEffect, useCallback } from "react";
import { isPickupTimeValid, calculateDistanceKm } from "@/lib/booking-utils";
import { toast } from "sonner";
import { submitBooking } from "@/lib/submitBooking";

export default function useBookingForm({ fleetData = [] }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: "",
    vehiclePreference: "",
    date: "",
    time: "",
    no_of_adults: "",
    children: false,
    pickup_location: "",
    pickup_locationCoordinates: null,
    drop_location: "",
    drop_locationCoordinates: null,
    flight_arrival_time: "",
    flight_number: "",
    distance: null,
    estimatedPrice: null,
    baseFare: null,
    name: "",
    email: "",
    phone: "",
    is_round_trip: "0",
    is_duration_trip: "0",
    booster_seat: "",
    baby_seat: "",
    notes: "",
    fleet_id: "",
    service_id: "",
  });

  const clearError = useCallback((field) => {
    if (errors[field]) {
      setErrors((prev) => {
        const newErr = { ...prev };
        delete newErr[field];
        return newErr;
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    clearError(name);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value, options = {}) => {
    const { info = null, coords = null } = options;

    clearError(name);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "serviceType" && { service_id: info.id }),
      ...(name === "vehiclePreference" && {
        fleet_id: info.id,
        fleetInfo: info,
      }),
      ...(coords && { [`${name}Coordinates`]: coords }),
    }));
    console.log(formData);
  };

  // ADDED: useEffect to handle passenger reset on vehicle change
  useEffect(() => {
    if (!formData.vehiclePreference || !fleetData?.length) return;

    const selectedFleet = fleetData.find(
      (f) => f.name === formData.vehiclePreference
    );
    if (!selectedFleet) return;

    const maxSeats = selectedFleet.total_seats;
    const currentAdults = Number(formData.no_of_adults || 0);
    const currentBaby = Number(formData.baby_seat || 0);
    const currentBooster = Number(formData.booster_seat || 0);

    // If total passengers exceed new vehicle's capacity, reset them
    if (currentAdults + currentBaby + currentBooster > maxSeats) {
      setFormData((prev) => ({
        ...prev,
        no_of_adults: "",
        baby_seat: "",
        booster_seat: "",
      }));

      // Notify the user why the fields were cleared
      toast.info("Passenger count reset", {
        description:
          "The previous number of passengers exceeds the new vehicle's capacity.",
        position: "top-center",
      });
    }
  }, [formData.vehiclePreference, fleetData]);

  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.serviceType)
        newErrors.serviceType = "Service type is required.";
      if (!formData.vehiclePreference)
        newErrors.vehiclePreference = "Vehicle preference is required.";
      if (!formData.date) newErrors.date = "Date of service is required.";
      if (!formData.time) newErrors.time = "Pickup Time is required.";
      else if (!isPickupTimeValid(formData.date, formData.time))
        newErrors.time = "Pickup time must be at least 2 hours from now.";

      if (!formData.no_of_adults) {
        newErrors.no_of_adults = "Number of adults is required.";
      }
    } else if (currentStep === 2) {
      if (!formData.pickup_location)
        newErrors.pickup_location = "Pickup location is required.";
      if (!formData.drop_location)
        newErrors.drop_location = "Dropoff location is required.";
      if (formData.serviceType.trim().toLowerCase() === "airport transfers") {
        if (!formData.flight_arrival_time)
          newErrors.flight_arrival_time = "Flight arrival time is required.";
        if (!formData.flight_number)
          newErrors.flight_number = "Flight number is required.";
      }
    } else if (currentStep === 4) {
      if (!formData.name) newErrors.name = "Full name is required.";
      if (!formData.phone) newErrors.phone = "Phone number is required.";
      if (!formData.email) {
        newErrors.email = "Email address is required.";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email address is invalid.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (formData.date && formData.time && currentStep === 1) {
      if (!isPickupTimeValid(formData.date, formData.time)) {
        setErrors((prev) => ({
          ...prev,
          time: "Pickup must be 2+ hours from now.",
        }));
      } else {
        clearError("time");
      }
    }
  }, [formData.date, formData.time, currentStep, clearError]);

  const handleNext = () => {
    if (!validateStep()) return;

    if (currentStep === 2) {
      const distance = calculateDistanceKm(
        formData.pickup_locationCoordinates,
        formData.drop_locationCoordinates
      );

      let estimated = 0;
      let baseFare = 0;
      let totalDistance = distance;

      // HOURLY HIRE — fixed rate (no distance logic)
      if (formData.is_duration_trip === "1") {
        estimated = Number(
          formData.fleetInfo?.per_kilometer_fare_duration_wise || 0
        );
        baseFare = estimated;
      }
      // NORMAL TRIP — base fare + per km rate
      else {
        baseFare = Number(formData.fleetInfo?.base_fare || 0);
        const perKm = Number(formData.fleetInfo?.per_kilometer_fare || 0);

        // For round trip: double only the distance
        if (formData.is_round_trip === "1") {
          totalDistance = distance * 2;
        }

        estimated = baseFare + totalDistance * perKm;
      }

      setFormData((prev) => ({
        ...prev,
        distance: totalDistance,
        estimatedPrice: estimated.toFixed(2),
        baseFare,
      }));
    }

    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
    else {
      setIsSubmitting(true);
      submitBooking(formData)
        .then((response) => {
          const bookingId = response?.booking?.id;
          setIsSubmitting(false);
          toast(
            "Booking submitted successfully! ✅ \nYou will be redirected to the payment page right now.",
            {
              position: "top-center",
              description: "You will get a confirmation email.",
            }
          );
          resetForm();
          if (bookingId) {
            setTimeout(() => {
              window.open(
                `${process.env.NEXT_PUBLIC_BASE_URL}/payment/${bookingId}`,
                "_blank"
              );
            }, 1000);
          }
        })
        .catch((err) => {
          setErrors(err?.response?.data?.errors || {});
          toast("Failed to submit booking ❌", {
            position: "top-center",
            description: "Please try again later.",
          });
          setIsSubmitting(false);
        });
    }
  };

  const handlePrev = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const resetForm = () => {
    setFormData({
      serviceType: "",
      vehiclePreference: "",
      date: "",
      time: "",
      no_of_adults: "",
      children: false,
      pickup_location: "",
      pickup_locationCoordinates: null,
      drop_location: "",
      drop_locationCoordinates: null,
      flight_arrival_time: "",
      flight_number: "",
      distance: null,
      estimatedPrice: null,
      baseFare: null,
      name: "",
      email: "",
      phone: "",
      is_round_trip: "0",
      is_duration_trip: "0",
      booster_seat: "",
      baby_seat: "",
      notes: "",
    });
    setErrors({});
    setCurrentStep(1);
  };

  return {
    currentStep,
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSelectChange,
    handleNext,
    handlePrev,
    resetForm,
  };
}
