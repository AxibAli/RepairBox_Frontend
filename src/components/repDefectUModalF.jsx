import React, { useEffect, useState } from "react";
import {
  AiFillFolderOpen,
  BsSortDownAlt,
  TbBallFootball,
  IoIosArrowDroprightCircle,
  FaLessThan,
  FaGreaterThan,
  RxCross2,
} from "react-icons/all";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

export default function repDefectUModalF(props) {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState(props.dName);
    const [time, setTime] = useState(props.dTime);
    const [price, setPrice] = useState(props.dPrice);
    const [cost, setCost] = useState(0);
    const [id, setId] = useState(props.Iid);
    // const [selectedBrand, setSelectedBrand] = useState("");
    
    const toggle = () => setModal(!modal);

    const handleDefectUpdate = async (e) =>{
      e.preventDefault();
      try {
          const response = await axios.post(`http://18.221.148.248:84/api/v1/Brand/UpdateDefect`, {id:`${id}`, defectName:`${name}`, repairTime:`${time}`, cost:`${cost}`, price:`${parseInt(price, 10)}`});
          // Handle the response
          // console.log(response.data);
          
          if (response.status==200) {
              console.log(response?.data?.message)
              // toggle()
              // state b khali kr do
              // handleBrandData()
              toast.success('Model Update Successfully');
              props.getData()
              toggle()
              setId();
              setCost();
              setPrice();
              setTime();
              setName();
              // settext() 
              // this.reset()
          }
      } catch (error) {
          // Handle any errors
          console.error(error);
      }
  };


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
    <div>
        <div className='w-[50px] h-[50] flex justify-center items-center group' onClick={toggle}>
            <IoIosArrowDroprightCircle className='text-blue-500 group-hover:text-black' style={{fontSize: '20px' }}/>
        </div>
        <Modal
          isOpen={modal}
          toggle={toggle}
          style={{ maxWidth: "70%" }}
        >
          <ModalHeader
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
          >
            Update  Defect
            <Button
              color="primary"
              onClick={toggle}
              style={{ backgroundColor: "blue" }}
              className="cross-button"
            >
              <RxCross2 />
            </Button>
          </ModalHeader>
          <ModalBody>
            <div className="create-modal-content">
              <div className="brand-info-content">
                <h2>
                  Repairable <br /> Device Information
                </h2>
                <p>Enter information for new repairable device.</p>
              </div>

              <div className="brand-input-field">
                <br />
                <Label for="exampleName">Defect Name</Label>
                <Input
                  id="exampleName"
                  name="name"
                  placeholder="Enter Your Defect Name"
                  type="name"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                />
                <br />
                <Label for="exampleEmail">Enter Repairable Time</Label>
                <Input
                  id="exampleModal"
                  name="modal"
                  placeholder="Enter Repairable Time"
                  type="name"
                  value={time}
                  onChange={(e)=> setTime(e.target.value)}
                />
                <br />
                <Label for="exampleEmail">Enter Price</Label>
                <Input
                  id="exampleModal"
                  name="modal"
                  placeholder="Enter Price"
                  type="name"
                  value={price}
                  onChange={(e)=> setPrice(e.target.value)}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter style={{ border: "hidden" }}>
            <Button
              color="secondary"
              onClick={handleDefectUpdate}
              style={{ backgroundColor: "blue" }}
            >
              Update
            </Button>
          </ModalFooter>
        </Modal>
    </div>
    </>
  )
}
