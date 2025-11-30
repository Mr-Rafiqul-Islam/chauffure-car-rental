

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

export { formatTime, isPickupTimeValid };
