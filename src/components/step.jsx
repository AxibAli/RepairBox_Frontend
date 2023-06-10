// import React, { useState } from 'react';
// import {  Steps } from 'antd';

// const Step= () => {
//   const [current, setCurrent] = useState(0);
//   // const items.style={{}}

//   const onChange = (value) => {
//     console.log('onChange:', value);
//     setCurrent(value);
//   };
//   return (
//     <div  style={{width:'100%',paddingLeft:200}}>
//       <Steps 
//         className='StepsCss'
//         current={current}
//         onChange={onChange}
//         items={[
//           {
//             title: '-',
//             description:'REPAIR DEVICE',
//           },
//           {
//             title: '-',
//              description:'PRIORITY LEVEL',

//           },
//           {
//             title: '-',
//              description:'INFORMATION & PAYMENT',

//           },
//         ]}
//       />
      
//     </div>
//   );
// };

// export default Step;
import React, { useState } from "react";
import MultipleSelect from "./dropdown";
import Nextbtn from "./Nextbtn";
import '.././App.css';
import { TiTick } from "react-icons/ti";
const Stepper = () => {
  const steps = ["REPAIR DEVICE", "PRIORITY LEVEL", "INFORMATION & PAYMENT" ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
const NextBtn=() => {
  currentStep === steps.length
    ? setComplete(true)
    : setCurrentStep((prev) => prev + 1);
}
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
<MultipleSelect/>
      {!complete && (
        <Nextbtn n={NextBtn}/>
        // <button
        //   className="btn"
        
        // >
        //   {currentStep === steps.length ? "Finish" : "Next"}
        // </button>
      )}
    </>
  );
};

export default Stepper;