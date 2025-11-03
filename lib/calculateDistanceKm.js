
export const calculateDistanceKm = (pickup, dropoff) => {
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


export async function getDrivingDistanceKm(origin, destination) {
  const res = await fetch("/api/get-distance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ origin, destination }),
  });

  if (!res.ok) throw new Error("Failed to fetch distance");

  const data = await res.json();
  return Number(data.distance);
}

