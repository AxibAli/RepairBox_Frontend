import React, { useState } from "react";
import UserDropDown from "./UserDropDown";
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
  const [isbrand, setIsbrand] = useState(true);
  const [currentComponent, setCurrentComponent] = useState("MultipleSelect");
  const [nextBtnClicked, setNextBtnClicked] = useState(false);
  const[Toggle,SetToggle]=useState(false);
  const[brand,SetBrand]=useState([]);
  const[model,SetModel]=useState([]);
  const[defect,SetDefect]=useState([]);

  const CollectBrand=(x)=>{
     SetBrand(x)
  }
  console.log(brand)
  const CollectModel=(y)=>{
    SetModel(y)
  }
  console.log(model)

  const CollectDefect=(z)=>{
    SetDefect(z)
  }
  console.log(defect)

  const AlertToggle=()=>{
    SetToggle(true)
  }


  const NextBtn = () => {
    console.log("isbrand================>",isbrand)
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
          return <UserDropDown/>
          // <> <MultipleSelect setisbrand={setIsbrand} Togg={AlertToggle} CollectBrands={CollectBrand}  CollectModels={CollectModel} CollectDefects={CollectDefect} varaiableBrand={brand} varaiableModel={model} 
          // varaiableDefect={defect}   />
          // {/* <BasicSelect/>
          // <Basic/> */}
          //  </>;
       
      case "Priority":
        return <Priority  setSelectedPriority={setSelectedPriority}/>;
      case "Information":
        return <Information  selectedPriority={selectedPriority} />;
      default:
        return null;
    }
  };
  const Toast=()=>{

     toast.success('Select All DropDown First');
  }

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
      {/* {!Toggle && } */}
      {/* if (Toggle) {
    <Nextbtn t={PrevBtn} n={isbrand?NextBtn:Toast}  />
  } */}
      {/* {Toggle
        ?  <Nextbtn  t={PrevBtn} n={isbrand?NextBtn:Toast}  />
        : <></>
      } */}
<Nextbtn  t={PrevBtn} n={isbrand?NextBtn:Toast}  />
    </>
  );
};

export default Stepper;
// import React, { useState } from 'react';
// import MultipleSelect from './dropdown';
// import BasicSelect from './dropdownone';
// import BasicComponent from './dropdowntwo';
// import NextButton from './Nextbtn';

// const Stepper = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [selectedValues, setSelectedValues] = useState({
//     brands: '',
//     models: '',
//     issues: [],
//   });

//   const steps = [
//     {
//       component: <MultipleSelect selectedValues={selectedValues} setSelectedValues={setSelectedValues} />,
//       label: 'Select Your Device Brand',
//     },
//     {
//       component: <BasicSelect selectedValues={selectedValues} setSelectedValues={setSelectedValues} />,
//       label: 'Select Your Device Model',
//     },
//     {
//       component: <BasicComponent selectedValues={selectedValues} setSelectedValues={setSelectedValues} />,
//       label: 'Select Repairable Issues',
//     },
//   ];

//   const handleNext = () => {
//     if (currentStep === steps.length) {
//       // Perform action on the final step
//       // e.g., submit form, make API call, etc.
//       console.log('Form submitted:', selectedValues);
//     } else {
//       setCurrentStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStep > 1) {
//       setCurrentStep((prevStep) => prevStep - 1);
//     }
//   };

//   return (
//     <div>
//       <div className="step-navigation">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className={`step-item ${currentStep === index + 1 ? 'active' : ''} ${
//               currentStep > index + 1 ? 'completed' : ''
//             }`}
//           >
//             {index + 1}
//             <span className="step-label">{step.label}</span>
//           </div>
//         ))}
//       </div>
//       <div className="step-content">{steps[currentStep - 1].component}</div>
//       <div className="step-actions">
//         {currentStep > 1 && (
//           <button className="btn btn-previous" onClick={handlePrevious}>
//             Previous
//           </button>
//         )}
//         {currentStep < steps.length && (
//           <NextButton onClick={handleNext} />
//         )}
//         {currentStep === steps.length && (
//           <button className="btn btn-submit" onClick={handleNext}>
//             Submit
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Stepper;
