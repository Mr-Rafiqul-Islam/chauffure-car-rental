"use client";
import { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function GoogleMapsLoader({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      libraries: ["places"],
      region: "AU",
    });

    loader
      .load()
      .then(() => {
        if (window.google) {
          setReady(true);
        }
      })
      .catch((err) => {
        console.error("Google Maps failed to load:", err);
      });
  }, []);

  if (!ready) return null;

  return children;
}
