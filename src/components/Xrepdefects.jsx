// THIS FILE IS NOT USED.


import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import repDefectData from "./RepDefectData";
import {
  AiFillFolderOpen,
  BsSortDownAlt,
  IoIosArrowDroprightCircle,
  BsLink45Deg,
  RxCross2,
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
  Col
} from "reactstrap";
import { AppContext } from "../context";

export default function repdefects() {
  const [getDefects, setGetDefetcs] = useState([])
  const [getDefectsData, setGetDefectData] = useState("")
   const [brandModel, setGetBrandModel] = useState();
   const { user } = useContext(AppContext);
  //  console.log(user, "defects")
 
  const userResources = user.resources;
    useEffect(()=>{
      getBrandModels();
    },[])
   const getBrandModels = async () =>{
    try {
        const response = await axios.get('http://18.221.148.248:84/api/v1/Brand/GetModelsforDropdown');
        if(response.status ===200){
          // console.log(response.data)
          const data = response.data;
          if(Array.isArray(data)){
          setGetBrandModel(data);
          }else{
            console.log('invalid syntax')
          }
        }
    } catch (error) {
      console.log('error', error)
    }
   }
   

  //  Modals State Start
  const [defModal, setDefModal] = useState(false);
  const defHandleToggle = () => {
    setDefModal(!defModal)
  };

  const [newModal, setNewModal] = useState(false);
  const newToggle = () => setNewModal(!newModal);
  //  MOdals State End

  // Sort State Start
  const [sortDirection, setSortDirection] = useState("asc");
  const handleSort = () => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);

    // sort logic apply here
  };
  // Sort State End

  //  Search Box State Start
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(getDefects);
  const [repData, setRepData] = useState(repDefectData);


  const [pageData, setpageData] = useState([]);

  const handleSearch = (text) => {
    setSearch(text);
    // console.log(text)
    if (search == "") {
      setQuery(getDefects);
    } else {
      const newData = repData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setQuery(newData);
    }
  };

  //  Search Box State End


  // Repairable Defects Code 
  const getDefectsDataFunc = async () => {
    try {
      const response = await axios.get(
        `http://18.221.148.248:84/api/v1/Brand/GetDefects?pageNo=1`
      );
      if (response.status === 200) {
        console.log(response);
        let data = response.data.data.data;
        setpageData(data);
        // setGetDevices(data);
        // setQueryData(data);
        // setGetDefectData(data);

        // let cPage = response.data.data.currentPage
        // let tPage = response.data.data.totalPages
        // tPage= tPage*pagesize
        // // console.log("Current: ", cPage)
        // // console.log("Total: ", tPage)
        // setCurrentPage(cPage)
        // setTotalPage(tPage)


      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  console.log(pageData)

  useEffect(() => {
    getDefectsDataFunc();
    // dropDownData();
  }, []);
  // Code Start
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
          <div className="rep-create-button" onClick={defHandleToggle}>
          {userResources['AddDefect'] && (
            <>
            <button>Create</button>
            </>
            )}
            {/* Create Button Modal Start */}
            <Modal
              isOpen={defModal}
              toggle={defHandleToggle}
              style={{ maxWidth: "70%" }}
            >
              <ModalHeader
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "500",
                }}
              >
                CRAETE REPAIRABLE DEFECTS
                <Button
                  color="primary"
                  onClick={defHandleToggle}
                  style={{ backgroundColor: "blue" }}
                  className="cross-button"
                >
                  <RxCross2 />
                </Button>
              </ModalHeader>
              <ModalBody>
                <div className="create-modal-content">
                  <div className="brand-info-content">
                    <h2> Defect Information</h2>
                    <p>Defect information and customization.</p>
                  </div>

                  <div className="brand-input-field">
                    <FormGroup>
                      <Label for="exampleSelect" sm={2}>
                        Select
                      </Label>
                      <Col sm={10}>
                        <Input id="select" name="select" type="select" 
                        >
                          <option>Select A Brand</option>
                          {
                            Array.isArray(brandModel) && brandModel.map((model, index) =>{
                              <option key={index} value={model.id}>{model.text}</option>
                            })
                          }
                          
                        </Input>
                      </Col>
                      <br />
                      <Label for="exampleDefectTitle">Defect Title</Label>
                      <Input
                        id="exampleDefectTitle"
                        name="title"
                        placeholder="Defect Title"
                        type="name"
                      />

                      <br />
                      <Label for="exampleEmail">Repair required time</Label>
                      <Input
                        id="exampleModal"
                        name="time"
                        placeholder="Repair required time"
                        type="name"
                      />
                      <br />
                      <Label for="exampleEmail">Cost</Label>
                      <Input
                        id="exampleModal"
                        name="cost"
                        placeholder="Cost"
                        type="name"
                      />
                      <br />
                      <Label for="exampleEmail">Price</Label>
                      <Input
                        id="exampleModal"
                        name="price"
                        placeholder="Price"
                        type="name"
                      />
                      <Button
                        color="primary"
                        // onClick={defHandleToggle}
                        style={{ backgroundColor: "blue" }}
                      >
                        Save
                      </Button>
                    </FormGroup>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter style={{ border: "hidden" }}></ModalFooter>

              {/* next Create modal */}
              <hr />
              <ModalBody>
                <div className="create-modal-content">
                  <div className="brand-info-content">
                    <h2>
                      Batch Entries With <br /> CSV Import
                    </h2>
                    <p>
                      Upload file for batch entries. A file should be CSV with
                      format. A file must have only one column with title of
                      "name"
                    </p>
                  </div>
                  <div className="brand-input-field">
                    <FormGroup>
                      <Label for="exampleEmail">Device</Label>
                      <Input
                        id="exampleBrand"
                        name="brand"
                        placeholder="Select an option "
                        type="select"
                      />
                      <br />
                      <Label for="exampleFile">Excel CSV File</Label>
                      <Input id="exampleFile" name="file" type="file" />
                    </FormGroup>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  onClick={defHandleToggle}
                  style={{ backgroundColor: "blue" }}
                >
                  Upload
                </Button>
              </ModalFooter>
            </Modal>
            {/* Create Button MOdal End */}
          </div>
        </div>

        {/* Search Box Section Start */}
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


        {/* TRY TO run ghe MAP code */}

        {pageData.map((elem, index) => (
          <div
            className="container repdevices-data"
            key={index}
            // onClick={elemHandleToggle}
            style={{ height: "auto", overflowY: "auto", width: "1050px" }}
          >
            <div className="brand-section" key={index}>
              <div className="brand-logo-info" style={{ display: "flex" }}>
                <i>
                  {/* <TbBallFootball /> */}
                </i>
                <div className="model" style={{ marginLeft: "0.9rem" }}>
                  <h3 style={{ display: "flex" }}>{elem.defectName}</h3>
                  <h5>${elem.price}</h5>
                </div>
              </div>
              {userResources['UpdateDefect'] && (
                <>
              <div className="brand-arrow-icon">
                <button onClick={()=> elemHandleToggle(elem, 'edit')}>
                  <i>
                    <IoIosArrowDroprightCircle />
                  </i>
                </button>
          
              </div>
              </>
          )}
            </div>
          </div>
        ))}



        
        {/* Qazi's map code */}
        {/* {query.map((elem, index) => (
          <div
            className="container repdevices-data"
            key={index}
            style={{ height: "auto", overflowY: "auto", width: "1050px" }}
          >
            <div className="brand-section">
              <div className="brand-logo-info" style={{ display: "flex" }}>
                <div className="model" style={{ marginLeft: "0.9rem" }}>
                  <h3 style={{ display: "flex", fontWeight: "600" }}>
                    {elem.defectName}
                  </h3>
                  <NavLink>
                    <div className="sub-name-sec">
                      <i>
                        <BsLink45Deg />
                      </i>
                      <h5 style={{ display: "flex" }}>{elem.brand}</h5>
                      <h4>{elem.modal}</h4>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="brand-desc">
                <div className="available-service">
                  <h5 style={{ fontWeight: "600" }}>
                    {" "}
                    Required Time : {elem.time}{" "}
                  </h5>
                  <h6>
                    Cost : {elem.cost} , Price {elem.price} :
                  </h6>
                  <h6>Added : {new Date().toLocaleString()}</h6>
                </div>
              </div>
              <div className="brand-arrow-icon" onClick={newToggle}>
                <button>
                  <i>
                    <IoIosArrowDroprightCircle />
                  </i>
                </button>
              </div>
            </div>
          </div>
        ))} */}


        <Modal isOpen={newModal} toggle={newToggle} style={{ maxWidth: "70%" }}>
          <ModalHeader
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
          >
            CREATE REPAIRABLE DEFECTS
            <Button
              color="primary"
              onClick={newToggle}
              style={{ backgroundColor: "blue" }}
              className="cross-button"
            >
              <RxCross2 />
            </Button>
          </ModalHeader>
          <ModalBody>
            <div className="create-modal-content">
              <div className="brand-info-content">
                <h2> Defect Information</h2>
                <p>Defect information and customization.</p>
              </div>

              <div className="brand-input-field">
                <Label for="exampleEmail">Device</Label>
                <Input
                  id="exampleBrand"
                  name="brand"
                  placeholder="Select an option "
                  type="select"
                />
                <br />
                <Label for="exampleDefectTitle">Defect Title</Label>
                <Input
                  id="exampleDefectTitle"
                  name="name"
                  placeholder="Defect Title"
                  type="name"
                />
                <br />
                <Label for="exampleEmail">Repair required time</Label>
                <Input
                  id="exampleModal"
                  name="modal"
                  placeholder="Repair required time"
                  type="name"
                />
                <br />
                <Label for="exampleEmail">Cost</Label>
                <Input
                  id="exampleModal"
                  name="modal"
                  placeholder="Cost"
                  type="name"
                />
                <br />
                <Label for="exampleEmail">Price</Label>
                <Input
                  id="exampleModal"
                  name="modal"
                  placeholder="Price"
                  type="name"
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter style={{ border: "hidden" }}>
            <Button
              color="primary"
              onClick={newToggle}
              style={{ backgroundColor: "blue" }}
            >
              Edit
            </Button>
            <Button
              color="secondary"
              onClick={newToggle}
              style={{ backgroundColor: "blue" }}
            >
              Update
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
