import React, { useEffect, useState } from "react";
import {
  AiFillFolderOpen,
  BsSortDownAlt,
  TbBallFootball,
  IoIosArrowDroprightCircle,
  FaLessThan,
  FaGreaterThan,
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
} from "reactstrap";
import axios from "axios";

const repdevices = () => {
  const [getDevices, setGetDevices] = useState([]);
  const [search, setSearch] = useState("");
  const [queryData, setQueryData] = useState([]);
  const [repData, setRepData] = useState([]);
  const [dropData, setDropData] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  // const [singleRepModel, setSingleRepModel] = useState("")
  const[singleModelName, setSingleModelName] = useState('')
  const[singleModel, setSingleModel] = useState('')




  const singleModelData = async (e) =>{
    e.preventDefault()
    try {
      const response = await axios.post('http://18.221.148.248:84/api/v1/Brand/AddModel', {
        name: `${singleModelName}`,
        model: `${singleModel}`,
        brandId: `${selectedBrand}`
      },
    
      );
      if (response.status === 200) {
        console.log(response)
        getDevicesData(); 
        console.log('Success:', response.data);
      } else {
        console.log('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  





  const saveModel = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData()
    formData.append('file',selectedFile)
    formData.append('brandId', selectedBrand)
    console.log([...formData])
      const response = await axios.post(
        "http://18.221.148.248:84/api/v1/Brand/AddModels",
       formData
      );
      if (response.status === 200) {
        setSelectedBrand("");
        setSelectedFile(null);
        getDevicesData();
        handleRepToggle();
      }
    } catch (error) {
      console.error(error);
    }
  };


  const dropDownData = async () => {
    try {
      const getDrop = await axios.get(
        `http://18.221.148.248:84/api/v1/Brand/GetBrandsforDropdown`);
      //  console.log(getDrop)
      if (getDrop.status == 200) {
        let data = getDrop.data.data;
        setDropData(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getDevicesData();
    dropDownData();
  }, []);

  const getDevicesData = async () => {
    try {
      const response = await axios.get(
        `http://18.221.148.248:84/api/v1/Brand/GetModels?query=${getDevices}& pageNo=${1}`
      );
      // console.log(response.data.data.data);

      if (response.status == 200) {
        let data = response?.data?.data?.data;
        setGetDevices(data);
        setQueryData(data);
        setRepData(data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
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

  // sorting data state Start
  const [sortDirection, setSortDirection] = useState("asc");
  const handleSort = () => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);

    // sort logic apply here
  };
  //  sort state end

  //  for search feature state start

  //  for search feature state end

  // for create button modal
  const [repModal, setRepModal] = useState(false);
  const handleRepToggle = () => {
    setRepModal(!repModal);
  };

  const [elemModal, setElemModal] = useState(false);
  const elemHandleToggle = () => setElemModal(!elemModal);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
          <div className="rep-create-button" onClick={handleRepToggle}>
            <button>Create</button>
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
                CREATE REPAIRABLE DEVICE
                <Button
                  color="primary"
                  onClick={handleRepToggle}
                  style={{ backgroundColor: "blue" }}
                  className="cross-button"
                >
                  <RxCross2 />
                </Button>
              </ModalHeader>
              <ModalBody>
                <div className="create-modal-content">
                  <div className="brand-info-content">
                    <h2>
                      Repairable <br /> Device Information
                    </h2>
                    <p>Enter information for new repairable device.</p>
                  </div>

                  <div className="brand-input-field">
                    <FormGroup>
                      <Label for="exampleSelect">Select Brand</Label>
                      <Input
                        type="select"
                        name="select"
                        id="exampleSelect"
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                      >
                        <option value="">Select a brand</option>
                        {dropData &&
                          dropData.map((item, index) => (
                            <option key={index} value={item.value}>
                              {item.text}
                            </option>
                          ))}
                      </Input>
                    </FormGroup>

                    <br />
                    <Label for="exampleName">Name</Label>
                    <Input
                      id="exampleName"
                      name="name"
                      placeholder="Enter Your Brand Name"
                      type="name"
                      value={singleModelName}
                      onChange={(e)=>setSingleModelName(e.target.value)}
                    />
                    <br />
                    <Label for="exampleEmail">Modal</Label>
                    <Input
                      id="exampleModal"
                      name="modal"
                      placeholder="Enter Your Brand Modal"
                      type="text"
                      value={singleModel}
                      onChange={(e)=>setSingleModel(e.target.value)}
                    />
                    <br />
                    <FormGroup>
                      <Label for="exampleFile">Image</Label>
                      <Input id="exampleFile" name="file"
                      value={selectedFile}
                       />
                    </FormGroup> 
                  </div>
                </div>
              </ModalBody>
              <ModalFooter style={{ border: "none" }}>
                <Button
                  color="primary"
                  style={{ backgroundColor: "blue" }}
                  onClick={singleModelData}
                >
                  Save
                </Button>
              </ModalFooter>

              <hr />
              <ModalHeader
                toggle={handleRepToggle}
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  border: "none",
                }}
              ></ModalHeader>
              <ModalBody style={{ border: "none" }}>
                <div className="create-modal-content">
                  <div className="brand-info-content">
                    <h2>Batch Entries With CSV Import</h2>
                    <p>
                      Upload file for batch entries. A file should be CSV with
                      format. A file must have only columns with title of
                      "name","model"
                    </p>
                  </div>

                  <div className="brand-input-field">
                    <FormGroup>
                      <Label for="exampleSelect">Select Brand</Label>
                      <Input
                        type="select"
                        name="select"
                        id="exampleSelect"
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                      >
                        <option value="">Select a brand</option>{" "}
                        {/* Add an initial empty option */}
                        {dropData &&
                          dropData.map((item, index) => (
                            <option key={index} value={item.id}>
                              {item.text}
                            </option>
                          ))}
                      </Input>
                    </FormGroup>
                    <br />
                    <FormGroup>
                      <Label for="exampleFile">Image</Label>
                      <Input id="exampleFile" name="file" type="file" accept={".csv"}
                      onChange={handleFileChange}
                      />
                    </FormGroup>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter style={{ border: "hidden" }}>
                <Button
                  color="secondary"
                  onClick={saveModel}
                  style={{ backgroundColor: "blue" }}
                >
                  Upload
                </Button>
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
            className="container repdevices-data"
            key={index}
            onClick={elemHandleToggle}
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
                    Available services: {elem.desc}
                    <strong>9</strong>
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
            CREATE REPAIRABLE DEVICE
            <Button
              color="primary"
              onClick={elemHandleToggle}
              style={{ backgroundColor: "blue" }}
              className="cross-button"
            >
              <RxCross2 />
            </Button>
          </ModalHeader>
          <ModalBody>
            <div className="create-modal-content">
              <div className="brand-info-content">
                <h2>
                  Repairable <br /> Device Information
                </h2>
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
                  <Label for="exampleFile">Image</Label>
                  <Input id="exampleFile" name="file" type="file" />
                </FormGroup>
              </div>
            </div>
          </ModalBody>
          <ModalFooter style={{ border: "hidden" }}>
            <Button
              color="primary"
              onClick={elemHandleToggle}
              style={{ backgroundColor: "blue" }}
            >
              Edit
            </Button>
            <Button
              color="secondary"
              onClick={elemHandleToggle}
              style={{ backgroundColor: "blue" }}
            >
              Update
            </Button>
          </ModalFooter>
        </Modal>

        {/* map methond End */}

        {/* Pagination start */}

        {/* <div className="pagination">
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
        </div> */}
        {/* pagination End */}
      </div>

      {/* repair section end */}
    </>
  );
};

export default repdevices;
