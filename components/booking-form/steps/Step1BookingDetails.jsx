"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SelectField } from "@/components/common/SelectField";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
        <div className="">
          <SelectField
            label="Type of Limo Service"
            name="serviceType"
            options={SERVICE_TYPES}
            value={formData.serviceType}
            onChange={handleSelectChange}
            error={errors.serviceType}
            placeholder="-- Select Service --"
          />
          <div className="mt-4 flex items-center gap-3">
            <Checkbox
              id="is_duration_trip"
              name="is_duration_trip"
              checked={formData.is_duration_trip === "1"}
              onCheckedChange={(checked) =>
                handleInputChange({
                  target: {
                    name: "is_duration_trip",
                    value: checked ? "1" : "0",
                  },
                })
              }
              className="h-5 w-5 border-copper text-highlight
               data-[state=checked]:bg-highlight
               data-[state=checked]:border-highlight
               focus-visible:ring-2 focus-visible:ring-highlight"
            />
            <Label htmlFor="is_duration_trip" className="text-black">
              Get Hourly Rate
            </Label>
          </div>
        </div>
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
            className={`w-full text-black ${
              errors.date ? "border-red-500" : ""
            }`}
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
            className={`w-full text-black ${
              errors.time ? "border-red-500" : ""
            }`}
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

        <div className="space-y-2">
          <Label className="text-black">Need Children Seat?</Label>
          <RadioGroup
            name="children"
            value={formData.children ? "yes" : "no"}
            onValueChange={(value) =>
              handleInputChange({
                target: {
                  name: "children",
                  value: value === "yes",
                },
              })
            }
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="yes"
                id="children-yes"
                className="h-5 w-5 border-copper text-highlight
                   data-[state=checked]:bg-highlight
                   data-[state=checked]:border-highlight
                   focus-visible:ring-2 focus-visible:ring-highlight"
              />
              <Label htmlFor="children-yes" className="text-black">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="no"
                id="children-no"
                className="h-5 w-5 border-copper text-highlight
                   data-[state=checked]:bg-highlight
                   data-[state=checked]:border-highlight
                   focus-visible:ring-2 focus-visible:ring-highlight"
              />
              <Label htmlFor="children-no" className="text-black">
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/*         
        <div className="flex items-center gap-3">
          <Checkbox
            id="children"
            name="children"
            checked={formData.children === true}
            onCheckedChange={(checked) =>
              handleInputChange({
                target: {
                  name: "children",
                  value: checked,
                },
              })
            }
            className="border-copper data-[state=checked]:bg-highlight data-[state=checked]:border-copper]"
          />
          <Label htmlFor="children" className="text-black">Need Children Seat?</Label>
        </div> */}
      </div>
      {formData.children && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectField
            label="Number of Baby Seats [Age 0-4]"
            name="baby_seat"
            options={Array.from({ length: 3 }, (_, i) => String(i + 1))}
            value={formData.baby_seat}
            onChange={handleSelectChange}
            placeholder="-- Select Baby Seats --"
          />
          <SelectField
            label="Number of Booster Seats [Age 5-7]"
            name="booster_seat"
            options={Array.from({ length: 3 }, (_, i) => String(i))}
            value={formData.booster_seat}
            onChange={handleSelectChange}
            placeholder="-- Select Booster Seats --"
            optional
          />
        </div>
      )}
    </div>
  );
}
