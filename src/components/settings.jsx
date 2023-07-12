import React, { useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";
import { IoIosArrowDroprightCircle, RxCross2, BsFillTrashFill } from "react-icons/all";
import { AiFillFolderOpen } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { Pagination } from 'antd'
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

const settings = () => {
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
        progressBarStyle={{ backgroundColor: 'red' }}
      />
      <div className="main-brand-container">
        <div className="container brand-container p-3 mt-3">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-10 col-md-6  mx-auto">
                  <div className="brand-name-info d-flex">
                    <i><AiFillFolderOpen /></i>
                    <h1>APP SETTINGS</h1>
                  </div>
                </div>
                <div className="col-10 col-md-6 mx-auto ">
                  <div className="brand-create-button">
                    <button>
                      Back
                    </button>
                  </div>
                </div>
                {/* cards */}

                  <div className="row mt-3">
                    <div className="col-sm-3">
                      <div className="card mt-5 mb-4 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-8">
                          <SettingsIcon className="mt-4" style={{ color: '#0c82d6', fontSize: '6rem' }} />
                          <h5 className="mb-1 mt-3 text-xl font-medium text-gray-900 dark:text-white">General</h5>
                          <span className="mb-3 text-sm text-gray-500 dark:text-gray-400">Configure general site settings</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 ms-5">
                      <div className="card mt-5 mb-4 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-8">
                          <PaymentIcon className="mt-4" style={{ color: '#0c82d6', fontSize: '6rem' }} />
                          <h5 className="mb-1 mt-3 text-xl font-medium text-gray-900 dark:text-white">Payment Gateways</h5>
                          <span className="mb-3 text-sm text-gray-500 dark:text-gray-400">Configure gateways API keys for payment</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 ms-5">
                      <div className="card mt-5 mb-4 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-8">
                          <CodeOffIcon className="mt-4" style={{ color: '#0c82d6', fontSize: '6rem' }} />
                          <h5 className="mb-1 mt-3 text-xl font-medium text-gray-900 dark:text-white">Embedded Code</h5>
                          <span className="mb-3 text-sm text-gray-500 dark:text-gray-400 text-center ps-3 pr-3">Repair booking and track widgets embedding to your existing site</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-3">
                      <div className="card mt-5 mb-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-8">
                          <ColorLensIcon className="mt-4" style={{ color: '#0c82d6', fontSize: '6rem' }} />
                          <h5 className="mb-1 mt-3 text-xl font-medium text-gray-900 dark:text-white">Appearance</h5>
                          <span className="mb-3 text-sm text-gray-500 dark:text-gray-400">Configure the site icon and background</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card mt-5 mb-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-8">
                          <SaveAsIcon className="mt-4" style={{ color: '#0c82d6', fontSize: '6rem' }} />
                          <h5 className="mb-1 mt-3 text-xl font-medium text-gray-900 dark:text-white">Terms And conditions</h5>
                          <span className="mb-3 text-sm text-gray-500 dark:text-gray-400">Define the terms and conditions for your customer repair booking</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card mt-5 mb-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-8">
                          <AttachMoneyIcon className="mt-4" style={{ color: '#0c82d6', fontSize: '6rem' }} />
                          <h5 className="mb-1 mt-3 text-xl font-medium text-gray-900 dark:text-white">currency</h5>
                          <span className="mb-3 text-sm text-gray-500 dark:text-gray-400">Configure site currency symbology</span>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* cards */}
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default settings;
