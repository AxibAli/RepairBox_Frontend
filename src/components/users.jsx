import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { FaUsers, RxCross2, BsSortDownAlt } from "react-icons/all";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup,
  Col,
  Container,
  Row,
  Form,
} from "reactstrap";
// import { Col, Container, Input, Label, Row } from 'reactstrap';

export default function users() {
  const [modal, setModal] = useState(false);
  // const [otherModal,setOtherModal]= useState(false);
  const toggle = () => setModal(!modal);
  // const handleToggle = () => setOtherModal(!otherModal);

  return (
    <>
      <div className="main-users-container">
        <div className="top-section">
          <div className="users-name">
            <i>
              <FaUsers />
            </i>
            <h1>USERS</h1>
          </div>
          <div className="users-create-button" onClick={toggle}>
            <button>Create</button>
            <Modal isOpen={modal} toggle={toggle} style={{ maxWidth: "50%" }}>
              <ModalHeader
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                CREATE USER
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
                <Container>
                  <Row>
                    <Col md={6}>
                      <div className="create-modal-content">
                        <div className="brand-info-content">
                          <h2>User Information</h2>
                          <p>Enter information for new User.</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <Row className="g-4 pt-4">
                        <div className="brand-input-field">
                          <Label for="name">Name :</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Enter Your Name"
                            type="text"
                          />
                        </div>

                        <div className="brand-input-field">
                          <Label for="email">Email :</Label>
                          <Input
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            type="text"
                          />
                        </div>

                        <div className="brand-input-field">
                          <Label for="password">Password :</Label>
                          <Input
                            id="password"
                            name="password"
                            placeholder="Enter Your Password"
                            type="password"
                          />
                        </div>
                      </Row>
                    </Col>
                  </Row>
                </Container>
                <br />
                <br />
                {/* </div> */}
              </ModalBody>
              <ModalFooter style={{ border: "hidden" }}>
                <Button
                  type="submit"
                  color="secondary"
                  style={{ backgroundColor: "blue" }}
                >
                  Save
                </Button>
              </ModalFooter>

              <hr />
              <ModalBody>
              <div className="create-modal-content">
      <Row>
        <Col md={6} className="brand-info-content">
          <h2>Users Settings</h2>
          <p>User access and permission settings.</p>
        </Col>
        <Col md={6} className="brand-input-field">
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input id="exampleFile" name="file" type="file" />
          </FormGroup>
        </Col>
      </Row>
    </div>
              </ModalBody>
              <ModalFooter style={{ border: "hidden" }}>
                <Button
                  color="secondary"
                  type="upload"
                  style={{ backgroundColor: "blue" }}
                >
                  Upload
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
        {/* search box start */}

        <div className="search-box">
          {/* search box */}

          <form action="">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search User"
              aria-label="Username"
            />

            {/*dropDOWN  */}
            {/* 
            <select
              className="form-select"
              aria-label="Default select example"
              id="repdevicesDrop"
              name="repdevicesDrop"
            >
              <option selected>Select Brand</option>
              <option value="1">Name</option>
              <option value="2">Modal</option>
              <option value="3">Created At</option>
            </select> */}
          </form>

          {/* Sorting Page */}
          <div className="sort-page">
            <BsSortDownAlt />
            <button>Sort</button>
          </div>
        </div>
      </div>
    </>
  );
}
