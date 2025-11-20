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
      {/* Airport Transfer Details */}
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
              Flight Departure Time(optional)
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
              <p className="text-sm text-red-500">{errors.flight_departure}</p>
            )}
          </div>
        </div>
      )}
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

      {(formData.is_round_trip === "1" && formData.is_duration_trip === "0") && (
        <>
          <div className="space-y-1">
            <Label htmlFor="round_trip_pickup" className="text-black">
              Pickup Address <span className="text-copper">*</span>
            </Label>
            <GooglePlacesInput
              name="round_trip_pickup"
              value={formData.round_trip_pickup}
              onChange={handleSelectChange}
              error={errors.round_trip_pickup}
              placeholder="Enter address for return trip"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="round_trip_dropoff" className="text-black">
              Dropoff Address <span className="text-copper">*</span>
            </Label>
            <GooglePlacesInput
              name="round_trip_dropoff"
              value={formData.round_trip_dropoff}
              onChange={handleSelectChange}
              error={errors.round_trip_dropoff}
              placeholder="Enter address for return trip"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <Label htmlFor="round_trip_date" className="text-black">
                Return Date <span className="text-copper">*</span>
              </Label>
              <Input
                id="round_trip_date"
                name="round_trip_date"
                type="date"
                value={formData.round_trip_date}
                onChange={handleInputChange}
                className={`w-full text-black ${
                  errors.round_trip_date ? "border-red-500" : ""
                }`}
                min={new Date().toISOString().split("T")[0]}
              />
              {errors.round_trip_date && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.round_trip_date}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="round_trip_time" className="text-black">
                Pickup Time <span className="text-copper">*</span>
              </Label>
              <Input
                id="round_trip_time"
                name="round_trip_time"
                type="time"
                value={formData.round_trip_time}
                onChange={handleInputChange}
                className={`w-full text-black ${
                  errors.round_trip_time ? "border-red-500" : ""
                }`}
              />
              {errors.round_trip_time && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.round_trip_time}
                </p>
              )}
            </div>
              {/* {isAirportTransfer && (
                <div className="space-y-1">
              <Label htmlFor="flight_number" className="text-black">
                Flight Number (optional)
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
              )} */}
          </div>
        </>
      )}
    </div>
  );
}
