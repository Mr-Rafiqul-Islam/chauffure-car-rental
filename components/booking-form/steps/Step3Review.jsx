// components/booking-form/steps/Step3Review.jsx

"use client";

import { formatTime } from "@/lib/booking-utils";

export default function Step3Review({ formData }) {
  return (
    <div className="space-y-4">
      <h2 className="text-base sm:text-lg xl:text-xl font-semibold mb-4 text-black">
        Review Your Booking
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-800 bg-gray-50 p-4 rounded-md">
        <li>
          <strong>Service Type:</strong> {formData.serviceType || "N/A"}
        </li>
        <li>
          <strong>Vehicle:</strong> {formData.vehiclePreference || "N/A"}
        </li>
        <li>
          <strong>Date of Service:</strong> {formData.date || "N/A"}
        </li>
        <li>
          <strong>Time:</strong>{" "}
          {formData.time ? formatTime(formData.time) : "N/A"}
        </li>
        <li>
          <strong>Passengers:</strong> {formData.no_of_adults} Adults,{" "}
          {formData.children && (
            <>
              {formData.baby_seat} Baby Seats, {formData.booster_seat}{" "}
              {formData.booster_seat && "Booster Seats"}
            </>
          )}
        </li>
        <hr className="my-2" />
        <li>
          <strong>Pickup Location:</strong> {formData.pickup_location || "N/A"}
        </li>
        <li>
          <strong>Dropoff Location:</strong> {formData.drop_location || "N/A"}
        </li>
        <hr className="my-2" />

        <li className="flex justify-between">
          <span className="font-medium text-brushedSilver">Distance:</span>
          <span className="text-copper font-semibold">
            {formData.is_duration_trip === "1"
              ? `${formData.duration || "N/A"} Hour`
              : `${formData.distance || "N/A"} Km${
                  formData.is_round_trip === "1" ? " (Distance Doubled for Return)" : ""
                }`}
          </span>
        </li>

        <li className="flex justify-between">
          <span className="font-medium text-brushedSilver">Fleet Price:</span>
          <span className="text-highlight font-semibold">
            {formData.is_duration_trip === "1"
              ? `${
                  formData.fleetInfo?.per_kilometer_fare_duration_wise || "N/A"
                } AUD (Per Hour)`
              : `${formData.baseFare || "N/A"} AUD`}
          </span>
        </li>

        <li className="flex justify-between border-t border-copper/20 pt-2 mt-2">
          <span className="font-medium text-brushedSilver">
            Total Estimated Price:
          </span>
          <span className="text-royalGold font-bold tracking-wide">
            {formData.estimatedPrice
              ? `${formData.estimatedPrice} AUD${
                  formData.is_round_trip === "1" &&
                  formData.is_duration_trip !== "1"
                    ? " (Round Trip)"
                    : ""
                }`
              : "N/A"}
          </span>
        </li>
      </ul>
    </div>
  );
}
