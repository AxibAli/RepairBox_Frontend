import React, { useState } from "react";
import MultipleSelect from "./dropdown";
import Information from "./Information";
import Priority from "./Priority";
import Nextbtn from "./Nextbtn";
import { TiTick } from "react-icons/ti";

const Stepper = () => {
  const steps = ["REPAIR DEVICE", "PRIORITY LEVEL", "INFORMATION & PAYMENT"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("MultipleSelect");

  const NextBtn = () => {
    if (currentStep === steps.length) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
      if (currentComponent === "MultipleSelect") {
      // if(currentComponent===  !currentComponent.trim())
        setCurrentComponent("Priority");
      } else if (currentComponent === "Priority") {
        setCurrentComponent("Information");
      }
    }
  };
  
  
  
  const PrevBtn = () => {
    if (currentStep === 1) {
      setCurrentStep(steps.length);
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  
    if (currentComponent === "Priority") {
      setCurrentComponent("MultipleSelect");
    } else if (currentComponent === "Information") {
      setCurrentComponent("Priority");
    }
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case "MultipleSelect":
        return <MultipleSelect />;
      case "Priority":
        return <Priority/>;
      case "Information":
        return <Information   />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      {renderComponent()}
      {!complete && <Nextbtn t={PrevBtn} n={NextBtn}  />}
    </>
  );
};

export default Stepper;
