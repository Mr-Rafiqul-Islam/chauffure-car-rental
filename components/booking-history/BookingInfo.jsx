import React from "react";
import {
  Calendar,
  MapPin,
  Users,
  Car,
  ArrowRight,
  FileText,
  Info,
  PlaneIcon,
  Clock,
} from "lucide-react";
import { formatTime } from "@/lib/booking-utils";

const BookingInfo = ({ booking }) => {
  return (
    <div className="bg-[#1F1F1F] text-[#FFFFF0] border border-copper/30 rounded-2xl shadow-lg p-6 w-full max-w-2xl font-sans transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-2xl">
      {/* Card Header: Service, Price, and Status */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-gray-700/50 mb-4">
        <div>
          <h2 className="text-2xl font-bold text-[#D4AF37]">
            {booking.service?.name}
          </h2>
          <p className="text-sm text-bsilver">Booking ID: {booking.id}</p>
        </div>
        <div className="text-right mt-3 sm:mt-0">
          <p className="text-3xl font-semibold">${booking.total_amount}</p>
          <span
            className={`px-3 py-1 text-xs font-bold rounded-full mt-1 inline-block ${
              booking.payment_status === "unpaid"
                ? "bg-red-500/20 text-red-400"
                : "bg-green-500/20 text-green-400"
            }`}
          >
            {booking.payment_status.charAt(0).toUpperCase() +
              booking.payment_status.slice(1)}
          </span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {/* Left Column: Trip Details */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 mt-1 text-copper" />
            <div>
              <h3 className="font-semibold">Date & Time</h3>
              <p className="text-bsilver">
                {new Date(booking.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                at {formatTime(booking.time)}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1 text-copper flex-shrink-0" />
            <div>
              <h3 className="font-semibold">From</h3>
              <p className="text-bsilver">{booking.pickup_location}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1 text-copper flex-shrink-0" />
            <div>
              <h3 className="font-semibold">To</h3>
              <p className="text-bsilver">{booking.drop_location}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Booking Specifics */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Car className="w-5 h-5 text-copper" />
            <div>
              <h3 className="font-semibold">Vehicle</h3>
              <p className="text-bsilver">{booking.fleet?.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-copper" />
            <div>
              <h3 className="font-semibold">Passengers</h3>
              <p className="text-bsilver">{booking.no_of_adults} Adults</p>
              {booking.baby_seat > 0 && (
                <p className="text-xs text-bsilver mt-1">
                  + {booking.baby_seat} Baby Seat(s)
                </p>
              )}
              {booking.booster_seat > 0 && (
                <p className="text-xs text-bsilver mt-1">
                  + {booking.booster_seat} Booster Seat(s)
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ArrowRight className="w-5 h-5 text-copper" />
            <div>
              <h3 className="font-semibold">Trip Details</h3>
              <p className="text-bsilver">{booking.total_kilometers} km</p>
              {booking.is_round_trip === 1 && (
                <p className="text-xs font-medium text-[#D4AF37] mt-1">
                  Round Trip
                </p>
              )}
              {booking.is_duration_trip === 1 && (
                <p className="text-xs font-medium text-[#D4AF37] mt-1">
                  Hourly Hire
                </p>
              )}
            </div>
          </div>
        </div>
        {booking.service?.name === "Airport Transfers" &&
          booking.flight_number &&
          booking.flight_arrival_time && (
            <>
              {/* Flight Number */}
              <div className="flex items-start gap-3">
                <PlaneIcon className="w-5 h-5 mt-1 text-copper flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Flight Number</h3>
                  <p className="text-bsilver">{booking.flight_number}</p>
                </div>
              </div>
              {/* Arrival Time */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-copper flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Flight Arraival</h3>
                  <p className="text-bsilver">
                    {formatTime(booking.flight_arrival_time)}
                  </p>
                </div>
              </div>
            </>
          )}
      </div>
      {/* Return Trip Info */}
      {booking.is_round_trip === 1 && (
        <div className="mt-6 pt-4 border-t border-gray-700/50">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 mt-1 text-copper" />
            <div className="w-full">
              <h3 className="font-semibold">Return Trip Info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-2">
                <div>
                  <strong>Date: </strong>
                  {new Date(booking.round_trip_date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </div>
                <div>
                  <strong>Time: </strong>
                  {formatTime(booking.round_trip_time)}
                </div>
                <div>
                  <strong>From: </strong>
                  {booking.round_trip_pickup}
                </div>
                <div>
                  <strong>To: </strong>
                  {booking.round_trip_dropoff}
                </div>
                {booking.service?.name === "Airport Transfers" &&
                  booking.return_flight_number &&
                  booking.return_flight_arrival_time && (
                    <>
                      {/* Flight Number */}
                      <div className="flex items-start gap-3">
                        <PlaneIcon className="w-5 h-5 mt-1 text-copper flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold">Flight Number</h3>
                          <p className="text-bsilver">
                            {booking.return_flight_number}
                          </p>
                        </div>
                      </div>
                      {/* Arrival Time */}
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 mt-1 text-copper flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold">Flight Arrival</h3>
                          <p className="text-bsilver">
                            {formatTime(booking.return_flight_arrival_time)}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Notes Section (Conditional) */}
      {booking.notes && (
        <div className="mt-6 pt-4 border-t border-gray-700/50">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 mt-1 text-copper" />
            <div>
              <h3 className="font-semibold">Additional Notes</h3>
              <p className="text-bsilver italic">{booking.notes}</p>
            </div>
          </div>
        </div>
      )}

      {/* Action Button (Conditional) */}
      {booking.payment_status === "unpaid" && (
        <div className="mt-6 pt-4 text-center">
          <button
            onClick={() => {
              // Handle payment logic here, e.g., redirect to payment page
              window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/payment/${booking.id}`;
            }}
            className="bg-copper text-white font-bold py-2 px-6 rounded-lg hover:bg-[#D4AF37] hover:scale-105 transition-all duration-300"
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingInfo;
