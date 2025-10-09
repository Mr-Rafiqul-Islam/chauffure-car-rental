// components/booking-form/steps/Step4PersonalInfo.jsx

"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Step4PersonalInfo({ formData, errors, handleInputChange }) {
  return (
    <div className="space-y-6">
      {/* Full Name */}
      <div className="space-y-1">
        <Label htmlFor="name" className="text-black">
          Full Name <span className="text-copper">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleInputChange}
          className={`w-full text-black selection:bg-blue-500 ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1">
        <Label htmlFor="email" className="text-black">
          Email Address <span className="text-copper">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john.doe@example.com"
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full text-black selection:bg-blue-500 ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-1">
        <Label htmlFor="phone" className="text-black">
          Phone Number <span className="text-copper">*</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="123-456-7890"
          value={formData.phone}
          onChange={handleInputChange}
          className={`w-full text-black selection:bg-blue-500 ${
            errors.phone ? "border-red-500" : ""
          }`}
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>
      {/* notes */}
      <div className="space-y-1">
        <Label htmlFor="notes" className="text-black">
          Additional Notes <span className="text-muted">(optional)</span>
        </Label>
        <Input
          id="notes"
          name="notes"
          type="text"
          placeholder="Any Instructions ?"
          value={formData.notes}
          onChange={handleInputChange}
          className={`w-full text-black selection:bg-blue-500 ${
            errors.notes ? "border-red-500" : ""
          }`}
        />
        {errors.notes && (
          <p className="text-sm text-red-500 mt-1">{errors.notes}</p>
        )}
      </div>
    </div>
  );
}
