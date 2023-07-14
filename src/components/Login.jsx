import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import LoginLogo from '../images/logohome.png';
import Navber from '../components/navber'
import '../App.css';
import axios from "axios";
import {AppContext} from "../context/index";

const WorkshopPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const {user,login}=useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validError, setValidError]= useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(email == "" && password == ''){
      setValidError("Please Enter Email and Password");
      // toast.error("Please Enter Email and Password")
      return;
    }else{
      toast.success("User Login Successfully");
    }
      try {
        const response = await axios.post('http://13.48.193.17:81/api/v1/Auth/Login', {
          email,
          password,
        });
        if (response.status === 200) {
          let data = response?.data?.data;
           localStorage.setItem('users', JSON.stringify(data))
          login(data)
        }
      } catch (error) {
        console.log("Error" , error)
        // setValidError("")
      }
  };

   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogoLoad = () => {
    setLogoLoaded(true);
  };

     

  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={3000}
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
      
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-80">
        <div className="flex justify-center items-center">
          {!logoLoaded && (
            <div className="h-24 w-24 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
            </div>
          )}
          <img
            src={LoginLogo}
            className={`h-30 w-40 ${logoLoaded ? 'block' : 'hidden'}`}
            alt="Login Logo"
            onLoad={handleLogoLoad}
          />
        </div>
        <div className="mt-6">
          <form >
          {validError && <p className="error">{validError}</p>}
          <label className="text-gray-600 text-sm font-semibold">Email</label>
          <input
            className="w-full h-10 mt-2 px-3 py-2 border border-gray-300 rounded"
            name="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <p id="email-error" className="error"></p>
          <label className="text-gray-600 text-sm font-semibold mt-4">Password</label>
          <div className="relative flex items-center">
            <input
              className="w-full h-10 mt-2 px-3 py-2 border border-gray-300 rounded pr-10"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) =>setPassword(e.target.value)}
            />
            <button
              className="absolute top-0 right-0 h-full text-gray-500 focus:outline-none flex items-center px-2 mt-1"
              onClick={togglePasswordVisibility} 
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="text-gray-600"
              />
            </button>
          </div>
          {isLoggedIn ? null :
          <button
          className="LoginBtn mt-3"
          onClick={handleFormSubmit}
            // className="bg-blue-500 hover:bg-blue-600 text-white rounded mt-6 py-2 px-4 font-semibold"
          > 
            Sign In
          </button>
        }
          </form>
        </div>
        <p className="mt-8 text-sm text-gray-600 font-semibold">
          Can't access your account?{" "}
          <span className="text-blue-500 font-semibold">Recover account</span>
        </p>
      </div>
    </div>
    </>
  );
};

export default WorkshopPage;
