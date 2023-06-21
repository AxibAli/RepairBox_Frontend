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

export default function repDefectUModalF() {
    const [modal, setModal] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState("");
    const toggle = () => setModal(!modal);

    const [dropData, setDropData] = useState([]);

    const dropDownData = async () => {
        try {
          const getDrop = await axios.get(
            `http://18.221.148.248:84/api/v1/Brand/GetModelsforDropdown`);
          //  console.log(getDrop)
          if (getDrop.status == 200) {
            let data = getDrop.data.data;
            setDropData(data);
          }
        } catch (error) {}
    };

    useEffect(() => {
        dropDownData();
    }, []);


    return (
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
              {/* <FormGroup>
                      <Label for="exampleSelect">Select Brand</Label>
                      <Input
                        type="select"
                        name="select"
                        id="select"
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                      >
                        <option value="">Select a brand</option>
                        {dropData &&
                          dropData.map((item, index) => (
                            <option key={index} value={item.value}>
                              {item.text}
                            </option>
                          ))}
                      </Input>
                    </FormGroup> */}
                <br />
                <Label for="exampleName">Name</Label>
                <Input
                  id="exampleName"
                  name="name"
                  placeholder="Enter Your Brand Name"
                  type="name"
                //   value={singleModelName}
                //   onChange={(e)=> setSingleModelName(e.target.value)}
                />
                <br />
                <Label for="exampleEmail">Modal</Label>
                <Input
                  id="exampleModal"
                  name="modal"
                  placeholder="Enter Your Brand Modal"
                  type="name"
                />
                <br />
                <FormGroup>
                  <Label for="exampleFile">Image</Label>
                  <Input id="exampleFile" name="file" type="file" />
                </FormGroup>
              </div>
            </div>
          </ModalBody>
          <ModalFooter style={{ border: "hidden" }}>
            {/* <Button
              color="primary"
              // onClick={elemHandleToggle}
              style={{ backgroundColor: "blue" }}
            //   onClick={updateModel}
            >
              Edit
            </Button> */}
            <Button
              color="secondary"
              onClick={toggle}
              style={{ backgroundColor: "blue" }}
            >
              Update
            </Button>
          </ModalFooter>
        </Modal>
    </div>
  )
}
