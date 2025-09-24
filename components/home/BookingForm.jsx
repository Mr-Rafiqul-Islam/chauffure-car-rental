// Add this line at the top of the file
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { FaCalendarAlt } from "react-icons/fa";
import { formatTime } from "@/lib/format";

// Define the steps of the form
const steps = [
  { id: "step-1", title: "Booking Details" },
  { id: "step-2", title: "Trip Details" },
  { id: "step-3", title: "Personal Info" },
  { id: "step-4", title: "Review & Submit" },
];

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    // Step 1 fields
    serviceType: "",
    vehiclePreference: "",
    dateOfService: "",
    pickupTime: "",
    adults: "",
    children: "0",
    // Step 2 fields
    pickupLocation: "",
    dropoffLocation: "",
    // Step 3 fields
    name: "",
    email: "",
    phone: "",
  });

  // Clear errors as user types
  const clearError = (fieldName) => {
    if (errors[fieldName]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    clearError(name);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSelectChange = (name, value) => {
    clearError(name);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 0) {
      if (!formData.serviceType)
        newErrors.serviceType = "Service type is required.";
      if (!formData.vehiclePreference)
        newErrors.vehiclePreference = "Vehicle preference is required.";
      if (!formData.dateOfService)
        newErrors.dateOfService = "Date of service is required.";
      if (!formData.pickupTime)
        newErrors.pickupTime = "Pickup Time is required.";
      if (!formData.adults) newErrors.adults = "Number of adults is required.";
    } else if (currentStep === 1) {
      if (!formData.pickupLocation)
        newErrors.pickupLocation = "Pickup location is required.";
      if (!formData.dropoffLocation)
        newErrors.dropoffLocation = "Dropoff location is required.";
    } else if (currentStep === 2) {
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

  const handleNext = () => {
    const isValid = validateStep();
    if (!isValid) return; // Stop if validation fails

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Handle form submission
      alert("Form Submitted!\n" + JSON.stringify(formData, null, 2));
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setErrors({}); // Clear errors when going back
      setCurrentStep((prev) => prev - 1);
    }
  };

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="flex max-w-2xl items-center justify-center bg-highlight rounded-2xl font-sans p-2">
      <Card className="w-full max-w-2xl shadow-lg bg-white">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center h-8 w-8 bg-copper rounded-sm">
              <FaCalendarAlt className="text-white" />
            </div>
            <h5 className="text-xl font-semibold text-gray-800">
              Start Your Booking (Step {currentStep + 1} of {steps.length})
            </h5>
          </div>
          <Progress
            value={progressPercentage}
            className="w-full h-2 mt-4 bg-bsilver"
          />
        </CardHeader>
        <CardContent className="pt-6">
          <form id="multi-step-form" onSubmit={(e) => e.preventDefault()}>
            {/* Step 1: Booking Details */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <Label htmlFor="serviceType" className="text-black">
                      Type of Limo Service
                      <span className="text-copper">*</span>
                    </Label>
                    <Select
                      name="serviceType"
                      onValueChange={(value) =>
                        handleSelectChange("serviceType", value)
                      }
                      value={formData.serviceType}
                    >
                      <SelectTrigger
                        className={`w-full text-black ${
                          errors.serviceType ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="-- Select Service --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Airport Transfers">
                          Airport Transfers
                        </SelectItem>
                        <SelectItem value="Special Events & Conferences">
                          Special Events & Conferences
                        </SelectItem>
                        <SelectItem value="Wedding Chauffeurs">
                          Wedding Chauffeurs
                        </SelectItem>
                        <SelectItem value="Corporate Transfers">
                          Corporate Transfers
                        </SelectItem>
                        <SelectItem value="Tourist Attractions Hire">
                          Tourist Attractions Hire
                        </SelectItem>
                        <SelectItem value="Chauffeured Winery Tours">
                          Chauffeured Winery Tours
                        </SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.serviceType && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.serviceType}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="vehiclePreference" className="text-black">
                      Vehicle Preference <span className="text-copper">*</span>
                    </Label>
                    <Select
                      name="vehiclePreference"
                      onValueChange={(value) =>
                        handleSelectChange("vehiclePreference", value)
                      }
                      value={formData.vehiclePreference}
                    >
                      <SelectTrigger
                        className={`w-full text-black ${
                          errors.vehiclePreference ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="-- Select Vehicle --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-4 Luxury Sedan">
                          1-4 Luxury Sedan
                        </SelectItem>
                        <SelectItem value="1-4 Luxury SUV">
                          1-4 Luxury SUV
                        </SelectItem>
                        <SelectItem value="1-7 Luxury Van">
                          1-7 Luxury Van
                        </SelectItem>
                        <SelectItem value="1-13 Luxury Van">
                          1-13 Luxury Van
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.vehiclePreference && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.vehiclePreference}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <Label htmlFor="dateOfService" className="text-black">
                      Date of Service <span className="text-copper">*</span>
                    </Label>
                    <Input
                      id="dateOfService"
                      name="dateOfService"
                      type="date"
                      value={formData.dateOfService}
                      onChange={handleInputChange}
                      className={`w-full text-black ${
                        errors.dateOfService ? "border-red-500" : ""
                      }`}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    {errors.dateOfService && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.dateOfService}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="pickupTime" className="text-black">
                      Pickup Time <span className="text-copper">*</span>
                    </Label>
                    <Input
                      id="pickupTime"
                      name="pickupTime"
                      type="time"
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                      className={`w-full text-black  ${
                        errors.pickupTime ? "border-red-500" : ""
                      }`}
                    />
                    {errors.pickupTime && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.pickupTime}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <Label htmlFor="adults" className="text-black">
                      Number of Adults <span className="text-copper">*</span>
                    </Label>
                    <Select
                      name="adults"
                      onValueChange={(value) =>
                        handleSelectChange("adults", value)
                      }
                      value={formData.adults}
                    >
                      <SelectTrigger
                        className={`w-full text-black ${
                          errors.adults ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="-- Select Adults --" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 13 }, (_, i) => i + 1).map(
                          (num) => (
                            <SelectItem key={num} value={String(num)}>
                              {num}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                    {errors.adults && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.adults}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="children" className="text-black">
                      Number of Children
                    </Label>
                    <Select
                      name="children"
                      onValueChange={(value) =>
                        handleSelectChange("children", value)
                      }
                      value={formData.children}
                    >
                      <SelectTrigger className="w-full text-black">
                        <SelectValue placeholder="-- Select Children --" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 11 }, (_, i) => i).map((num) => (
                          <SelectItem key={num} value={String(num)}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
            {/* Step 2: Trip Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <Label htmlFor="pickupLocation" className="text-black">
                    Pickup Location <span className="text-copper">*</span>
                  </Label>
                  <Input
                    id="pickupLocation"
                    name="pickupLocation"
                    type="text"
                    placeholder="Enter Pickup Location"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    className={`w-full text-black ${
                      errors.pickupLocation ? "border-red-500" : ""
                    }`}
                  />
                  {errors.pickupLocation && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.pickupLocation}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="dropoffLocation" className="text-black">
                    Dropoff Location <span className="text-copper">*</span>
                  </Label>
                  <Input
                    id="dropoffLocation"
                    name="dropoffLocation"
                    type="text"
                    placeholder="Enter Dropoff Location"
                    value={formData.dropoffLocation}
                    onChange={handleInputChange}
                    className={`w-full text-black ${
                      errors.dropoffLocation ? "border-red-500" : ""
                    }`}
                  />
                  {errors.dropoffLocation && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.dropoffLocation}
                    </p>
                  )}
                </div>
              </div>
            )}
            {/* Step 3: Personal Info */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-black">
                    Full Name <span className="text-copper">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full text-black selection:bg-blue-500 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-black">
                    Email Address <span className="text-copper">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full text-black selection:bg-blue-500 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-black">
                    Phone Number <span className="text-copper">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="123-456-7890"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full text-black selection:bg-blue-500 ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
            )}
            {/* Step 4: Review & Submit */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4 text-black">
                  Review Your Booking
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 bg-gray-50 p-4 rounded-md">
                  <li>
                    <strong>Service Type:</strong>
                    {formData.serviceType || "N/A"}
                  </li>
                  <li>
                    <strong>Vehicle:</strong>
                    {formData.vehiclePreference || "N/A"}
                  </li>
                  <li>
                    <strong>Date of Service:</strong>
                    {formData.dateOfService || "N/A"}
                  </li>
                  <li>
                    <strong>Time:</strong> { formatTime(formData.pickupTime) || "N/A"}
                  </li>
                  <li>
                    <strong>Passengers:</strong> {formData.adults} Adults,
                    {formData.children} Children
                  </li>
                  <hr className="my-2" />
                  <li>
                    <strong>Pickup Location:</strong>
                    {formData.pickupLocation || "N/A"}
                  </li>
                  <li>
                    <strong>Dropoff Location:</strong>
                    {formData.dropoffLocation || "N/A"}
                  </li>
                  <hr className="my-2" />
                  <li>
                    <strong>Name:</strong> {formData.name || "N/A"}
                  </li>
                  <li>
                    <strong>Email:</strong> {formData.email || "N/A"}
                  </li>
                  <li>
                    <strong>Phone:</strong> {formData.phone || "N/A"}
                  </li>
                </ul>
              </div>
            )}
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 0 ? (
                <Button variant="outline" onClick={handlePrev}>
                  Previous
                </Button>
              ) : (
                <div /> // Placeholder to keep "Next" button on the right
              )}
              <Button
                onClick={handleNext}
                className="bg-copper hover:bg-highlight hover:scale-105 text-white hover:text-black"
              >
                {currentStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
