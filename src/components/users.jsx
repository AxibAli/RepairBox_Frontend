import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUsers, RxCross2} from "react-icons/all";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup,
  Form,
} from "reactstrap";

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
                <div className="create-modal-content">
                  <div className="brand-info-content">
                    <h2>User Information</h2>
                    <p>Enter information for new User.</p>
                  </div>
                  <div className="brand-input-field">
                    <Label for="exampleEmail">Name :</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter Your Name"
                      type="name"
                    />
                  </div>
                </div>
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
                  <div className="brand-info-content">
                    <h2>
                      Batch Entries With <br /> CSV Import
                    </h2>
                    <p>
                      Upload file for batch entries. A file should be CSV with
                      format. A file must have only one column with title of
                      "name"
                    </p>
                  </div>
                  <div className="brand-input-field">
                    <FormGroup>
                      <Label for="exampleFile">File</Label>
                      <Input id="exampleFile" name="file" type="file" />
                    </FormGroup>
                  </div>
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
              placeholder="Search"
              aria-label="Username"
            />

            {/*dropDOWN  */}

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
            </select>
          </form>

          {/* Sorting Page */}
          <div className="sort-page">
            <BsSortDownAlt />
            <button onClick={handleSort}>Sort</button>
          </div>
        </div>
      </div>
    </>
  );
}
