
import React, { useState } from 'react'
import { BiStar } from "react-icons/bi"
import {IoIosArrowDroprightCircle} from "react-icons/io"
import { AiFillFolderOpen } from "react-icons/ai"
import { NavLink } from 'react-router-dom'

import brandsData from "./brandsData"


const brands = () => {
  const [openModuleIndex, setOpenModuleIndex] = useState(null);

  const handleToggleModule = (index) => {
    if (openModuleIndex === index) {
      setOpenModuleIndex(null);
    } else {
      setOpenModuleIndex(index);
    }
  };
  return (
    <>
      
     
      <div className='main-brand-container' >
      <div className="brand-top-section">
         <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <div className="col-12 col-md-6 mx-auto">
                   <div className="brand_name">
                  <i> <AiFillFolderOpen className='folder-icon'/></i>
                   <h1>BRANDS</h1>
                  </div>
                </div>
                <div className="col-12 col-md-6 mx-auto">
                   <div className="buttons">
                   <NavLink className="create-button">
                      Create
                   </NavLink>
                   <NavLink to="/" className="back-button">
                      Back
                   </NavLink>
                   </div>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
      {brandsData.map((brand, index) => (
        <div className="container " key={index}>
          <div className="brands-name">
            <div className="brand-subname">
              <BiStar className="star-icon" />
              <h1>{brand.name}</h1>
              <NavLink className="brand-link" onClick={() => handleToggleModule(index)}>
                <IoIosArrowDroprightCircle className="arrow-icon" />
              </NavLink>
            </div>
          </div>
          {openModuleIndex === index && (

            <div className="module-content">
            <div className="brand-create-delete">
            <div className="delete">
              <NavLink>
              Delete
              </NavLink>
            </div>
            <div className="back">
              <NavLink>
              Back
              </NavLink>
            </div>
            </div>  

              <div className="main-modal">
                <div className="brand-info">
                  <h2>Brand Information</h2>
                  <p style={{float: "left"}}>Brand information and customization.</p>
                </div>
                <br /><br />
                <div className="brand-input">
                <label for="email"  class="leading-7 text-sm text-gray-600 email">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div> 

               <div className="brand-modal-button">
                <NavLink>
                  <button>
                    Update
                  </button>
                </NavLink>
               </div>

                <br />
               <hr className='modal-line' style={{fontWeight:"bolder"}}/>
 
              <br /> <br />
               <div className="main-modal">
                <div className="brand-info">
                  <h2>Import Devices For Brand With CSV File</h2>
                  <p style={{float: "left"}}>Upload file for batch entries.
                   A file should be CSV with format.
                   A file must have only columns with title of <strong className='special'>"name"</strong>,<strong className='special'>"model"</strong>
                  </p>
                </div>
                <br /><br />
                <div className="brand-input">
                <label for="formFile" class="form-label email">Excel CSV file</label>
                <input class="form-control" type="file" id="formFile"/>
                </div>
              </div> 
              <div className="brand-modal-button">
                <NavLink>
                  <button>
                    Upload
                  </button>
                </NavLink>
               </div>

            </div>
          )}
        </div>
      ))}
    </div>
    </>
  )
}

export default brands
