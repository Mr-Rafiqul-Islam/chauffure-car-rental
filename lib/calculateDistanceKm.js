
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

