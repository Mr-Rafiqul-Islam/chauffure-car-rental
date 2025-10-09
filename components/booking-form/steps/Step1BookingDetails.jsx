"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SelectField } from "@/components/common/SelectField";


const SERVICE_TYPES = [
  "Airport Transfers",
  "Special Events & Conferences",
  "Wedding Chauffeurs",
  "Hourly Rate",
  "Corporate Transfers",
  "Tourist Attractions Hire",
  "Chauffeured Winery Tours",
  "Others",
];

const VEHICLES = [
  "1-4 Luxury Sedan",
  "1-4 Luxury SUV",
  "1-7 Luxury Van",
  "1-13 Luxury Van",
];



export default function Step1BookingDetails({
  formData,
  errors,
  handleInputChange,
  handleSelectChange,
}) {
  return (
    <div className="space-y-6">
      {/* Service & Vehicle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField
          label="Type of Limo Service"
          name="serviceType"
          options={SERVICE_TYPES}
          value={formData.serviceType}
          onChange={handleSelectChange}
          error={errors.serviceType}
          placeholder="-- Select Service --"
        />
        <SelectField
          label="Vehicle Preference"
          name="vehiclePreference"
          options={VEHICLES}
          value={formData.vehiclePreference}
          onChange={handleSelectChange}
          error={errors.vehiclePreference}
          placeholder="-- Select Vehicle --"
        />
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <Label htmlFor="date" className="text-black">
            Date of Service <span className="text-copper">*</span>
          </Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleInputChange}
            className={`w-full text-black ${errors.date ? "border-red-500" : ""}`}
            min={new Date().toISOString().split("T")[0]}
          />
          {errors.date && (
            <p className="text-sm text-red-500 mt-1">{errors.date}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="time" className="text-black">
            Pickup Time <span className="text-copper">*</span>
          </Label>
          <Input
            id="time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleInputChange}
            className={`w-full text-black ${errors.time ? "border-red-500" : ""}`}
          />
          {errors.time && (
            <p className="text-sm text-red-500 mt-1">{errors.time}</p>
          )}
        </div>
      </div>

      {/* Adults & Children */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField
          label="Number of Adults"
          name="no_of_adults"
          options={Array.from({ length: 13 }, (_, i) => String(i + 1))}
          value={formData.no_of_adults}
          onChange={handleSelectChange}
          error={errors.no_of_adults}
          placeholder="-- Select Adults --"
        />
        <SelectField
          label="Number of Children"
          name="children"
          options={Array.from({ length: 11 }, (_, i) => String(i))}
          value={formData.children}
          onChange={handleSelectChange}
          placeholder="-- Select Children --"
          optional
        />
      </div>
    </div>
  );
}
