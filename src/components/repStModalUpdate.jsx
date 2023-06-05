import React, { useState} from 'react';
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
    const [text, settext] = useState(props.status);

    const toggle = () => setModal(!modal);

    const handleChange = (event) => {
        settext(event.target.value);
    };
  return (
    <div>
        <div className='w-[60px] h-[60px] flex justify-end items-center group' >
            <ArrowForward onClick={toggle} className=' group-hover:text-blue-400'/>
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
                Update Repair Status
                <Button
                    color="primary"
                    onClick={toggle}
                    style={{ backgroundColor: "blue" }}
                    className="cross-button"
                >
                    <RxCross2/>
                </Button>
            </ModalHeader>
            <ModalBody>
                <div className='w-[650px] h-[120px] flex justify-center items-center'>
                    <div className="w-[300px] h-[100%]">
                        <p className='text-[18px] font-semibold'>Status Information</p>
                        <p className='text-[16px] font-normal'>Edit information for status.</p>
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
                    onClick={toggle}
                    // style={{ backgroundColor: "blue" }}
                    className='w-[60px] h-[40px] bg-red-600 rounded-[10px] hover:bg-red-500 border-none text-white text-[16px] font-light'
                >
                Delete
                </button>
                <button
                    onClick={toggle}
                    // style={{ backgroundColor: "blue" }}
                    className='w-[60px] h-[40px] bg-[#0096FF] rounded-[10px] hover:bg-[#3aa8f7] border-none text-white text-[16px] font-light'
                >
                Update
                </button>
            </ModalFooter>
        </Modal>
    </div>
  )
}

