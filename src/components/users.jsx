import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { FaUsers, RxCross2, BsSortDownAlt, 
  IoIosArrowDroprightCircle,  BsFillTrashFill,TiTick, BiError} from "react-icons/all";
import Avatar1 from "../images/avatar1.png"
import Avatar2 from "../images/avatar2.png"
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


export default function users() {
  const [deleteModal, setDeleteModal] = useState('')
    const areYourSure = () =>{
        setDeleteModal(!deleteModal);
    }
  const [state, setState] = useState(true);
  
  const [createModal, setCreateModal] = useState('')
  const CreateModal = () =>{
    setCreateModal(!createModal)
  }
  const [arrowModal, setArrowModal] = useState('')
  const ArrowModal = () =>{
    setArrowModal(!arrowModal)
  }

  return (
    <>
      <div className="users-container">
            <Container className='user-role-section'> 
              <Row className='g-5 p-4'>
                <Col md={6} className='d-flex gap-2'>
                  <span><FaUsers className='user-role-icon'/></span>
                  <h1 >USERS</h1>
                </Col>
                <Col md={6} className='text-end'>
                <Button onClick={CreateModal}>
                  Create
                </Button>
                <Modal 
                isOpen={createModal}
                toggle={CreateModal}
                style={{ maxWidth: "50%" }}
                >
              <ModalHeader
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                CREATE USER ROLE
                <Button
                  color="primary"
                  style={{ backgroundColor: "blue" }}
                  className="cross-button"
                  onClick={CreateModal}
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
                          <h2>User Details</h2>
                          <p>This Information will be displayed publicly.</p>
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
                <Container>
                  <Row>
                    <Col md={6}>
                      <div className="create-modal-content">
                        <div className="brand-info-content">
                          <h2>User Setting</h2>
                          <p>User access and permission settings.</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <Row className="g-4 pt-4">
                      <div>
                      <Label for="exampleSelect">
                              Role
                            </Label>
                            <Input
                              id="exampleSelect"
                              name="select"
                              type="select"
                            >
                              <option>
                                Select a Role
                              </option>
                              <option>
                                Admin
                              </option>
                              <option>
                                Technician
                              </option>
                            </Input>
                        </div>

                        <div className="radio-select ">
                        <Label>Status : </Label>
                        <FormGroup switch>
                        
                        <Input
                            type="switch"
                            checked={state}
                            onClick={() => {
                              setState(!state);
                            }}
                          />
                        
                          <Label check>{state ? 'User is active' : 'User is Inactive'}</Label>
                          </FormGroup>
                        </div>
                          
                      </Row>
                    </Col>
                  </Row>
                </Container>
                <br />
                <br />
                {/* </div> */}
              </ModalBody>
              
            </Modal>
                </Col>
              </Row>
            </Container>
            <Container className='user-role-section'> 
              <Row className='g-5 p-4'>
                <Col md={6} className='d-flex gap-2'>
                <div className='search-box'>
              <Input
                bsSize="sm"
                type="search"
                placeholder='Search'
              />
            </div>
                </Col>
                <Col md={6} className='text-end'>
                <div className="users-sort">
                   <BsSortDownAlt className='sort_icon'/>
                   <Button>
                   Sort
                   </Button>
                     </div>
                </Col>
              </Row>
            </Container>

              <div className="main_content mt-5">
                <Container>
                  <Row className=" align-items-center p-3">
                    <Col md={5}  >
                    <div className="user_first d-flex align-items-center gap-2">
                    <img src={Avatar1} alt="" style={{borderRadius:"50px" ,width:"13%"}} />
                    <h2 style={{color:"blue"}}>Rose Finch</h2>
                    {/* <p>admin@admin.com</p> */}
                    </div>
                    </Col>
                    <Col md={5} >
                    <div className="user-activation">
                    <p>The user has role the <strong>Admin</strong></p>
                    <span className="d-flex align-items-center gap-2"><TiTick className="tick" /><p>User is activated</p></span>
                    </div>
                    </Col>
                    <Col md={1} >
                     <button>
                     <IoIosArrowDroprightCircle className='users_arrow'/>
                     </button>
                    </Col>
                    <Col md={1}>
                    <button onClick={areYourSure}>
                      <BsFillTrashFill className='users_trash'/>
                    </button>
                    <Modal isOpen={deleteModal} toggle={areYourSure} className="deleteModal">
                    <ModalBody className="delete-body">
                     <span className="d-flex align-items-center pb-3"><BiError className="error-danger"/>  <p>Delete User</p></span>
                     <div className="delete-content pl-5">
                     <p className="mb-2">Are your sure you want to delete the user? All data will be permanently deleted.</p>
                     <p className="text-danger">This action cannot be undone</p>
                     </div>
                    </ModalBody>
                    <ModalFooter className="delete-footer">
                    
                    <button color="secondary" className="delete-cancel" onClick={areYourSure}>
                        Cancel
                      </button>
                      <button className="confirm" onClick={areYourSure}>
                        Yes Confirm
                      </button>
                    
                      
                    </ModalFooter>
                  </Modal>
                    </Col>
                    
                  </Row>
                </Container>
              </div>
              <div className="main_content">
                <Container>
                  <Row className=" align-items-center p-3">
                    <Col md={5}  >
                    <div className="user_first d-flex align-items-center gap-2">
                    <img src={Avatar2} alt="" style={{borderRadius:"50px" ,width:"13%"}} />
                    <h2 style={{color:"blue"}}>Technician</h2>
                    {/* <p>admin@admin.com</p> */}
                    </div>
                    </Col>
                    <Col md={5} >
                    <div className="user-activation">
                    <p>The user has role the <strong>Admin</strong></p>
                    <span className="d-flex align-items-center gap-2"><TiTick className="tick" /><p>User is activated</p></span>
                    </div>
                    </Col>
                    <Col md={1} >
                     <button>
                     <IoIosArrowDroprightCircle className='users_arrow'/>
                     </button>
                    </Col>
                    <Col md={1}>
                    <button>
                      <BsFillTrashFill className='users_trash'/>
                    </button>
                    </Col>
                    
                  </Row>
                </Container>
              </div>
              <div className="main_content showing-users">
                <Container className='p-3'>
                  <Row>
                    <Col md={12} ><h4 className='roles'>Showing 2 user roles</h4></Col>
                  </Row>
                </Container>
              </div>
              
              
         </div>
         <Modal   style={{ maxWidth: "50%" }}>
              <ModalHeader
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                CREATE USER
                <Button
                  color="primary"
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
                          <h2>User Details</h2>
                          <p>This Information will be displayed publicly.</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <Row className="g-4 pt-4">
                        <div className="brand-input-field">
                          <Label for="name">Name:</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Enter Your Name"
                            type="text"
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
              {/* <hr /> */}
              
            </Modal>

    </>
  );
}
