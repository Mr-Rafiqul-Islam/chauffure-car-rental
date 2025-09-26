"use client";
import { useRef, useEffect } from "react";

export default function GooglePlacesInput({
  name,
  value,
  onChange,
  error,
  placeholder,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!window.google || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        componentRestrictions: { country: "au" },
        fields: ["formatted_address", "geometry"],
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      console.log("Selected Place:", place);

      if (
        place &&
        place.formatted_address &&
        place.geometry &&
        place.geometry.location
      ) {
        const coords = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        console.log("Coordinates:", coords);
        onChange(name, place.formatted_address, coords);
      } else {
        console.warn("Place object incomplete:", place);
      }
    });

    // Cleanup: remove event listener
    return () => {
      window.google.maps.event.clearInstanceListeners(autocomplete);
    };
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        autoComplete="off"
        className={`w-full border px-4 py-2 rounded-md text-black ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
