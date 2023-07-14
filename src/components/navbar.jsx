import React, { useContext, useState } from "react";
import { AiOutlineArrowRight, RxCross2 } from "react-icons/all";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { AppContext } from "../context";
import { Avatar } from "@mui/material";
import avatar from "../images/avatar.jpg";
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
import axios from "axios";

export default function navbar() {
  const { logout, user } = useContext(AppContext);
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [profilePic,setProfilePic] = useState(null)
   const [avatarSrc, setAvatarSrc] = useState(avatar);

    console.log(name, email, phone, profilePic)
     const updateProfile = async () =>{
      try {
        const formData = new FormData(); 
        formData.append("username", name);
        formData.append("email", email);
        formData.append("phone", phone);
        if (profilePic) {
          formData.append("avatar", profilePic);
        }
          const response = await axios.post('http://13.48.193.17:81/api/v1/User/UpdateSelfUser', 
          formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
          if(response.status === 200) {
            if (profilePic) {
              setAvatarSrc(URL.createObjectURL(profilePic));
            }
          }

      } catch (error) {
        console.log("Error", error)
      }
     }
     const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setProfilePic(file);
        setAvatarSrc(URL.createObjectURL(file));
      }
    };

  const [modal, setModal] = useState(false);
  const setProfileModal = () => {
    setModal(!modal);
  };

  return (
    <div className="w-[100%] h-[70px] flex justify-between items-center">
      <div className="w-[20%] h-[100%] bg-[#152238] flex justify-start items-center ">
        <div className="ml-[15px] border-1 border-white">
          <WidgetsIcon fontSize="large" style={{ color: "#FFFF" }} />
        </div>
        <div className="ml-[15px] border-1 border-red">
          <p className="text-white text-[24px]">ReparatiePunten</p>
        </div>
      </div>
      <div className="w-[80%] h-[100%] flex justify-end items-center border-b-4 border-[#0096FF]">
        {/* <div className='w-[40px] h-[40px] rounded-full bg-gray-100 border-2 border-black mr-[50px] flex justify-center items-center'>
                <AccountCircleIcon fontSize='large'/>
            </div> */}
        <div class="dropdown">
          <button
            class="btn"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="w-[50px] h-[50px] rounded-full bg-gray-100 border-2 border-black mr-[20px] flex justify-center items-center ">
              <Avatar alt="Remy Sharp" src={avatarSrc} />
            </div>
          </button>
          <ul
            class="dropdown-menu profile-menu "
            aria-labelledby="dropdownMenuButton1"
          >
            <li onClick={setProfileModal}>
              <a href="#">- My Profile</a>
            </li>
            <div className="logout-li">
              <button onClick={logout}>
                <li>- Logout</li>
              </button>
            </div>
          </ul>
        </div>
        {/* <div className="logout-button mr-4">
                  <button className='btn btn-primary' onClick={logout}> LogOut</button>
                </div> */}
      </div>
      <Modal
            isOpen={modal}
            toggle={setProfileModal}
            style={{ maxWidth: "50%", background: "none", zIndex: 9999 }}
          >
            <ModalHeader
              style={{
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              MY PROFILE
              <Button
                color="primary"
                style={{ backgroundColor: "blue" }}
                className="cross-button"
                onClick={setProfileModal}
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
                          <Avatar 
                          alt="User Profile" 
                          src={avatarSrc} 
                          sx={{ maxWidth: 200, maxHeight: 200, width:200, height:200 }}
                          className="mb-3 mx-auto"
                          />

                          <div className="profile-detials text-start d-flex gap-2 mb-2">
                            <h4 className="username-label">UserName:</h4>
                            <h5 className="username">{user.username}</h5>                            
                          </div>
                          <div className="profile-detials text-start d-flex gap-2 mb-2">                    
                            <h4 className="username-label">Email:</h4>
                            <h5 className="username">{user.email}</h5>
                          </div>
                          <div className="profile-detials text-start d-flex gap-2 mb-2">                    
                          <h4 className="username-label">Role:</h4>
                            <h5 className="username">{user.role}</h5>
                          </div>
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
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          
                        />
                      </div>
                      <div className="brand-input-field">
                        <Label for="email">Email:</Label>
                        <Input
                          id="email"
                          name="email"
                          placeholder="Enter Your Email"
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="brand-input-field">
                        <Label for="email">Phone:</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Enter Your Email"
                          type="text"
                          value={phone}
                          onChange={(e)=>setPhone(e.target.value)}
                        />
                      </div>
                      {/* <div className="brand-input-field">
                        <Label for="password">Password</Label>
                        <Input
                          id="password"
                          name="password"
                          placeholder="Enter Your Password"
                          type="password"
                           
                        />
                      </div> */}
                      <div class="mb-3">
                      <Label for="formFile" class="form-label">Avatar : </Label>
                      <Input 
                       type="file"
                      id="formFile"
                      onChange={handleFileChange}
                      accept="image/*"
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
                         
                        />
                      </div>
                      <div className="brand-input-field">
                        <Label for="password">New Password</Label>
                        <Input
                          id="newpassword1"
                          name="newP1"
                          placeholder="Enter Your New Password"
                          type="password"
                         
                        />
                      </div>
                      <div className="brand-input-field">
                        <Label for="password">Confirm Password</Label>
                        <Input
                          id="newpassword2"
                          name="newP2"
                          placeholder="Enter Your Current Password"
                          type="password"
                          
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
                onClick={updateProfile}
              >
                Save
              </Button>
            </ModalFooter>
          </Modal>
      {/* <Modal
        isOpen={modal}
        toggle={setProfileModal}
        style={{ maxWidth: "50%" }}
        className="image-modal"
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
            onClick={setProfileModal}
          >
            <RxCross2 />
          </Button>
        </ModalHeader>
        <Form>
          <div className="container text-center p-5">
            <div className="profile_modal">
              <div className="row ">
                <div className="col-md-6">avatar</div>
                <div className="col-md-6">
                  <div class="mb-3 text-start">
                    <label for="exampleFormControlInput1" class="form-label ">
                      Name :
                    </label>
                    <input
                      type="name"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={user.username}
                    />
                  </div>
                  <div class="mb-3 text-start">
                    <label for="exampleFormControlInput1" class="form-label ">
                      Email :
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={user.email} 
                    />
                  </div>
                  <div class="mb-3 text-start">
                    <label for="exampleFormControlInput1" class="form-label ">
                      Role :
                    </label>
                    <input
                      type="role"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={user.role}
                    />
                  </div>
                  <div className="profile-button text-end">
                  <Button
                  type="submit"
                  color="secondary"
                  style={{ backgroundColor: "blue"}}
                >
                Save
                </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Modal> */}
    </div>
  );
}
