const calculateDistanceKm = (pickup, dropoff) => {
  const toRad = (x) => (x * Math.PI) / 180;

  const R = 6371; // Radius of Earth in km
  const dLat = toRad(dropoff.lat - pickup.lat);
  const dLon = toRad(dropoff.lng - pickup.lng);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(pickup.lat)) *
      Math.cos(toRad(dropoff.lat)) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2);
};

function formatTime(timeStr) {
  if (!timeStr || !timeStr.includes(":")) return "Invalid time";

  const [hourStr, minuteStr] = timeStr.split(":");
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  if (isNaN(hour) || isNaN(minute)) return "Invalid time";

  const date = new Date();
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

const isPickupTimeValid = (date, time) => {
  if (!date || !time) return true;

  const selectedDate = new Date(date);
  const selectedTime = new Date(`${date}T${time}`);
  const now = new Date();

  // If the selected date is today
  const isToday = selectedDate.toDateString() === now.toDateString();

  if (isToday) {
    const minAllowedTime = new Date(now.getTime() + 2 * 60 * 60 * 1000); // +2 hours
    return selectedTime >= minAllowedTime;
  }

  return true; // If not today, any time is okay
};

export { formatTime, isPickupTimeValid, calculateDistanceKm };
