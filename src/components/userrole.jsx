import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Form,
} from "reactstrap";
import {
  FaUserShield,
  BsSortDownAlt,
  IoIosArrowDroprightCircle,
  BsFillTrashFill,
  RxCross2,
  BiError,
} from "react-icons/all";
import axios from "axios";


const userrole = () => {
  const [getRole, setGetRole] = useState([]);
  const [createModal, setCreateModal] = useState("");
  const [arrowModal, setArrowModal] = useState("");
  const [permissions, setPermissions] = useState([])
  // const [selectedOption, setSelectedOption] = useState(null);
  const [roleName, setRoleName] = useState('')
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [roleId, setRoleId] = useState('')

    console.log(roleId, roleName, selectedPermissions)
  // console.log(roleId)

  //  console.log(roleName, selectedPermissions)
  const ArrowModal = (item, type) => {
     if(type == "edit"){
       setRoleId(item.id);
       setRoleName(item.name)
     }
    setArrowModal(!arrowModal);
  };
  
       const updateRole = async () =>{
        try {
          const response = await axios.post('http://18.221.148.248:84/api/v1/User/UpdateRole' ,{
            id : roleId,
            name : roleName,
            permissionIds : selectedPermissions,
          });
          if(response.status === 200){
            setRoleName('');
            setSelectedPermissions([])
            GetUserRole();
            ArrowModal();
            toast.success('role update successfully')
          }
        } catch (error) {
           toast.error("Ooops" , error)
        }
       }
    
      const deleteRole = async (roleId) =>{
        try {
           const response = await axios.post(`http://18.221.148.248:84/api/v1/User/DeleteRole?id=${roleId}`)
           if(response.status ===200){
            GetUserRole();
            toast.success("Role Deleted Successfully")
           }
        } catch (error) {
          console.log("error" ,error)
        }
      }      


      const handleSwitchChange = (permissionId, permissionName, checked) => {
        if (checked) {
          setSelectedPermissions((prevPermissions) => [
            ...prevPermissions,
            { id: permissionId, name: permissionName },
          ]);
        } else {
          setSelectedPermissions((prevPermissions) =>
            prevPermissions.filter((permission) => permission.id !== permissionId)
          );
        }
      };
  
  const CreateModal = () => {
    setCreateModal(!createModal);
  };

    const createUserRole = async () =>{
      try {
         const response = await axios.post('http://18.221.148.248:84/api/v1/User/CreateRole',
         {
          name: roleName,
          permissionIds: selectedPermissions.map((permission) => permission.id),
        }
         );
         if (response.status ===200) {
           setRoleName('');
           GetUserRole();
           setSelectedPermissions([]);
           CreateModal();
           toast.success('role create successfully')
         }
      } catch (error) {
         console.log("Error" ,error)
      }
    }   

       useEffect(()=>{
         GetUserRole();
         getPermissions();
       },[]);
 
 
      const getPermissions = async () =>{
        try {
           const response = await axios.get('http://18.221.148.248:84/api/v1/User/GetPermissions');
          //  console.log(response.data.data, "sasa")
           if(response.status===200){
               let data = response?.data?.data;
               setPermissions(data);
           }
        } catch (error) {
            console.log("Error", error)
        }
      }
        
         
           const GetUserRole = async () =>{
          try {
             const response = await axios.get("http://18.221.148.248:84/api/v1/User/GetRoles");
              // console.log(response.data.data , "sasa")
             if(response.status === 200){
               const data = response.data.data; 
               setGetRole(data);
             }
          } catch (error) {
             console.log("Error", error)
          }
         }
    
  

  // const [state, setState] = useState("");


 
  

  const [deleteModal, setDeleteModal] = useState("");
  const areYourSure = () => {
    setDeleteModal(!deleteModal);
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
        progressBarStyle={{ backgroundColor: "red" }}
      />
      <div className="users-container">
      <Form>
        <div className="top_modal">
          <Container className="user-role-section">
            <Row className="g-5 p-4">
              <Col md={6} className="d-flex gap-2">
                <span>
                  <FaUserShield className="user-role-icon" />
                </span>
                <h1>USER ROLE</h1>
              </Col>
              <Col md={6} className="text-end">
                <Button onClick={CreateModal}>Create</Button>
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
                              <p>
                                This Information will be displayed publicly.
                              </p>
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
                                value={roleName}
                                onChange={(e)=>setRoleName(e.target.value)}
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
                  <ModalBody style={{ borderTop: "1px solid lightgray" }}>
                    <Container>
                      <Row>
                        <Col md={6}>
                          <div className="create-modal-content">
                            <div className="brand-info-content">
                              <h2>Permissions</h2>
                              <p>
                                Sections of the application protected with
                                authentications.
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <Row className="g-4 pt-4">
                        <div className="radio_switch">
                          {permissions.length > 0 ? (
                            permissions.map((per, index) => (
                              <FormGroup switch key={index} className="pt-1">
                                <Input
                                  type="switch"
                                  role="switch"
                                  checked={selectedPermissions.some(
                                    (permission) => permission.id === per.id
                                  )}
                                  onChange={(e) =>
                                    handleSwitchChange(per.id, per.name, e.target.checked)
                                  }
                                />
                                <Label check>{per.name}</Label>
                              </FormGroup>
                            ))
                          ) : (
                            <p>Empty</p>
                          )}
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
                      onClick={createUserRole}
                      
                    >
                      Save
                    </Button>
                  </ModalFooter>
                  {/* <hr /> */}
                </Modal>
              </Col>
            </Row>
          </Container>
        </div>
        </Form>
        <Container className="user-role-section">
          <Row className="g-5 p-4">
            <Col md={6} className="d-flex gap-2">
              <div className="search-box">
                <Input bsSize="sm" type="search" placeholder="Search" />
              </div>
            </Col>
            <Col md={6} className="text-end">
              <div className="users-sort">
                <BsSortDownAlt className="sort_icon" />
                <Button>Sort</Button>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="main_content mt-5" >
          {getRole.map((role, index) => (
          <Container className="p-4 user_role_container " key={index}>
            <Row >
              <Col md={5} >
                <h4 className="capitalize">{role.name}</h4>
                {/* <h3>{role.id}</h3> */}
              </Col>
              <Col md={5}>
                <p>assigned user</p>
              </Col>
              <Col md={1}>
              <button onClick={() => ArrowModal(role, "edit")}>
                <IoIosArrowDroprightCircle className="users_arrow" />
              </button>
              </Col>
              <Col md={1}>
                <button onClick={()=>deleteRole(role.id)}>
                  <BsFillTrashFill className="users_trash" />
                </button>
                <Modal
                  isOpen={deleteModal}
                  toggle={areYourSure}
                  className="deleteModal"
                >
                  <ModalBody className="delete-body">
                    <span className="d-flex align-items-center pb-3">
                      <BiError className="error-danger" />{" "}
                      <p>Delete User Role</p>
                    </span>
                    <div className="delete-content pl-5">
                      <p className="mb-2">
                        Are your sure you want to delete the user? All data will
                        be permanently deleted.
                      </p>
                      <p className="text-danger">
                        This action cannot be undone
                      </p>
                    </div>
                  </ModalBody>
                  <ModalFooter className="delete-footer">
                    <button
                      color="secondary"
                      className="delete-cancel"
                      onClick={areYourSure}
                    >
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
            ))}
        </div>
        <Modal
                  isOpen={arrowModal}
                  toggle={ArrowModal}
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
                              <p>
                                This Information will be displayed publicly.
                              </p>
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
                                value={roleName}
                                onChange={(e)=>setRoleName(e.target.value)}
                              />
                            </div>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                    <br />
                    <br />
                  </ModalBody>
                  <ModalBody style={{ borderTop: "1px solid lightgray" }}>
                    <Container>
                      <Row>
                        <Col md={6}>
                          <div className="create-modal-content">
                            <div className="brand-info-content">
                              <h2>Permissions</h2>
                              <p>
                                Sections of the application protected with
                                authentications.
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <Row className="g-4 pt-4">
                        <div className="radio_switch">
                            {/* <Label>Status:</Label> */}
                             {permissions.length > 0 ? (
                              permissions.map((per, index) =>(
                                <FormGroup switch key={index} className="pt-1">
                                  <Input type="switch" role="switch"
                                    value={selectedPermissions}
                                    onChange={(e) => {
                                      handleSwitchChange(per.id, per.name, e.target.checked)
                                  }}
                                    />
                                  <Label check>{per.name}</Label>
                                  {/* <Label check>{per.id}</Label> */}
                                </FormGroup>
                              ))
                             ):
                              <p>Empty</p>
                             }
                          </div>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                    <br />
                    <br />
                  </ModalBody>
                  <ModalFooter style={{ border: "hidden" }}>
                    <Button
                      type="submit"
                      color="secondary"
                      style={{ backgroundColor: "blue" }}
                      onClick={updateRole}
                    >
                      Save
                    </Button>
                  </ModalFooter>
                </Modal>
           


        {/* <div className="main_content">
          <Container className="p-4">
            <Row>
              <Col md={5}>
                <h4 className="text-danger">Technician</h4>
              </Col>
              <Col md={5}>
                <p>1 assigned users</p>
              </Col>
              <Col md={1}>
                <button onClick={ArrowModal}>
                  <IoIosArrowDroprightCircle className="users_arrow" />
                </button>
              </Col>
              <Col md={1}>
                <button>
                  <BsFillTrashFill className="users_trash" />
                </button>
              </Col>
            </Row>
          </Container>
        </div> */}
        <div className="main_content showing-users">
          <Container className="p-2">
            <Row>
              <Col md={12}>
                <h4 className="roles"> Showing {getRole.length} user roles</h4>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default userrole;
