// components/booking-form/steps/Step2TripDetails.jsx

"use client";

import { Label } from "@/components/ui/label";
import GooglePlacesInput from "@/components/common/GooglePlacesInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { SelectField2 } from "@/components/common/SelectField2";
import { is } from "zod/v4/locales";

export default function Step2TripDetails({
  formData,
  errors,
  handleSelectChange,
  handleInputChange,
}) {
  const isAirportTransfer =
    formData.serviceType &&
    formData.serviceType.trim().toLowerCase() === "airport transfers";

  const transferData = ["Airport Pickup", "Airport Dropoff"];
  return (
    <div className="space-y-6">
      {/* Transfer type */}
      {isAirportTransfer && (
        <div className="space-y-1">
          <SelectField2
            label="Transfer Type"
            name="transfer_type"
            options={transferData}
            value={formData.transfer_type}
            onChange={handleSelectChange}
            error={errors.transfer_type}
            placeholder="-- Select Transfer Type --"
          />
        </div>
      )}
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
      {(isAirportTransfer &&
        formData.transfer_type.trim().toLowerCase() === "airport pickup") && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Flight Number */}
            <div className="space-y-1">
              <Label htmlFor="flight_number" className="text-black">
                Flight Number{" "}
                {formData.transfer_type.trim().toLowerCase() ===
                  "airport pickup" && <span className="text-copper">*</span>}
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
                Flight Arrival Time{" "}
                {formData.transfer_type.trim().toLowerCase() ===
                  "airport pickup" && <span className="text-copper">*</span>}
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

      {formData.is_round_trip === "1" && formData.is_duration_trip === "0" && (
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
          </div>
          {isAirportTransfer &&
            formData.transfer_type.trim().toLowerCase() ===
              "airport dropoff" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <Label htmlFor="return_flight_number" className="text-black">
                    Flight Number <span className="text-copper">*</span>
                  </Label>
                  <Input
                    id="return_flight_number"
                    name="return_flight_number"
                    placeholder="e.g. QF409"
                    value={formData.return_flight_number || ""}
                    onChange={handleInputChange}
                    className="w-full border px-4 py-2 rounded-md text-black border-gray-300 focus-visible:ring-1 focus-visible:ring-black"
                  />
                  {errors.return_flight_number && (
                    <p className="text-sm text-red-500">
                      {errors.return_flight_number}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="flight_arrival_time" className="text-black">
                    Flight Arrival Time{" "}
                    {formData.transfer_type.trim().toLowerCase() ===
                      "airport dropoff" && (
                      <span className="text-copper">*</span>
                    )}
                  </Label>
                  <Input
                    id="return_flight_arrival_time"
                    name="return_flight_arrival_time"
                    type="time"
                    value={formData.return_flight_arrival_time || ""}
                    onChange={handleInputChange}
                    className="w-full border px-4 py-2 rounded-md text-black border-gray-300 focus-visible:ring-1 focus-visible:ring-black "
                  />
                  {errors.return_flight_arrival_time && (
                    <p className="text-sm text-red-500">
                      {errors.return_flight_arrival_time}
                    </p>
                  )}
                </div>
              </div>
            )}
        </>
      )}
    </div>
  );
}
