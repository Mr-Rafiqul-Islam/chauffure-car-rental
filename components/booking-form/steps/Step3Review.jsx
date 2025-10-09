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
          {formData.baby_seat} Baby Seats,{" "}{formData.booster_seat} {formData.booster_seat && "Booster Seats"} 
        </li>
        <hr className="my-2" />
        <li>
          <strong>Pickup Location:</strong> {formData.pickup_location || "N/A"}
        </li>
        <li>
          <strong>Dropoff Location:</strong> {formData.drop_location || "N/A"}
        </li>
        <hr className="my-2" />
        <li>
          <strong>Distance:</strong> {formData.distance || "N/A"} Km
        </li>
        <li>
          <strong>Fleet Price:</strong> {formData.baseFare || "N/A"} AUD
        </li>
        <li>
          <strong>Total Estimated Price:</strong>{" "}
          {formData.estimatedPrice || "N/A"} AUD
        </li>
      </ul>
    </div>
  );
}
