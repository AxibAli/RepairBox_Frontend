import React, { useState } from "react";
import repDeviceData from "./repDeviceData";
import {
  AiFillFolderOpen,
  BsSortDownAlt,
  TbBallFootball,
  IoIosArrowDroprightCircle,
  FaLessThan,
  FaGreaterThan,
  RxCross2
} from "react-icons/all";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup,
} from "reactstrap";





const repdevices = () => {

  // sorting data state Start
  const [sortDirection, setSortDirection] = useState("asc");
  const handleSort = () => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);

    // sort logic apply here
  };
    //  sort state end

  //  for search feature state start
  const [search, setSearch] = useState("");
  const [queryData, setQueryData] = useState(repDeviceData);
  const [repData, setRepData] = useState(repDeviceData);
  

  const handleSearch = (text) => {
    setSearch(text);
    // console.log(text)
    if (search == "") {
      setQueryData(repData);
    } else {
      const newData = repData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setQueryData(newData);
    }
  };

      //  for search feature state end
  

  // for create button modal
   const [repModal,setRepModal] = useState(false);
   const handleRepToggle = () => setRepModal(!repModal);

   const [elemModal, setElemModal] = useState(false);
   const elemHandleToggle = () => setElemModal(!elemModal)
 
   
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
          <div className="rep-create-button" onClick={handleRepToggle}>
             <button >
              Create
             </button>
             <Modal
                        isOpen={repModal}
                        toggle={handleRepToggle}
                        style={{ maxWidth: "60%" }}
                      >
                        <ModalHeader
                          // toggle={handleRepToggle}
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: "500",
                          }}
                        >
                          
                          CRAETE REPAIRABLE DEVICE
                          <Button
                            color="primary"
                            onClick={handleRepToggle}
                            style={{ backgroundColor: "blue" }}
                            className="cross-button"
                          >
                           <RxCross2/>
                          </Button>
                        </ModalHeader>
                        <ModalBody>
                          <div className="create-modal-content">
                            <div className="brand-info-content">
                              <h2>Repairable <br /> Device Information</h2>
                              <p>Enter information for new repairable device.</p>
                            </div>
                                 
                            
                            
                            <div className="brand-input-field">
                              <Label for="exampleEmail">Brand</Label>
                              <Input
                                id="exampleBrand"
                                name="brand"
                                placeholder="Select Your Brand "
                                type="select"
                              />
                               <br />
                              <Label for="exampleName">Name</Label>
                              <Input
                                id="exampleName"
                                name="name"
                                placeholder="Enter Your Brand Name"
                                type="name"
                              />
                              <br />
                              <Label for="exampleEmail">Modal</Label>
                              <Input
                                id="exampleModal"
                                name="modal"
                                placeholder="Enter Your Brand Modal"
                                type="name"
                              />
                              <br />
                              <FormGroup>
                            <Label for="exampleFile">
                              Image
                            </Label>
                            <Input
                              id="exampleFile"
                              name="file"
                              type="file"
                            />
                          </FormGroup>
                            </div>
                            
                          </div>
                          
                        </ModalBody>
                        <ModalFooter style={{ border: "hidden" }}>
                          <Button
                            color="primary"
                            onClick={handleRepToggle}
                            style={{ backgroundColor: "blue" }}
                          >
                            Save
                          </Button>{" "}
                          <Button
                            color="secondary"
                            onClick={handleRepToggle}
                            style={{ backgroundColor: "blue" }}
                          >
                            Upload
                          </Button>
                        </ModalFooter>

                        <hr/>
                        <ModalHeader
                          toggle={handleRepToggle}
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: "500",
                          }}
                        >
                        </ModalHeader>
                        <ModalBody>
                          <div className="create-modal-content">
                            <div className="brand-info-content">
                              <h2>Batch Entries With CSV Import</h2>
                              <p>Upload file for batch entries.
                               A file should be CSV with format.
                               A file must have only columns with title of "name","model"</p>
                            </div>
                                 
                            
                            
                            <div className="brand-input-field">
                              <Label for="exampleEmail">Brand</Label>
                              <Input
                                id="exampleBrand"
                                name="brand"
                                placeholder="Select Your Brand "
                                type="select"
                              />
                               <br />
                              <FormGroup>
                            <Label for="exampleFile">
                              Image
                            </Label>
                            <Input
                              id="exampleFile"
                              name="file"
                              type="file"
                            />
                          </FormGroup>
                            </div>
                            
                          </div>
                          
                        </ModalBody>
                        <ModalFooter style={{ border: "hidden" }}>
                         
                        </ModalFooter>
                     </Modal>
          </div>
        </div>
        

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
            className="container repdevices-data" key={index} onClick={elemHandleToggle}
            style={{ height: "auto", overflowY: "auto", width: "1050px"  }}
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
              <div className="brand-arrow-icon" >
                <button >
                  <i>
                    <IoIosArrowDroprightCircle />
                  </i>
                </button>
              </div>
            </div>
            <Modal
                        isOpen={elemModal}
                        toggle={elemHandleToggle}
                        style={{ maxWidth: "70%" }}
                      >
                        <ModalHeader
                          
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: "500",
                          }}
                        >
                          
                          CRAETE REPAIRABLE DEVICE
                          <Button
                            color="primary"
                            onClick={elemHandleToggle}
                            style={{ backgroundColor: "blue" }}
                            className="cross-button"
                          >
                           <RxCross2/>
                          </Button>
                        </ModalHeader>
                        <ModalBody>
                          <div className="create-modal-content">
                            <div className="brand-info-content">
                              <h2>Repairable <br /> Device Information</h2>
                              <p>Enter information for new repairable device.</p>
                            </div>
                                 
                            
                            
                            <div className="brand-input-field">
                              <Label for="exampleEmail">Brand</Label>
                              <Input
                                id="exampleBrand"
                                name="brand"
                                placeholder="Select Your Brand "
                                type="select"
                              />
                               <br />
                              <Label for="exampleName">Name</Label>
                              <Input
                                id="exampleName"
                                name="name"
                                placeholder="Enter Your Brand Name"
                                type="name"
                              />
                              <br />
                              <Label for="exampleEmail">Modal</Label>
                              <Input
                                id="exampleModal"
                                name="modal"
                                placeholder="Enter Your Brand Modal"
                                type="name"
                              />
                              <br />
                              <FormGroup>
                            <Label for="exampleFile">
                              Image
                            </Label>
                            <Input
                              id="exampleFile"
                              name="file"
                              type="file"
                            />
                          </FormGroup>
                            </div>
                            
                          </div>
                          
                        </ModalBody>
                        <ModalFooter style={{ border: "hidden" }}>
                        
                          {/* <Button
                            color="primary"
                            onClick={elemHandleToggle}
                            style={{ backgroundColor: "blue" }}
                          >
                            Save
                          </Button>
                          <Button
                            color="secondary"
                            onClick={elemHandleToggle}
                            style={{ backgroundColor: "blue" }}
                          >
                            Cancel
                          </Button> */}
                        </ModalFooter>

                         <hr />
                        <ModalBody>
                          <div className="create-modal-content">
                            <div className="brand-info-content">
                              <h2>
                                Batch Entries With <br /> CSV Import
                              </h2>
                              <p>
                                Upload file for batch entries. A file should be
                                CSV with format. A file must have only one
                                column with title of "name"
                              </p>
                            </div>
                            <div className="brand-input-field">
                              <FormGroup>
                                <Label for="exampleFile">Excel CSV File</Label>
                                <Input
                                  id="exampleFile"
                                  name="file"
                                  type="file"
                                />
                              </FormGroup>
                            </div>
                          </div>
                        </ModalBody>
                        </Modal>

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
