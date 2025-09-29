// components/booking-form/steps/Step2TripDetails.jsx

"use client";

import { Label } from "@/components/ui/label";
import GooglePlacesInput from "@/components/common/GooglePlacesInput";

export default function Step2TripDetails({
  formData,
  errors,
  handleSelectChange,
}) {
  return (
    <div className="space-y-6">
      {/* Pickup Location */}
      <div className="space-y-1">
        <Label htmlFor="pickupLocation" className="text-black">
          Pickup Location <span className="text-copper">*</span>
        </Label>
        <GooglePlacesInput
          name="pickupLocation"
          value={formData.pickupLocation}
          onChange={handleSelectChange}
          error={errors.pickupLocation}
          placeholder="Enter pickup address"
        />
      </div>

      {/* Dropoff Location */}
      <div className="space-y-1">
        <Label htmlFor="dropoffLocation" className="text-black">
          Dropoff Location <span className="text-copper">*</span>
        </Label>
        <GooglePlacesInput
          name="dropoffLocation"
          value={formData.dropoffLocation}
          onChange={handleSelectChange}
          error={errors.dropoffLocation}
          placeholder="Enter dropoff address"
        />
      </div>
    </div>
  );
}
