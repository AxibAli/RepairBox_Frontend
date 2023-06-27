import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  FaUsers,
  RxCross2,
  BsSortDownAlt,
  IoIosArrowDroprightCircle,
  BsFillTrashFill,
  TiTick,
  BiError,
} from "react-icons/all";
import Avatar1 from "../images/avatar1.png";
// import Avatar2 from "../images/avatar2.png";
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
  const [getUsers, setGetUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRole, setUserRole] = useState(1);
  const [userStatus, setUserStatus] = useState("Active");
  const [role, setGetRole] = useState([]);
  const [userId, setUserId] = useState("");

  const deleteUser = async (userId) => {
    // console.log(userId)
    try {
      const response = await axios.post(
        `http://18.221.148.248:84/api/v1/User/DeleteUser?Id=${userId}`
      );
      if (response.status == 200) {
        toast.success("User Deleted Successfully");
        getUsersData();
        areYourSure();
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const CreateModal = () => {
    // console.log(items, "sasdas")

    setCreateModal(!createModal);
  };
  const updateUser = async () => {
    try {
      const response = await axios.post(
        "http://18.221.148.248:84/api/v1/User/UpdateSelfUser",
        {
          id: userId,
          username: userName,
          email: userEmail,
        }
      );
      if (response.status == 200) {
        toast.success("User Updated Successfully");
        setUserName("");
        setUserEmail("");
        getUsersData();
        ArrowModal();
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const createUser = async (e) => {
    e.preventDefault();
    // console.log(userName, userEmail, userPassword, userRole, userStatus)
    try {
      // const requestBody = {

      // };
      const response = await axios.post(
        "http://18.221.148.248:84/api/v1/User/CreateUser",
        // requestBody
        {
          username: userName,
          email: userEmail,
          password: userPassword,
          userRoleId: userRole,
          status: userStatus,
        }
      );
      if (response.status === 200) {
        toast.success("User Created Successfully");
        setUserName("");
        setUserEmail("");
        setUserPassword("");
        getUsersData();
        CreateModal();
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getUsersData();
    GetRole();
  }, []);

  const GetRole = async () => {
    try {
      const response = await axios.get(
        "http://18.221.148.248:84/api/v1/User/GetRoles"
      );
      // console.log(response)
      if (response.status == 200) {
        const data = response.data.data;
        setGetRole(data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  const getUsersData = async () => {
    try {
      const response = await axios.get(
        "http://18.221.148.248:84/api/v1/User/GetUsers"
      );
      console.log(response.data.data);
      if (response.status == 200) {
        let data = response.data.data.reverse();
        setGetUsers(data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const [deleteModal, setDeleteModal] = useState("");
  const areYourSure = () => {
    setDeleteModal(!deleteModal);
  };
  const [state, setState] = useState(true);

  const [createModal, setCreateModal] = useState("");

  const [arrowModal, setArrowModal] = useState("");
  const ArrowModal = (item, type) => {
    if (type == "edit") {
      setUserName(item.username);
      setUserEmail(item.email);
      setUserId(item.id);
    }
    setArrowModal(!arrowModal);
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
        <Container className="user-role-section">
          <Row className="g-5 p-4">
            <Col md={6} className="d-flex gap-2">
              <span>
                <FaUsers className="user-role-icon" />
              </span>
              <h1>USERS</h1>
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
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                            />
                          </div>

                          <div className="brand-input-field">
                            <Label for="email">Email :</Label>
                            <Input
                              id="email"
                              name="email"
                              placeholder="Enter Your Email"
                              type="text"
                              value={userEmail}
                              onChange={(e) => setUserEmail(e.target.value)}
                            />
                          </div>

                          <div className="brand-input-field">
                            <Label for="password">Password :</Label>
                            <Input
                              id="password"
                              name="password"
                              placeholder="Enter Your Password"
                              type="password"
                              value={userPassword}
                              onChange={(e) => setUserPassword(e.target.value)}
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
                <ModalFooter style={{ border: "hidden" }}></ModalFooter>
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
                            <Label for="exampleSelect">Role</Label>
                            <Input
                              id="exampleSelect"
                              name="select"
                              type="select"
                              value={userRole}
                              onChange={(e) => setUserRole(e.target.value)}
                            >
                              <option>Select a Role</option>
                              {role.length > 0 &&
                                role.map((item, index) => (
                                  <option key={index} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                            </Input>
                          </div>

                          <div className="radio-select ">
                            <Label>Status : </Label>
                            <FormGroup switch>
                              <Input
                                type="switch"
                                value={userStatus}
                                onChange={() => {
                                  setUserStatus(!userStatus);
                                }}
                              />

                              <Label check>
                                {state ? "User is active" : "User is Inactive"}
                              </Label>
                            </FormGroup>
                          </div>
                          <Button
                            type="submit"
                            color="secondary"
                            style={{ backgroundColor: "blue" }}
                            onClick={createUser}
                          >
                            Save
                          </Button>
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

        <div className="main_content mt-5">
          <Container>
            {getUsers.map((user, index) => (
              <Row className="align-items-center p-3 my-4" key={index}>
                <Col md={5}>
                  <div className="user_first d-flex align-items-center gap-2">
                    <img
                      src={Avatar1}
                      alt=""
                      style={{ borderRadius: "50px", width: "13%" }}
                    />
                    <div className="user___content">
                      <h2 style={{ color: "blue" }}>{user.username}</h2>
                      <p className="text-muted">{user.email}</p>
                    </div>
                  </div>
                </Col>
                <Col md={5}>
                  <div className="user-activation">
                    <p>
                      The user has the role:{" "}
                      <strong>{user.isActive}Admin</strong>
                    </p>
                    <span className="d-flex align-items-center gap-2">
                      <TiTick className="tick" />
                      <p>{user.isActive} User is active</p>
                    </span>
                  </div>
                </Col>
                <Col md={1}>
                  <button onClick={() => ArrowModal(user, "edit")}>
                    {/* <p>{user.id}</p> */}
                    <IoIosArrowDroprightCircle className="users_arrow" />
                  </button>
                </Col>
                <Col md={1}>
                  <button onClick={areYourSure}>
                    <BsFillTrashFill className="users_trash" />
                  </button>
                  <Modal
                    isOpen={deleteModal}
                    toggle={areYourSure}
                    className="deleteModal"
                  >
                    <ModalBody className="delete-body">
                      <span className="d-flex align-items-center pb-3">
                        <BiError className="error-danger" />
                        <p>Delete User</p>
                      </span>
                      <div className="delete-content pl-5">
                        <p className="mb-2">
                          Are you sure you want to delete the user? All data
                          will be permanently deleted.
                        </p>
                        <p className="text-danger">
                          This action cannot be undone.
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
                      <button
                        className="confirm"
                        onClick={() => deleteUser(user.id)}
                      >
                        Yes, Confirm
                      </button>
                    </ModalFooter>
                  </Modal>
                </Col>
              </Row>
            ))}
            <Modal
              isOpen={arrowModal}
              toggle={ArrowModal}
              style={{ maxWidth: "50%", background: "none", zIndex: 9999 }}
            >
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
                  onClick={ArrowModal}
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
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </div>
                        <div className="brand-input-field">
                          <Label for="email">Email:</Label>
                          <Input
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            type="text"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                          />
                        </div>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </ModalBody>
              <ModalFooter style={{ border: "hidden" }}>
                <Button
                  type="submit"
                  color="secondary"
                  style={{ backgroundColor: "blue" }}
                  onClick={updateUser}
                >
                  Save
                </Button>
              </ModalFooter>
            </Modal>
          </Container>
        </div>

        <div className="main_content showing-users">
          <Container className="p-3">
            <Row>
              <Col md={12}>
                <h4 className="roles">Showing {getUsers.length} Users</h4>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* <div className="main_content">
                <Container>
                  <Row className=" align-items-center p-3">
                    <Col md={5}  >
                    <div className="user_first d-flex align-items-center gap-2">
                    <img src={Avatar2} alt="" style={{borderRadius:"50px" ,width:"13%"}} />
                    <h2 style={{color:"blue"}}>Technician</h2>
                    <p>admin@admin.com</p>
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
              </div> */}
    </>
  );
}
