// components/booking-form/steps/Step2TripDetails.jsx

"use client";

import { Label } from "@/components/ui/label";
import GooglePlacesInput from "@/components/common/GooglePlacesInput";
import { Checkbox } from "@/components/ui/checkbox";

export default function Step2TripDetails({
  formData,
  errors,
  handleSelectChange,
  handleInputChange,
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

      <div className="flex items-center gap-3">
        <Checkbox
          id="is_round_trip"
          name="is_round_trip"
          checked={formData.is_round_trip === "1"}
          onCheckedChange={(checked) =>
            handleInputChange({
              target: {
                name: "is_round_trip",
                value: checked ? "1" : "0",
              },
            })
          }
          className="h-5 w-5 border-copper text-highlight
               data-[state=checked]:bg-highlight
               data-[state=checked]:border-highlight
               focus-visible:ring-2 focus-visible:ring-highlight"
        />
        <Label htmlFor="is_round_trip" className="text-black">
         Do you Need Round Trip?
        </Label>
      </div>
    </div>
  );
}
