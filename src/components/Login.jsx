import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import LoginLogo from '../images/logohome.png';
import Navber from '../components/navber'
import '../App.css';

const WorkshopPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogoLoad = () => {
    setLogoLoaded(true);
  };

  return (
    <>
    {/* <Navber/> */}
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
          <label className="text-gray-600 text-sm font-semibold">Email</label>
          <input
            className="w-full h-10 mt-2 px-3 py-2 border border-gray-300 rounded"
            name="email"
            type="email"
            placeholder="Email Address"
          />
          <label className="text-gray-600 text-sm font-semibold mt-4">Password</label>
          <div className="relative flex items-center">
            <input
              className="w-full h-10 mt-2 px-3 py-2 border border-gray-300 rounded pr-10"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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
          <button
          className="LoginBtn"
            // className="bg-blue-500 hover:bg-blue-600 text-white rounded mt-6 py-2 px-4 font-semibold"
          >
            Sign In
          </button>
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
