import React from 'react'
import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';
import UserDropDown from './UserDropDown';
import Information from "./Information";
import Priority from "./Priority";
import { ToastContainer, toast } from 'react-toastify';
// import { Toast } from 'reactstrap';

const steps = [
    {
        title: 'Repair Device',
        content: 'First-Content',
    },
    {
        title: 'Priority Level',
        content: 'Second-content',
    },
    {
        title: 'Information & Payment',
        content: 'Last-content',
    },
];

export default function UserStepForm() {

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,

    }));
    const contentStyle = {

        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
        paddingBottom: 30,

    };


    // State Management for Level 1 
    const [brandID, setbrandID] = useState()
    const [modelID, setmodelID] = useState()
    const [defectID, setdefectID] = useState([])
    const [toggleNextLevel, settoggleNextLevel] = useState(false)

    //State Management for Level 3
    const [toggleComplete, setToggleComplete] = useState(false)

    const BrandState = (br) => {
        setbrandID(br)
    }
    console.log("Level 1 Brand State: ", brandID)

    const ModelState = (mo) => {
        setmodelID(mo)
    }
    console.log("Level 1 Model State: ", modelID)

    const DefectState = (de) => {
        setdefectID(null)
        setdefectID(de)
    }
    console.log("Level 1 Defect State: ", defectID)

    const ToggleLevel = () => {
        settoggleNextLevel(true)
    }
    console.log("T:", toggleNextLevel)

    // State Management for Level 2 
    const [priorityID, setpriorityID] = useState(null)

    const PriorityState = (para) => {
        console.log("Para: ", para)
        setpriorityID(para)
    }
    console.log("Level 2 Priority State: ", priorityID)


    const ToggleDone = () => {
        message.success('Processing complete!')
        setToggleComplete(!toggleComplete)
    }

    const Toast = () => {
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
            <div className='w-[85%] h-auto ml-[7%]'>
                <Steps current={current} items={items} />

                <div style={contentStyle}>
                    {steps[current].title === "Repair Device" ?
                        <UserDropDown
                            BrandFunc={BrandState} BrandCurr={brandID}
                            ModelFunc={ModelState} ModelCurr={modelID}
                            DefectFunc={DefectState} DefectCurr={defectID}
                            TL={ToggleLevel}
                        />
                        : steps[current].title === "Priority Level" ?
                            <Priority
                                PriorityCurr={priorityID}
                                PS={PriorityState}
                            />
                            : steps[current].title === "Information & Payment" ?
                                <Information
                                    BrandFunc={BrandState} BrandCurr={brandID}
                                    ModelFunc={ModelState} ModelCurr={modelID}
                                    DefectFunc={DefectState} DefectCurr={defectID}
                                    PS={PriorityState} PriorityCurr={priorityID}
                                    Done={toggleComplete}
                                />
                                :
                                <></>
                    }
                    <div
                        style={{
                            marginTop: 24,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'

                        }}
                    >
                        {current > 0 && (
                            <Button
                                className='LoginBtn'
                                style={{
                                    margin: '0 8px',
                                }}
                                onClick={() => prev()}
                            >
                                Previous
                            </Button>
                        )}








                        {current < steps.length - 1 && (
                            <Button
                                className='LoginBtn'

                                onClick={
                                    steps[current].title === "Repair Device" ?
                                        toggleNextLevel ?
                                            next
                                            :
                                            Toast
                                        :
                                        priorityID === null ?
                                            Toast
                                            :
                                            next
                                }

                            >
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button className='LoginBtn' onClick={ToggleDone}>
                                Done
                            </Button>
                        )}

                    </div>
                </div>



            </div>
        </>

    )
}
