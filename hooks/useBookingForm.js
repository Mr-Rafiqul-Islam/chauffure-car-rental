// hooks/useBookingForm.js

import { useState, useEffect, useCallback } from "react";
import { isPickupTimeValid, calculateDistanceKm } from "@/lib/booking-utils";
import { toast } from "sonner";

export default function useBookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    serviceType: "",
    vehiclePreference: "",
    dateOfService: "",
    pickupTime: "",
    adults: "",
    children: "0",
    pickupLocation: "",
    pickupLocationCoordinates: null,
    dropoffLocation: "",
    dropoffLocationCoordinates: null,
    distance: null,
    estimatedPrice: null,
    baseFare: null,
    name: "",
    email: "",
    phone: "",
  });

  const clearError = useCallback((field) => {
    if (errors[field]) {
      setErrors((prev) => {
        const newErr = { ...prev };
        delete newErr[field];
        return newErr;
      });
    }
  },[]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    clearError(name);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value, coords = null) => {
    clearError(name);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(coords && { [`${name}Coordinates`]: coords }),
    }));
  };

  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.serviceType)
        newErrors.serviceType = "Service type is required.";
      if (!formData.vehiclePreference)
        newErrors.vehiclePreference = "Vehicle preference is required.";
      if (!formData.dateOfService)
        newErrors.dateOfService = "Date of service is required.";
      if (!formData.pickupTime)
        newErrors.pickupTime = "Pickup Time is required.";
      else if (!isPickupTimeValid(formData.dateOfService, formData.pickupTime))
        newErrors.pickupTime = "Pickup time must be at least 2 hours from now.";

      if (!formData.adults) {
        newErrors.adults = "Number of adults is required.";
      } else {
        const limits = {
          "1-4 Luxury Sedan": 4,
          "1-4 Luxury SUV": 4,
          "1-7 Luxury Van": 7,
          "1-13 Luxury Van": 13,
        };
        const max = limits[formData.vehiclePreference];
        if (max && parseInt(formData.adults) > max) {
          newErrors.adults = `Max ${max} adults allowed for selected vehicle.`;
        }
      }
    } else if (currentStep === 2) {
      if (!formData.pickupLocation)
        newErrors.pickupLocation = "Pickup location is required.";
      if (!formData.dropoffLocation)
        newErrors.dropoffLocation = "Dropoff location is required.";
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
    if (formData.dateOfService && formData.pickupTime && currentStep === 1) {
      if (!isPickupTimeValid(formData.dateOfService, formData.pickupTime)) {
        setErrors((prev) => ({
          ...prev,
          pickupTime: "Pickup must be 2+ hours from now.",
        }));
      } else {
        clearError("pickupTime");
      }
    }
  }, [formData.dateOfService, formData.pickupTime, currentStep, clearError]);

  const handleNext = () => {
    if (!validateStep()) return;

    if (currentStep === 2) {
      const distance = calculateDistanceKm(
        formData.pickupLocationCoordinates,
        formData.dropoffLocationCoordinates
      );
      const baseFare = 50;
      const perKm = 3;
      const estimated = (baseFare + distance * perKm).toFixed(2);
      setFormData((prev) => ({
        ...prev,
        distance,
        estimatedPrice: estimated,
        baseFare,
      }));
    }

    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
    else {
      toast("Booking submitted successfully! ✅",{
        position: "top-center",
      });
      resetForm();
      console.log("Form submitted:", formData);
      
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
      dateOfService: "",
      pickupTime: "",
      adults: "",
      children: "0",
      pickupLocation: "",
      pickupLocationCoordinates: null,
      dropoffLocation: "",
      dropoffLocationCoordinates: null,
      distance: null,
      estimatedPrice: null,
      baseFare: null,
      name: "",
      email: "",
      phone: "",
    });
    setErrors({});
    setCurrentStep(1);
  };

  return {
    currentStep,
    formData,
    errors,
    handleInputChange,
    handleSelectChange,
    handleNext,
    handlePrev,
    resetForm,
  };
}
