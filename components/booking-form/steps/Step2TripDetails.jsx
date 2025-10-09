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
        <Label htmlFor="pickup_location" className="text-black">
          Pickup Location <span className="text-copper">*</span>
        </Label>
        <GooglePlacesInput
          name="pickup_location"
          value={formData.pickup_location}
          onChange={handleSelectChange}
          error={errors.pickup_location}
          placeholder="Enter pickup address"
        />
      </div>

      {/* Dropoff Location */}
      <div className="space-y-1">
        <Label htmlFor="drop_location" className="text-black">
          Dropoff Location <span className="text-copper">*</span>
        </Label>
        <GooglePlacesInput
          name="drop_location"
          value={formData.drop_location}
          onChange={handleSelectChange}
          error={errors.drop_location}
          placeholder="Enter dropoff address"
        />
      </div>
    </div>
  );
}
