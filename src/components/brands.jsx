import React, { useState } from "react";
import { BiStar } from "react-icons/bi";
import { IoIosArrowDroprightCircle, RxCross2 } from "react-icons/all";
import { AiFillFolderOpen } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import brandsData from "./brandsData";
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

const brands = () => {
  const [modal, setModal] = useState(false);
  const [otherModal,setOtherModal]= useState(false);
  const toggle = () => setModal(!modal);
  const handleToggle = () => setOtherModal(!otherModal);



    //  useEffect(() =>{
    //   fetch("")
    //  })

  return (
    <>
      <div className="main-brand-container">
        <div className="brand-top-section">
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  <div className="col-12 col-md-6 mx-auto">
                    <div className="brand_name">
                      <i>
                        <AiFillFolderOpen className="folder-icon" />
                      </i>
                      <h1>BRANDS</h1>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mx-auto">
                    <div className="buttons" onClick={toggle}>
                      <NavLink className="create-button">Create</NavLink>
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
                              
                          CRAETE BRAND

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
                          <div className="create-modal-content">
                            <div className="brand-info-content">
                              <h2>Brand Information</h2>
                              <p>Enter information for new brand.</p>
                            </div>
                            <div className="brand-input-field">
                              <Label for="exampleEmail">Name :</Label>
                              <Input
                                id="exampleName"
                                name="name"
                                placeholder="Enter Your Brand Name"
                                type="name"
                              />
                            </div>
                          </div>
                        </ModalBody>
                        <ModalFooter style={{ border: "hidden" }}>
                          <Button
                            color="primary"
                            onClick={toggle}
                            style={{ backgroundColor: "blue" }}
                          >
                            Upload
                          </Button>
                          <Button
                            color="secondary"
                            onClick={toggle}
                            style={{ backgroundColor: "blue" }}
                          >
                            Save
                          </Button>
                        </ModalFooter>

                        <hr />
                        <ModalBody>
                          <div className="create-modal-content">
                            <div className="brand-info-content">
                              <h2>
                                Batch Entries With <br /> CSV Import
                              </h2>
                              <p>
                                Upload file for batch entries. A file should be
                                CSV with format. A file must have only one
                                column with title of "name"
                              </p>
                            </div>
                            <div className="brand-input-field">
                              <FormGroup>
                                <Label for="exampleFile">File</Label>
                                <Input
                                  id="exampleFile"
                                  name="file"
                                  type="file"
                                />
                              </FormGroup>
                            </div>
                          </div>
                        </ModalBody>
                        
                      </Modal>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {brandsData.map((brand, index) => (
          <div className="container " key={index}>
            <div className="brands-name">
              <div className="brand-subname">
                <BiStar className="star-icon" />
                <h1>{brand.name}</h1>
                <NavLink className="brand-link" onClick={handleToggle}>
                  <IoIosArrowDroprightCircle className="arrow-icon" />
                </NavLink>
              </div>
            </div>
            <Modal
                        isOpen={otherModal}
                        toggle={handleToggle}
                        style={{ maxWidth: "50%" }}
                      >
                        <ModalHeader
                          // toggle={handleToggle}
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          
                          CRAETE BRAND
                          <Button
                            color="primary"
                            onClick={handleToggle}
                            style={{ backgroundColor: "blue" }}
                            className="cross-button"
                          >
                           <RxCross2/>
                          </Button>
                        </ModalHeader>
                        <ModalBody>
                          <div className="create-modal-content">
                            <div className="brand-info-content">
                              <h2>Brand Information</h2>
                              <p>Enter information for new brand.</p>
                            </div>
                            <div className="brand-input-field">
                              <Label for="exampleEmail">Name :</Label>
                              <Input
                                id="exampleName"
                                name="name"
                                placeholder="Enter Your Brand Name"
                                type="name"
                              />
                            </div>
                          </div>
                        </ModalBody>
                        <ModalFooter style={{ border: "hidden" }}>
                          <Button
                            color="primary"
                            onClick={handleToggle}
                            style={{ backgroundColor: "blue" }}
                          >
                            Save
                          </Button>{" "}
                          <Button
                            color="secondary"
                            onClick={handleToggle}
                            style={{ backgroundColor: "blue" }}
                          >
                            Upload
                          </Button>
                        </ModalFooter>

                        <hr />
                        <ModalBody>
                          <div className="create-modal-content">
                            <div className="brand-info-content">
                              <h2>
                                Batch Entries With <br /> CSV Import
                              </h2>
                              <p>
                                Upload file for batch entries. A file should be
                                CSV with format. A file must have only one
                                column with title of "name"
                              </p>
                            </div>
                            <div className="brand-input-field">
                              <FormGroup>
                                <Label for="exampleFile">File</Label>
                                <Input
                                  id="exampleFile"
                                  name="file"
                                  type="file"
                                />
                              </FormGroup>
                            </div>
                          </div>
                        </ModalBody>
                      </Modal>            {/* modal here */}
                
          </div>
        ))}
      </div>
    </>
  );
};

export default brands;
