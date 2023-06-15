import React, { useState } from 'react';
import {RxCross2 } from "react-icons/all";
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

export default function repStModalCreate(props) {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState();
    const [value, setValue] = useState();
    const [charge, setCharge] = useState();


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

    const handleCreate = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(`http://18.221.148.248:84/api/v1/Order/AddPriority`, {id:`${value}`, name:`${name}`, processCharges:`${charge}`});
            // Handle the response
            // console.log(response.data);
            
            if (response.status==200) {
                console.log(response?.data?.message)
                // toggle()
                // state b khali kr do
                // handleBrandData()
                props.getData()
                toggle()
                setName("")
                setValue("")
                setCharge("") 
                // this.reset()
            }
        } catch (error) {
            // Handle any errors
            console.error(error);
        }
    };

  return (
    <div>
        <div className="brand-create-button">
            <button         
            //   className='w-[160px] h-[40px] bg-[#0096FF] focus-visible:bg-[#0096FF] rounded-[10px] hover:bg-[#3aa8f7] border-none text-white text-[16px] font-semibold' 
                onClick={toggle}>
                Create
            </button>
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
                    <p>Create Repair Priority</p>
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
                <button
                    onClick={handleCreate}
                    // style={{ backgroundColor: "blue" }}
                    className='w-[60px] h-[40px] bg-[#0096FF] rounded-[10px] hover:bg-[#3aa8f7] border-none text-white text-[16px] font-normal'
                >
                Save
                </button>
            </ModalFooter>
        </Modal>
    </div>
  )
}
