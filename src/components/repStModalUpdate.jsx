import React, { useState} from 'react';
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
    const [text, settext] = useState(props.status);
    const [id, setid] = useState(props.Iid);

    const toggle = () => setModal(!modal);

    const handleChange = (event) => {
        settext(event.target.value);
    };

    const handleUpdate = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/Order/UpdateStatus`, {id:`${id}`, name:`${text}`});
            // Handle the response
            // console.log(response.data);
            
            if (response.status==200) {
                console.log(response?.data?.message)
                toggle()
                // state b khali kr do
                // handleBrandData()
                props.getData()
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
            style={{ maxWidth: "50%" }}
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
                    <p className='ml-[5px]'>Update Repair Status</p>

                </div>
            </ModalHeader>
            <ModalBody>
                <div className='w-[100%] h-[120px] flex justify-center items-center'>
                    <div className="w-[50%] h-[100%]">
                        <p className='text-[18px] font-semibold'>Status Information</p>
                        <p className='text-[16px] font-normal'>Edit information for status.</p>
                    </div>
                    <div className="w-[50%] h-[100%]">
                        <Label for="StatusName" className='text-[18px] font-semibold'>Name :</Label>
                        <Input
                            id="StatusName"
                            name="name"
                            placeholder="Enter Your Status Name"
                            type="name"
                            value={text}
                            onChange={handleChange}
                        />
                        {/* <Input
                            id="StatusId"
                            name="id"
                            placeholder="Enter Your Status Id"
                            type="id"
                            value={id}
                        /> */}
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

