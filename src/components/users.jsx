import React, { useContext, useEffect, useState } from "react";
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
import { AppContext } from "../context";




export default function users() {
  
  const {user} = useContext(AppContext)
  const userResources = user.resources;
  const [getUsers, setGetUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userStatus, setUserStatus] = useState("Active");
  const [role, setGetRole] = useState([]);
  const [userId, setUserId] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
 
     
  // console.log(userName, userEmail, currentPassword, userRole, userStatus)
  // change password state


  const changePassword = async () => {
    try {
      const response = await axios.post(
        "http://13.48.193.17:81/api/v1/User/ChangePassword",
        {
          id: userId,
          currentPassword: currentPassword,
          newPassword1: newPassword1,
          newPassword2: newPassword2,
        }
      );
      if (response.status == 200) {
        // alert(currentPassword, newPassword1, newPassword2)
        toast.success("Password Change Successfully");
        setCurrentPassword(""), setNewPassword1(""), setNewPassword2("");
      } else {
        toast.error("wrong password");
      }
      console.log(userId, currentPassword, newPassword1, newPassword2);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const deleteUser = async (userId) => {
    // console.log(userId)
    try {
      const response = await axios.post(
        `http://13.48.193.17:81/api/v1/User/DeleteUser?Id=${userId}`
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
        "http://13.48.193.17:81/api/v1/User/UpdateSelfUser",
        {
          id: userId,
          username: userName,
          email: userEmail,
        }
      );
      if (response.status == 200) {
        toast.success("User Updated Successfully");
        changePassword();
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
    console.log(userName, userEmail, currentPassword, userRole, userStatus);
    try {
      const response = await axios.post(
        "http://13.48.193.17:81/api/v1/User/CreateUser",
        // requestBody
        {
          username: userName,
          email: userEmail,
          password: currentPassword,
          userRoleId: userRole,
          status: userStatus,
        }
      );
      if (response.status === 200) {
        toast.success("User Created Successfully.");
        setUserName("");
        setUserEmail("");
        setCurrentPassword("");
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
        "http://13.48.193.17:81/api/v1/User/GetRoles"
      );
      console.log(response)
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
        "http://13.48.193.17:81/api/v1/User/GetUsers"
      );
      console.log(response.data.data);
      if (response.status == 200) {
        let data = response.data.data;
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
      setCurrentPassword(item.password);
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
            {userResources['CreateUser'] && (
              <>
              <Button onClick={CreateModal}>Create</Button>
              </>
              )}
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
                  CREATE USER
                  <Button
                    color="primary"
                    style={{ backgroundColor: "blue" }}
                    className="cross-button"
                    onClick={CreateModal}
                  >
                    <RxCross2 />
                  </Button>
                </ModalHeader>
                <Form>
                  <ModalBody>
                    <Container>
                      <Row>
                        <Col md={6}>
                          <div className="create-modal-content">
                            <div className="brand-info-content">
                              <h2>User Details</h2>
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
                              <Label for="text">Password :</Label>
                              <Input
                                id="password"
                                name="password"
                                placeholder="Enter Your Password"
                                type="password"
                                value={currentPassword}
                                onChange={(e) =>
                                  setCurrentPassword(e.target.value)
                                }
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
                  {/* <ModalFooter style={{ border: "hidden" }}></ModalFooter> */}
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
                              <Label for="exampleSelect">Role :</Label>
                              <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                value={userRole}
                                onChange={(e) => setUserRole(e.target.value)}
                              >
                                <option>Select a Role</option>
                                {role.map((item, index) => (
                                  <option key={index} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </Input>
                            </div>
                            <div className="radio-select ">
                              <Label>Status : </Label>
                              <br />
                              <Input
                                name="status"
                                type="switch"
                                value={userStatus}
                                onChange={() => {
                                  setUserStatus(!userStatus);
                                }}
                              />
                              <Label check>
                                {userStatus
                                  ? "User is InActive"
                                  : "User is Active"}
                              </Label>
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
                </Form>
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
          {getUsers.map((user, index) => (
            <Container className="users_content p-3">
              <Row className="align-items-center my-2" key={index}>
                <Col md={5}>
                  <div className="user_first d-flex align-items-center gap-2">
                    <img
                      src={Avatar1}
                      alt="avatar"
                      style={{ borderRadius: "50px", width: "10%" }}
                    />
                    <div className="user___content">
                      <h2 style={{ color: "blue" }}>{user.username}</h2>
                      <p className="text-muted">{user.email}</p>
                      {/* <p>{user.password}</p> */}
                    </div>
                  </div>
                </Col>
                <Col md={5}>
                  <div className="user-activation">
                    <p>
                      The user has the role:{" "}
                      <strong>{user.userRoleName}</strong>
                    </p>
                    <span className="d-flex align-items-center gap-2">
                      <TiTick className="tick" />
                      <p>{user.isActive}User is Active</p>
                    </span>
                  </div>
                </Col>
                <Col md={1}>
                {userResources['UpdateOtherUser'] && (
              <>
                  <button onClick={() => ArrowModal(user, "edit")}>
                    {/* <p>{user.id}</p> */}
                    <IoIosArrowDroprightCircle className="users_arrow" />
                  </button>
                  </>
                )}
                </Col>
                <Col md={1}>
                {userResources['DeleteUser'] && (
              <>
                  <button onClick={areYourSure}>
                    <BsFillTrashFill className="users_trash" />
                  </button>
                  </>
                )}
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
            </Container>
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
                      <div className="brand-input-field">
                        <Label for="password">Password</Label>
                        <Input
                          id="password"
                          name="password"
                          placeholder="Enter Your Password"
                          type=""
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                      </div>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </ModalBody>
            <ModalFooter style={{ border: "hidden" }}></ModalFooter>
            {/* change password */}
            <ModalBody>
              <Container>
                <Row>
                  <Col md={6}>
                    <div className="create-modal-content">
                      <div className="brand-info-content">
                        <h2>Change Password</h2>
                        <p>
                          Change your password for a new one, valid for the next
                          login.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <Row className="g-4 pt-4">
                      <div className="brand-input-field">
                        <Label for="currentpassword">Current Password</Label>
                        <Input
                          id="currentpassword"
                          name="currentP"
                          placeholder="Enter Your Current Password"
                          type="password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                      </div>
                      <div className="brand-input-field">
                        <Label for="password">New Password</Label>
                        <Input
                          id="newpassword1"
                          name="newP1"
                          placeholder="Enter Your New Password"
                          type="password"
                          value={newPassword1}
                          onChange={(e) => setNewPassword1(e.target.value)}
                        />
                      </div>
                      <div className="brand-input-field">
                        <Label for="password">Confirm Password</Label>
                        <Input
                          id="newpassword2"
                          name="newP2"
                          placeholder="Enter Your Current Password"
                          type="password"
                          value={newPassword2}
                          onChange={(e) => setNewPassword2(e.target.value)}
                        />
                      </div>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </ModalBody>
            <ModalFooter>
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
    </>
  );
}
