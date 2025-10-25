// components/booking-form/steps/Step2TripDetails.jsx

"use client";

import { Label } from "@/components/ui/label";
import GooglePlacesInput from "@/components/common/GooglePlacesInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function Step2TripDetails({
  formData,
  errors,
  handleSelectChange,
  handleInputChange,
}) {
  const isAirportTransfer =
    formData.serviceType &&
    formData.serviceType.trim().toLowerCase() === "airport transfers";
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

      {formData.is_duration_trip === "0" && (
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
      )}
      {isAirportTransfer && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flight Number */}
          <div className="space-y-1">
            <Label htmlFor="flight_number" className="text-black">
              Flight Number <span className="text-copper">*</span>
            </Label>
            <Input
              id="flight_number"
              name="flight_number"
              placeholder="e.g. QF409"
              value={formData.flight_number || ""}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded-md text-black border-gray-300 focus-visible:ring-1 focus-visible:ring-black"
            />
            {errors.flight_number && (
              <p className="text-sm text-red-500">{errors.flight_number}</p>
            )}
          </div>

          {/* Flight Arrival Time */}
          <div className="space-y-1">
            <Label htmlFor="flight_arrival_time" className="text-black">
              Flight Arrival Time <span className="text-copper">*</span>
            </Label>
            <Input
              id="flight_arrival_time"
              name="flight_arrival_time"
              type="time"
              value={formData.flight_arrival_time || ""}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded-md text-black border-gray-300 focus-visible:ring-1 focus-visible:ring-black "
            />
            {errors.flight_arrival_time && (
              <p className="text-sm text-red-500">
                {errors.flight_arrival_time}
              </p>
            )}
          </div>
          {/* Flight Departure Time */}
          <div className="space-y-1">
            <Label htmlFor="flight_departure_time" className="text-black">
              Flight Departure Time
            </Label>
            <Input
              id="flight_departure_time"
              name="flight_departure"
              type="time"
              value={formData.flight_departure || ""}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded-md text-black border-gray-300 focus-visible:ring-1 focus-visible:ring-black "
            />
            {errors.flight_departure && (
              <p className="text-sm text-red-500">
                {errors.flight_departure}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
