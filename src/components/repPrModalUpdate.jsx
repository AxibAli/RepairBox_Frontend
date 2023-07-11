import React, { useState } from 'react';
import {RxCross2 } from "react-icons/all";
import { IoIosArrowDroprightCircle} from "react-icons/all";
import {   
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label, 
} from 'reactstrap';
import axios from "axios"

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


    const handleUpdate = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/Order/UpdatePriority`, {id:`${value}`, name:`${name}`, processCharges:`${charge}`});
            // Handle the response
            // console.log(response.data);
            
            if (response.status==200) {
                console.log(response?.data?.message)
                // toggle()
                // state b khali kr do
                // handleBrandData()
                props.getData()
                toggle()
                // settext() 
                // this.reset()
            }
        } catch (error) {
            // Handle any errors
            console.error(error);
        }
    };
  return (
    <div>
        <div className='w-[50px] h-[50] flex justify-center items-center group' onClick={toggle}>
            <IoIosArrowDroprightCircle className='text-blue-500 group-hover:text-black' style={{fontSize: '20px' }}/>
        </div>
        <Modal
            isOpen={modal}
            toggle={toggle}
            style={{ maxWidth: "50%"}}
        >
            <ModalHeader
                style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                }}
            >       
                <div className='w-[100%] flex justify-between items-center'>
                    <Button
                        onClick={toggle}
                        className='bg-red-600 hover:bg-red-500'
                    >
                        <RxCross2/>
                    </Button>
                    <p className='ml-[5px]'>Update Repair Priority</p>
                </div>
            </ModalHeader>
            <ModalBody>
                <div className='w-[100%] h-[250px] flex justify-center items-center'>
                    <div className="w-[50%] h-[100%]">
                        <p className='text-[18px] font-semibold'>Priority Information</p>
                        <p className='text-[16px] font-normal'>Enter information for new priority.</p>
                    </div>
                    <div className="w-[50%] h-[100%]">
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
                    onClick={handleUpdate}
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