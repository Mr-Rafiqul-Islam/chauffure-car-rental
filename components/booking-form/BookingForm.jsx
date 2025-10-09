"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FaCalendarAlt } from "react-icons/fa";

import GoogleMapsLoader from "../common/GoogleMapsLoader";

import Step1BookingDetails from "./steps/Step1BookingDetails";
import Step2TripDetails from "./steps/Step2TripDetails";
import Step3Review from "./steps/Step3Review";
import Step4PersonalInfo from "./steps/Step4PersonalInfo";
import useBookingForm from "@/hooks/useBookingForm";

const steps = [
  { id: "step-1", title: "Booking Details" },
  { id: "step-2", title: "Trip Details" },
  { id: "step-3", title: "Review & Submit" },
  { id: "step-4", title: "Personal Info" },
];

export default function BookingForm() {
    const {
    currentStep,
    formData,
    errors,
    handleInputChange,
    handleSelectChange,
    handleNext,
    handlePrev,
  } = useBookingForm();
    const progressPercentage = (currentStep / steps.length) * 100;
    


  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1BookingDetails
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
          />
        );
      case 2:
        return (
          <Step2TripDetails
            formData={formData}
            errors={errors}
            handleSelectChange={handleSelectChange}
            handleInputChange={handleInputChange}
          />
        );
      case 3:
        return <Step3Review formData={formData} />;
      case 4:
        return (
          <Step4PersonalInfo
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <GoogleMapsLoader>
      <div className="flex max-w-xl items-center justify-center bg-highlight rounded-2xl font-sans p-2">
        <Card className="w-full max-w-xl shadow-lg bg-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center h-8 w-8 bg-copper rounded-sm">
                <FaCalendarAlt className="text-white" />
              </div>
              <h5 className="text-base sm:text-lg xl:text-xl font-semibold text-gray-800">
                Start Your Booking (Step {currentStep} of {steps.length})
              </h5>
            </div>
            <Progress
              value={progressPercentage}
              className="w-full h-2 mt-4 bg-bsilver"
            />
          </CardHeader>
          <CardContent className="pt-6">
            {renderStep()}
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 ? (
                <Button variant="outline" onClick={handlePrev}>
                  Previous
                </Button>
              ) : (
                <div />
              )}
              <Button
                onClick={handleNext}
                className="bg-copper hover:bg-highlight hover:scale-105 text-white hover:text-black"
              >
                {currentStep === steps.length ? "Submit" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </GoogleMapsLoader>
  );
}