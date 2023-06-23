import React, { useState } from "react";
import BasicSelect from "./dropdownone";
import MultipleSelect from "./dropdown";
import Information from "./Information";
import Priority from "./Priority";
import Nextbtn from "./Nextbtn";
import { ToastContainer, toast } from 'react-toastify';

import { TiTick } from "react-icons/ti";


const Stepper = () => {
  const [selectedPriority, setSelectedPriority] = useState("$0.00");
  const steps = ["REPAIR DEVICE", "PRIORITY LEVEL", "INFORMATION & PAYMENT"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [isbrand, setIsbrand] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("MultipleSelect");
  const [nextBtnClicked, setNextBtnClicked] = useState(false);


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
    setNextBtnClicked(true);
  };
  const PrevBtn = () => {
    if (nextBtnClicked) {
     
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


      // Reset the flag after executing PrevBtn logic
      setNextBtnClicked(false);
    }
  };
  const renderComponent = () => {
    switch (currentComponent) {
     
        case "MultipleSelect":
          return <MultipleSelect setisbrand={setIsbrand} />;
       
      case "Priority":
        return <Priority  setSelectedPriority={setSelectedPriority}/>;
      case "Information":
        return <Information  selectedPriority={selectedPriority} />;
      default:
        return null;
    }
  };

  return (
    <>
     <ToastContainer
                  position="top-center"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  progressBarStyle={{ backgroundColor: 'red' }}
                  />
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
      {!complete && <Nextbtn t={PrevBtn} n={isbrand?NextBtn:()=>{ toast.success('Select All DropDown First');}}  />}
    </>
  );
};

export default Stepper;
