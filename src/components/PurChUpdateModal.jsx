import React, { useState } from 'react';
import {RxCross2 } from "react-icons/all";
import { IoIosArrowDroprightCircle} from "react-icons/all";
import { Button, Modal } from 'antd';
import {  
    Input,
    Label,
    FormGroup,
    Form, 
} from 'reactstrap';


import axios from "axios"

export default function PurChUpdateModal() {
    const [modal, setModal] = useState(false);
    const [option, setOption] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    // const [text, settext] = useState();

    const toggle = () => setModal(!modal);
    const toggleOptions = () => setOption(!option);

    const handleChange = (event) => {
        // settext(event.target.value);
    };

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    };
          //  Create brand API
    const handleSave = async (e) =>{
        e.preventDefault();
        // try {
        //     const response = await axios.post(`http://18.221.148.248:84/api/v1/Order/AddStatus`, {name:`${text}`});
        //     // Handle the response
        //     // console.log(response.data);
            
        //     if (response.status==200) {
        //         console.log(response?.data?.message)
        //         toggle()
        //         // state b khali kr do
        //         // handleBrandData()
        //         props.getData()
        //         settext("") 
        //         // this.reset()
        //     }
        // } catch (error) {
        //     // Handle any errors
        //     console.error(error);
        // }
    };
  return (
  <div>
        <div className='w-[50px] h-[50] flex justify-center items-center group' onClick={toggle}>
          <IoIosArrowDroprightCircle className='text-blue-500 group-hover:text-black' style={{fontSize: '20px' }}/>
        </div>
        {/* <div className="brand-create-button">
            <button 
                onClick={toggle}
            >
                Create
            </button>
        </div> */}

        <Modal
            title={<p className='text-[20px]'>Update Customer Product</p>}
            centered
            open={modal}
            onOk={toggle}
            okText={"Update"}
            onCancel={toggle}
            cancelButtonProps={{ style: { display: 'none' } }}
            width={1000}
            style={{marginTop:"20px"}}
        >
            <div className='w-[100%] h-auto flex justify-between items-center'>
                <div className='w-[600px] h-auto min-h-[450px] flex flex-col justify-start items-center'>
                    <div className='w-[570px] h-[auto] flex justify-start items-start'>
                        <div className='w-[35%] h-[130px] flex flex-col justify-start items-start '>
                            <p className='text-[18px] font-semibold mt-[20px]'>Customer Information</p>
                            <p className='text-[16px] font-normal'>Fill Up required Information</p>
                        </div>
                        <div className='w-[65%] h-auto pt-[20px]'>
                            <Label for="StatusName" className='text-[18px] font-semibold'>Full Name :</Label>
                            <Input
                                id="StatusName"
                                name="name"
                                placeholder="Enter Your Full Name"
                                type="name"
                                // value={text}
                                // onChange={handleChange}
                            />

                            {option?
                                <></>
                            :
                                <>
                                    <Label for="StatusEmail" className='mt-[15px] text-[18px] font-semibold'>Email :</Label>
                                    <Input
                                        id="StatusEmail"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        type="email"
                                        // value={text}
                                        // onChange={handleChange}
                                    />
                                    <Label for="StatusPhone" className='mt-[15px] text-[18px] font-semibold'>Phone :</Label>
                                    <Input
                                        id="StatusPhone"
                                        name="text"
                                        placeholder="Enter Your Number"
                                        type="text"
                                        // value={text}
                                        // onChange={handleChange}
                                    />
                                    <Label for="StatusAddress" className='mt-[15px] text-[18px] font-semibold'>Address :</Label>
                                    <Input
                                        id="StatusAddress"
                                        name="address"
                                        placeholder="Enter Your Address"
                                        type="textarea"
                                        // value={text}
                                        // onChange={handleChange}
                                    />
                                </>
                            }
                            <div className='w-[100%] h-auto flex justify-end items-center'>
                                {option?
                                    <p 
                                        onClick={toggleOptions}
                                        className='text-[16px] text-slate-400 font-light mr-[10px] mt-[10px] hover:underline hover:text-black hover:cursor-pointer'
                                    >
                                        Add More Options
                                    </p>
                                :
                                    <p
                                        onClick={toggleOptions} 
                                        className='text-[16px] text-red-700 font-light mr-[10px] mt-[10px] hover:underline hover:decoration-red-700 hover:cursor-pointer'
                                    >
                                        Close
                                    </p>
                                }
                                
                            </div>
                        </div>
                    </div>
                    <div className='w-[570px] h-auto flex justify-start items-start'>
                        <div className='w-[35%] h-[130px] flex flex-col justify-start items-start '>
                            <p className='text-[18px] font-semibold mt-[20px]'>Picture</p>
                            <p className='text-[16px] font-normal'>Provide a Picture</p>
                        </div>
                        <div className='w-[65%] h-auto pt-[20px]'>
                            <div className="brand-input-field">
                                <FormGroup>
                                <Label for="exampleFile">File</Label>
                                <Input
                                    id="exampleFile"
                                    name="file"
                                    type="file"
                                    accept="image/*" 
                                    onChange={handleImageChange} 
                                    // value={selectedFile}
                                    // onChange={handleFileChange}

                                />
                                </FormGroup>
                            </div>
                            <div className='w-[100%] h-auto flex justify-center items-center'>
                              {selectedImage && <img src={selectedImage} alt="Selected" className='w-[100px] h-[100px]'/>}
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-[350px] m-0 h-auto'>
                    <div className='w-[100%] h-[450px]'>
                        <Label for="StatusName" className='mt-[15px] text-[18px] font-semibold'>Device Name and Model:</Label>
                        <Input
                            id="StatusName"
                            name="text"
                            placeholder="Enter Device Name and Model"
                            type="text"
                            // value={text}
                            // onChange={handleChange}
                        />
                        <Label for="StatusIMEI" className='mt-[15px] text-[18px] font-semibold'>IMEI :</Label>
                        <Input
                            id="StatusIMEI"
                            name="text"
                            placeholder="Enter IMEI"
                            type="text"
                            // value={text}
                            // onChange={handleChange}
                        />
                        <Label for="StatusSerial" className='mt-[15px] text-[18px] font-semibold'>Serial Number :</Label>
                        <Input
                            id="StatusSerial"
                            name="serial"
                            placeholder="Enter Serial Number"
                            type="text"
                            // value={text}
                            // onChange={handleChange}
                        />
                        <Label for="StatusPrice" className='mt-[15px] text-[18px] font-semibold'>Price :</Label>
                        <Input
                            id="StatusPrice"
                            name="price"
                            placeholder="Enter Price"
                            type="number"
                            // value={text}
                            // onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    </div>
  )
}
