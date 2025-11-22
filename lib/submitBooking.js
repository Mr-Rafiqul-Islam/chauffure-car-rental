export async function submitBooking(formData) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/booking-store`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // formData here is already a JS object, so stringify it
        body: JSON.stringify({
          service_id: formData.service_id,
          fleet_id: formData.fleet_id,
          date: formData.date,
          time: formData.time,
          no_of_adults: formData.no_of_adults,
          baby_seat: formData.baby_seat || "0",
          booster_seat: formData.booster_seat || "0",
          pickup_location: formData.pickup_location,
          drop_location: formData.drop_location,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          notes: formData.notes || "",
          total_kilometers: formData.distance,
          is_duration_trip: Number(formData.is_duration_trip),
          is_round_trip: Number(formData.is_round_trip),
          round_trip_date: formData.round_trip_date || "",
          round_trip_time: formData.round_trip_time || "",
          round_trip_pickup: formData.round_trip_pickup || "",
          round_trip_dropoff: formData.round_trip_dropoff || "",
          total_amount: formData.estimatedPrice,
          flight_arrival_time: formData.flight_arrival_time || "",
          flight_number: formData.flight_number || "",
          transferType: formData.transferType || "",
          return_flight_arrival_time: formData.return_flight_arrival_time || "",
          return_flight_number: formData.return_flight_number || "",
          duration: formData.duration || "",
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("Booking failed:", error);
    }

    const result = await response.json();
    console.log("Booking submitted successfully:", result);
    return result;
  } catch (err) {
    console.error("Error submitting booking:", err);
    throw err;
  }
}
