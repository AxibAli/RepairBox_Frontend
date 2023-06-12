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
    const [text, settext] = useState();

    const toggle = () => setModal(!modal);

    const handleChange = (event) => {
        settext(event.target.value);
    };

          //  Create brand API
    const handleSave = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(`http://18.221.148.248:84/api/v1/Order/AddStatus`, {name:`${text}`});
            // Handle the response
            // console.log(response.data);
            
            if (response.status==200) {
                console.log(response?.data?.message)
                toggle()
                // state b khali kr do
                // handleBrandData()
                props.getData()
                settext("") 
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
            style={{ maxWidth: "50%" }}
        >
            <ModalHeader
                style={{
                fontSize: "1rem",
                fontWeight: "500",
                }}
            >       
                <div className='w-[650px] flex justify-between items-center'>
                    <p>Create Repair Status</p>
                    <Button
                        onClick={toggle}
                        className='bg-red-600 hover:bg-red-500'
                    >
                        <RxCross2/>
                    </Button>
                </div>
            </ModalHeader>
            <ModalBody>
                <div className='w-[650px] h-[120px] flex justify-center items-center'>
                    <div className="w-[300px] h-[100%]">
                        <p className='text-[18px] font-semibold'>Status Information</p>
                        <p className='text-[16px] font-normal'>Enter information for new status.</p>
                    </div>
                    <div className="w-[350px] h-[100%]">
                        <Label for="StatusName" className='text-[18px] font-semibold'>Name :</Label>
                        <Input
                            id="StatusName"
                            name="name"
                            placeholder="Enter Your Status Name"
                            type="name"
                            value={text}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </ModalBody>
            <ModalFooter style={{border: "hidden"}}>
                <button
                    onClick={handleSave}
                    // style={{ backgroundColor: "blue" }}
                    // className="brand-create-button"
                    className='w-[60px] h-[40px] bg-[#0096FF] rounded-[10px] hover:bg-[#3aa8f7] border-none text-white text-[16px] font-normal'
                >
                Save
                </button>
            </ModalFooter>
        </Modal>
    </div>
  )
}


