import React, { useState } from "react";
import {
  AiFillFolderOpen,
  BsSortDownAlt,
  TbBallFootball,
  IoIosArrowDroprightCircle,
  FaLessThan,
  FaGreaterThan,
} from "react-icons/all";
import CreateForm from "./createForm";
import CreateModal from "./createModal";
import repDeviceData from "./repDeviceData";




const repdevices = () => {

  // sorting data state
  const [sortDirection, setSortDirection] = useState("asc");
  const handleSort = () => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);

    // sort logic apply here
  };


  //  for search feature state
  const [search, setSearch] = useState("");
  const [queryData, setQueryData] = useState(repDeviceData);
  const [repData, setRepData] = useState(repDeviceData);

  const handleSearch = (text) => {
    setSearch(text);
    if (search == "") {
      setQueryData(repData);
    } else {
      const newData = repData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setQueryData(newData);
    }
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

  // Code Started after return
  return (
    <>
      {/* create button and thier modal */}
      <div className="rep-device-container">
        <div className="rep-devices-section">
          <div className="rep-name">
            <i>
              <AiFillFolderOpen />
            </i>
            <h1>REPAIRABLE DEVICES</h1>
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

        {/* modal end */}

        {/* search box start */}

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

        {/* Get repair devices page Data using map method  */}

        {queryData.map((elem, index) => (
          <div
            className="container repdevices-data"
            style={{ height: "auto", overflowY: "auto", width: "1050px" }}
          >
            <div className="brand-section" key={index}>
              <div className="brand-logo-info" style={{ display: "flex" }}>
                <i>
                  <TbBallFootball />
                </i>
                <div className="model" style={{ marginLeft: "0.9rem" }}>
                  <h3 style={{ display: "flex" }}>{elem.name}</h3>
                  <h5>{elem.subname}</h5>
                </div>
              </div>
              <div className="brand-desc">
                <div className="available-service">
                  <h3>
                    {elem.desc}: <strong>9</strong>
                  </h3>
                  <h5>Added : {new Date().toLocaleString()}</h5>
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

        {/* map methond End */}


        {/* Pagination start */}

        <div className="pagination">
          <button
            className="less-than"
            onChange={() => handlePageChange(currentPage - 1)}
          >
            <FaLessThan />
          </button>
          <button
            className="greater-than"
            onChange={() => handlePageChange(currentPage + 1)}
          >
            <FaGreaterThan />
          </button>
        </div>
        {/* pagination End */}

      </div>

      {/* repair section end */}
    </>
  );
};

export default repdevices;
