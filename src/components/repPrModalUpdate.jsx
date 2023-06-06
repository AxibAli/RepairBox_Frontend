import React, { useState } from 'react';
import {RxCross2 } from "react-icons/all";
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import {   
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label, 
} from 'reactstrap';

export default function repStModalUpdate(props) {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState(props.name);
    const [value, setValue] = useState(props.value);
    const [charge, setCharge] = useState(props.price);


    const toggle = () => setModal(!modal);

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeValue = (event) => {
        setValue(event.target.value);
    };
    const handleChangeCharge = (event) => {
        setCharge(event.target.value);
    };
  return (
    <div>
        <div className='w-[50px] h-[60px] flex justify-end items-center group' onClick={toggle}>
            <ArrowForward className=' group-hover:text-blue-400' style={{fontSize: '25px' }}/>
        </div>
        <Modal
            isOpen={modal}
            toggle={toggle}
            style={{ maxWidth: "50%", maxHeight:"250px"}}
        >
            <ModalHeader
                style={{
                fontSize: "1rem",
                fontWeight: "500",
                }}
            >       
                <div className='w-[650px] flex justify-between items-center'>
                    <p>Update Repair Priority</p>
                    <Button
                        onClick={toggle}
                        className='bg-red-600 hover:bg-red-500'
                    >
                        <RxCross2/>
                    </Button>
                </div>
            </ModalHeader>
            <ModalBody>
                <div className='w-[650px] h-[250px] flex justify-center items-center'>
                    <div className="w-[300px] h-[100%]">
                        <p className='text-[18px] font-semibold'>Priority Information</p>
                        <p className='text-[16px] font-normal'>Enter information for new priority.</p>
                    </div>
                    <div className="w-[350px] h-[100%]">
                        <Label for="PriorityName" className='text-[18px] font-semibold'>Name :</Label>
                        <Input
                            id="PriorityName"
                            name="name"
                            placeholder="Enter Your Priority Name"
                            type="text"
                            value={name}
                            onChange={handleChangeName}
                        />
                        <Label for="PriorityValue" className='text-[18px] font-semibold mt-[15px]'>Value :</Label>
                        <Input
                            id="PriorityValue"
                            name="name"
                            placeholder="Enter Your Priority Value"
                            type="number"
                            value={value}
                            onChange={handleChangeValue}
                        />
                        <Label for="PriorityCharge" className='text-[18px] font-semibold mt-[15px]'>Charge :</Label>
                        <Input
                            id="PriorityCharge"
                            name="name"
                            placeholder="$0.00"
                            type="number"
                            value={charge}
                            onChange={handleChangeCharge}
                        />
                    </div>
                </div>
            </ModalBody>
            <ModalFooter style={{border: "hidden"}}>
                {/* <button
                    onClick={toggle}
                    // style={{ backgroundColor: "blue" }}
                    className='w-[60px] h-[40px] bg-red-600 rounded-[10px] hover:bg-red-500 border-none text-white text-[16px] font-light'
                >
                Delete
                </button> */}
                <button
                    onClick={toggle}
                    // style={{ backgroundColor: "blue" }}
                    className='w-[70px] h-[40px] bg-[#0096FF] rounded-[10px] hover:bg-[#3aa8f7] border-none text-white text-[16px] font-normal'
                >
                Update
                </button>
            </ModalFooter>
        </Modal>
    </div>
  )
}