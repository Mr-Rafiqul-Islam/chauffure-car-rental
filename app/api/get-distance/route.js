import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { origin, destination } = await req.json();

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.lat},${origin.lng}&destinations=${destination.lat},${destination.lng}&mode=driving&units=metric&key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    const distanceMeters = data.rows[0].elements[0].distance.value; // meters
    const distanceKm = (distanceMeters / 1000).toFixed(2);

    return NextResponse.json({ distance: distanceKm });
  } catch (err) {
    console.error("Distance API Error:", err);
    return NextResponse.json({ error: "Failed to fetch distance" }, { status: 500 });
  }
}
