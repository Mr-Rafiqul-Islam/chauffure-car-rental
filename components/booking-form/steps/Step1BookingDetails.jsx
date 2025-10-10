"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SelectField } from "@/components/common/SelectField";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SelectField2 } from "@/components/common/SelectField2";
import { useEffect, useState } from "react";



export default function Step1BookingDetails({
  servicesData,
  fleetData,
  formData,
  errors,
  handleInputChange,
  handleSelectChange,
}) {

  const [limits, setLimits] = useState({});

  // 🧠 Dynamically build seat limits when fleetData is available
  useEffect(() => {
    if (fleetData?.length) {
      const limitsMap = Object.fromEntries(
        fleetData.map((fleet) => [fleet.name, fleet.total_seats])
      );
      setLimits(limitsMap);
    }
  }, [fleetData]);

  // 🧮 Dynamically determine max adults based on selected vehicle
  const maxAdults = limits[formData.vehiclePreference] || 13; // fallback default 13
  const adultOptions = Array.from({ length: maxAdults }, (_, i) => String(i + 1));
  
  return (
    <div className="space-y-6">
      {/* Service & Vehicle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <SelectField
            label="Type of Limo Service"
            name="serviceType"
            options={servicesData}
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
          options={fleetData}
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
        <SelectField2
          label="Number of Adults"
          name="no_of_adults"
          options={adultOptions}
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
      </div>


      {formData.children && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectField2
            label="Number of Baby Seats [Age 0-4]"
            name="baby_seat"
            options={Array.from({ length: 4 }, (_, i) => String(i))}
            value={formData.baby_seat}
            onChange={handleSelectChange}
            placeholder="-- Select Baby Seats --"
          />
          <SelectField2
            label="Number of Booster Seats [Age 5-7]"
            name="booster_seat"
            options={Array.from({ length: 4 }, (_, i) => String(i))}
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
