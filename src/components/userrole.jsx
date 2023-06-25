import React, { useState } from 'react'
import { Container,
  Row,
  Col,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup
} from 'reactstrap'
import {FaUserShield,
  BsSortDownAlt,
  IoIosArrowDroprightCircle,
  BsFillTrashFill,
  RxCross2,
  BiError
} from "react-icons/all"
const userrole = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionId) => {
    setSelectedOption( optionId);
    // console.log(optionId)
  };
    const options = [
      {id:1 , label : "Access Dashbaord"},
      {id:2 , label : "Manage repairorders"},
      {id:3 , label : "Manage quick replies"},
      {id:4 , label : "Manage devices"},
      {id:5 , label : "Manage brands"},
      {id:6 , label : "Manage defects"},
      {id:7 , label : "Manage statuses"},
      {id:8 , label : "Manage priorities"},
      {id:9 , label : "Manage users"},
      {id:10 , label : "Manage users role"},


    ]
    
   const[state, setState]=useState('')
  const[createModal, setCreateModal]=useState('')
  const[arrowModal, setArrowModal]=useState('')

  const CreateModal = () =>{
    setCreateModal(!createModal)
  }
  const ArrowModal = () =>{
    setArrowModal(!arrowModal)
  }

  const [deleteModal, setDeleteModal] = useState('')
  const areYourSure = () =>{
      setDeleteModal(!deleteModal);
  }
  return (
    <>
         <div className="users-container">
            <Container className='user-role-section'> 
              <Row className='g-5 p-4'>
                <Col md={6} className='d-flex gap-2'>
                  <span><FaUserShield className='user-role-icon'/></span>
                  <h1 >USER ROLE</h1>
                </Col>
                <Col md={6} className='text-end'>
                <Button onClick={CreateModal}>
                  Create
                </Button>
                <Modal isOpen={createModal} toggle={CreateModal} style={{ maxWidth: "50%" }}>
              <ModalHeader
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                CREATE USER ROLE
                <Button
                  color="primary"
                  onClick={CreateModal}
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
                          <h2>Role Details</h2>
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
                      </Row>
                    </Col>
                  </Row>
                </Container>
                <br />
                <br />
                {/* </div> */}
              </ModalBody>
              <ModalBody style={{borderTop: '1px solid lightgray'}}>
                <Container>
                  <Row>
                    <Col md={6}>
                      <div className="create-modal-content">
                        <div className="brand-info-content">
                          <h2>Permissions</h2>
                          <p>Sections of the application protected with authentications.</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <Row className="g-4 pt-4">
                      <div className="radio-select ">
                        <Label>Status : </Label>
                        {options.map((option) => (
                          <div className="radio-select" key={option.id}>
                            <FormGroup switch>
                              <Input
                                type="radio"
                                id={`option-${option.id}`}
                                switched={selectedOption === option.id}
                                onChange={() => handleOptionChange(option.id)}
                                
                              />
                              <Label for={`option-${option.id}`} check>{option.label}</Label>
                            </FormGroup>
                          </div>
                        ))}
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
                <Container className='p-4'>
                  <Row>
                    <Col md={5} ><h4>Admin</h4></Col>
                    <Col md={5} ><p>1 assigned users</p></Col>
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
                     <span className="d-flex align-items-center pb-3"><BiError className="error-danger"/>  <p>Delete User Role</p></span>
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
                <Container className='p-4'>
                  <Row>
                    <Col md={5} ><h4 className='text-danger'>Technician</h4></Col>
                    <Col md={5} ><p>1 assigned users</p></Col>
                    <Col md={1} >
                     <button onClick={ArrowModal}>
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
                <Container className='p-2'>
                  <Row>
                    <Col md={12} ><h4 className='roles'>Showing 2 user roles</h4></Col>
                  </Row>
                </Container>
              </div>
         </div>
         <Modal isOpen={arrowModal} toggle={ArrowModal} style={{ maxWidth: "50%" }}>
              <ModalHeader
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                CREATE USER ROLE
                <Button
                  color="primary"
                  onClick={ArrowModal}
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
                          <h2>Role Details</h2>
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
  )
}

export default userrole
