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

{/* <div className="rep-create-button" onClick={handleRepToggle}>
<button>Create</button> */}

export default function repDefectCModalF(props) {
    const [modal, setModal] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState("");
    const [title, settitle] = useState("");
    const [price, setprice] = useState();
    const [cost, setcost] = useState(0);
    const [time, settime] = useState();
    const [selectedFile, setSelectedFile] = useState(null);

    const toggle = () => setModal(!modal);


    const [dropData, setDropData] = useState([]);

    const dropDownData = async () => {
        try {
          const getDrop = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/Brand/GetModelsforDropdown`);
           console.log(getDrop)
          if (getDrop.status == 200) {
            let data = getDrop.data.data;
            setDropData(data);
          }
        } catch (error) {}
    };


    const singleDefectCreate = async (e) =>{
        e.preventDefault()
        try {
          const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/Brand/AddDefect`, {
            title: `${title}`,
            price: `${price}`,
            cost: `${cost}`,
            time: `${time}`,
            modelId: `${selectedBrand}`
          },
    
          );
          if (response.status === 200) {
            // console.log(response)
            props.getData()
            toast.success('Model Created Successfully');
            settitle('')
            setprice('')
            setcost('')
            settime('')
            setSelectedBrand('')
            toggle();
            console.log('Success:', response.data);
          } else {
            console.log('Unexpected response status:', response.status);
          }
        } catch (error) {
          console.error('Error:', error);
        }
    };

    const saveDefects = async (e) => {
        e.preventDefault();
        try {
          let formData = new FormData()
        formData.append('file',selectedFile)
        // formData.append('brandId', selectedBrand)
        console.log([...formData])
          const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/Brand/AddDefects?modelId=${selectedBrand}`,
           formData
          );
          if (response.status === 200) {
            toast.success('Model CSV Created Successfully');
            setSelectedBrand("");
            setSelectedFile(null);
            props.getData();
            toggle();
          }
        } catch (error) {
          console.error(error);
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    useEffect(() => {
        dropDownData();
    }, []);
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
    <div >
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
        style={{ maxWidth: "60%" }}
        >
            <ModalHeader
                toggle={toggle}
                style={{
                fontSize: "1.2rem",
                fontWeight: "500",
                }}
            >
                CREATE REPAIRABLE DEVICE
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
                    <FormGroup>
                    <Label for="exampleSelect">Select Model</Label>
                    <Input
                        type="select"
                        name="select"
                        id="select"
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                    >
                        <option value="">Select a Model</option>
                        {dropData &&
                        dropData.map((item, index) => (
                            <option key={index} value={item.value}>
                            {item.text}
                            </option>
                        ))}
                    </Input>
                    </FormGroup>

                    <br />
                    <Label for="exampleName">Defect Title</Label>
                    <Input
                        id="exampleName"
                        name="name"
                        placeholder="Enter Defect Title"
                        type="name"
                        value={title}
                        onChange={(e)=>settitle(e.target.value)}
                    />
                    <br />
                    <Label for="exampleEmail">Price</Label>
                    <Input
                        id="exampleModal"
                        name="modal"
                        placeholder="Enter Defect Price"
                        type="text"
                        value={price}
                        onChange={(e)=>setprice(e.target.value)}
                    />
                    <br />
                    <FormGroup>
                    <Label for="exampleFile">Repair Time</Label>
                    <Input
                        id="exampleModal"
                        name="modal"
                        placeholder="Enter Time for Device to be Fixed"
                        type="text"
                        value={time}
                        onChange={(e)=>settime(e.target.value)}
                    />

                    </FormGroup> 
                </div>
            </div>
            </ModalBody>
            <ModalFooter style={{ border: "none" }}>
                <Button
                    color="primary"
                    style={{ backgroundColor: "blue" }}
                    onClick={singleDefectCreate}
                >
                Save
                </Button>
            </ModalFooter>

        <hr />
            <ModalHeader
                toggle={toggle}
                style={{
                fontSize: "1.2rem",
                fontWeight: "500",
                border: "none",
                }}
            ></ModalHeader>
            <ModalBody style={{ border: "none" }}>
                <div className="create-modal-content">
                    <div className="brand-info-content">
                        <h2>Batch Entries With CSV Import</h2>
                        <p>
                        Upload file for batch entries. A file should be CSV with
                        format. A file must have only columns with title of
                        "defect name","price", "time required"
                        </p>
                    </div>

                    <div className="brand-input-field">
                        <FormGroup>
                        <Label for="exampleSelect">Select Model</Label>
                        <Input
                            type="select"
                            name="select"
                            id="exampleSelect"
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                        >
                            <option value="">Select a Model</option>{" "}
                            {/* Add an initial empty option */}
                            {dropData &&
                            dropData.map((item, index) => (
                                <option key={index} value={item.value}>
                                {item.text}
                                </option>
                            ))}
                        </Input>
                        </FormGroup>
                        <br />
                        <FormGroup>
                        <Label for="exampleFile">Image</Label>
                        <Input id="exampleFile" name="file" type="file" accept={".csv"}
                            onChange={handleFileChange}
                        />
                        </FormGroup>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter style={{ border: "hidden" }}>
                <Button
                color="secondary"
                onClick={saveDefects}
                style={{ backgroundColor: "blue" }}
                >
                Upload
                </Button>
            </ModalFooter>
        </Modal>
    </div>
    </>
  )
}

