import React, { useState } from "react";
import {AiFillFolderOpen,BsSortDownAlt,IoIosArrowDroprightCircle,BsLink45Deg} from "react-icons/all"
import CreateForm from "./createForm";
import CreateModal from "./createModal";
import {NavLink} from "react-router-dom"
import repDefectData from "./RepDefectData";


export default function repdefects() {
  
  const [sortDirection, setSortDirection] = useState("asc");
  const handleSort = () => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);

    // sort logic apply here
  };

 

   // for create button modal
   const [FormToggle, setFormToggle] = useState(false);
   const [isToggle, isSetToggle] = useState(false);
 
   const toggle = () => {
     setFormToggle(!FormToggle);
   };
 
   const toggleButton = () => {
     isSetToggle(!isToggle);
   };

   const [search, setSearch] = useState("")
   const [query, setQuery] = useState(repDefectData);
   const [repData,setRepData] = useState(repDefectData);
 
   const handleSearch = (text) => {
    setSearch(text);
    // console.log(text)
    if (search == "") {
      setQuery(repData);
    } else {
      const newData = repData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setQuery(newData);
    }
  };
  return (
    <>
      <div className="rep-device-container">
        <div className="rep-devices-section">
          <div className="rep-name">
            <i>
              <AiFillFolderOpen />
            </i>
            <h1>REPAIRABLE DEFECTS</h1>
          </div>
          <div className="rep-create-button">
            {FormToggle ? (
              <button onClick={toggle}>
                <p>Create</p>
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
        {FormToggle ? <CreateForm /> : <></>}

        <CreateModal />
        
        <div className="search-box">
          {/* search box */}

          <form action="">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search"
              aria-label="Username"
              onChange={(e) => handleSearch(e.target.value)}
            />

            {/*dropDOWN  */}

            <select
              className="form-select"
              aria-label="Default select example"
              id="repdevicesDrop"
              name="repdevicesDrop"
            >
              <option selected>Select Brand</option>
              <option value="1">Name</option>
              <option value="2">Modal</option>
              <option value="3">Created At</option>
            </select>
          </form>

          {/* Sorting Page */}
          <div className="sort-page">
            <BsSortDownAlt />
            <button onClick={handleSort}>Sort</button>
          </div>
        </div>

         
           {/* Repair defects data */}
           {/* map start  */}
        
          {/* map end */}
          
          {query.map((elem, index) => (
                  <div
            className="container repdevices-data"  key={index}
            style={{ height: "auto", overflowY: "auto", width: "1050px" }} 
          >
            <div className="brand-section" >
              <div className="brand-logo-info" style={{ display: "flex" }}>
                <div className="model" style={{ marginLeft: "0.9rem" }}>
                  <h3 style={{ display: "flex", fontWeight:"600" }}>{elem.name}</h3>
                  <NavLink>
                  <div className="sub-name-sec">
                  <i><BsLink45Deg/></i>
                  <h5 style={{display:"flex"}}>{elem.brand}</h5>
                   <h4>{elem.modal}</h4>
                  </div>
                  </NavLink>
                  
                </div>
              </div>
              <div className="brand-desc">
                <div className="available-service">
                  <h5 style={{fontWeight:"600"}}> Required Time : {elem.time} </h5>
                  <h6>Cost : {elem.cost} , Price {elem.price} :</h6>   
                  <h6>Added : {new Date().toLocaleString()}</h6>
                </div>
              </div>
              <div className="brand-arrow-icon">
                <button>
                  <i>
                    <IoIosArrowDroprightCircle />
                  </i>
                </button>
              </div>
            </div>
          </div>
          ))}
            
        </div>
    </>
  )
}
