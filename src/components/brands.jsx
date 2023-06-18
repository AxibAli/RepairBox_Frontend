import React, { useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";
import { IoIosArrowDroprightCircle, RxCross2,BsFillTrashFill } from "react-icons/all";
import { AiFillFolderOpen } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
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

const brands = () => {
    const [name, setName] = useState("");
    const [getBrand, setGetBrand] =useState([]);
    const [modal, setModal] = useState(false);
    const [otherModal, setOtherModal] = useState(false);
    const [brandId, setBrandId] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)

    // Pagination Code States 
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState();     
    const [pagesize, setpagesize] = useState(10);     

    useEffect(()=>{
        handleBrandData();
    },[currentPage])
    
   
        // arrow button modal
      const handleToggle = (item,type) => {
        // console.log(item,"kjddjjdkjdkjdkjdkjdjk");
        if (type=="edit") {
          setName(item.name)
          setBrandId(item.id)
        }
        setOtherModal(!otherModal)
      };

      //  Create brand API
      const saveModels = async (e) => {
        e.preventDefault();
        try {
          let formData = new FormData()
        formData.append('file',selectedFile)
        // formData.append('brandId', selectedBrand)
        console.log([...formData])
          const response = await axios.post(
            'http://18.221.148.248:84/api/v1/Brand/AddBrands',
           formData
          );
          if (response.status === 200) {
            // setSelectedBrand("");
            setSelectedFile();
            handleBrandData();
            toggle()
          }
        } catch (error) {
          console.error(error);
        }
      };
      
  const saveForm = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.post(`http://18.221.148.248:84/api/v1/Brand/AddBrand?Name=${name}`,
    );
      if (response.status===200) {
        toast.success('Brand Created Successfully');
        // setSelectedFile(null);
        handleBrandData();
        setName("") ;
        toggle();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const toggle = () =>{ 
    // alert("check")
    setModal(!modal)
  };

  //  Get Brand API

    const handleBrandData = async () =>{
      try {
         const getResponse = await axios.get(`http://18.221.148.248:84/api/v1/Brand/GetBrands?pageNo=${currentPage}`)
        //  console.log(getResponse.data.data?.data,"response")
        // console.log(getResponse.data)
         if (getResponse.status==200) {
          let data=getResponse.data.data?.data.reverse()
          setGetBrand(data)
          let cPage = getResponse.data.data.currentPage
          let tPage = getResponse.data.data.totalPages
          tPage= tPage*pagesize
          // console.log("Current: ", cPage)
          // console.log("Total: ", tPage)
          setCurrentPage(cPage)
          setTotalPage(tPage)
         }
      } catch (error) {
         console.log("Errors", error) 
      }
    }
    
    // Update API
    const EditForm = async (e) =>{
      e.preventDefault();
      try {
      const response = await axios.post(`http://18.221.148.248:84/api/v1/Brand/UpdateBrand?Id=${brandId}&Name=${name}`);
        // Handle the response
        // console.log(response.data,"datatttattatt");
        if (response.status==200) {
          // console.log(response?.data?.message)
          toast.success("Brand Update Successfully!")
         handleToggle();
         handleBrandData();
         setName("")
          // this.reset()
        }
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    };
 
      //  delete brand
      const deleteBrand = async (brandId) => {
        // console.log(brandId)
        try {
          const response = await axios.post(
            `http://18.221.148.248:84/api/v1/Brand/DeleteBrand?Id=${brandId}`
          );
          if (response.status === 200) {
            console.log("deleted brand successfully");
            toast.success('Brand deleted successfully');
            handleBrandData();
          } 
        } catch (error) {
          console.error("Error", error);
        }
      };

       
        //  CSV FILE function
      const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };

    
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
                  <h1>BRANDS</h1>
                </div>
              </div> 
              <div className="col-10 col-md-6 mx-auto ">
                <div className="brand-create-button" onClick={toggle}>
                  <button>
                    Create
                  </button>
                  <Modal
                        isOpen={modal}
                        toggle={toggle}
                        style={{ maxWidth: "50%" }}
                      >
                        <ModalHeader
                          style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                          }}
                        >
                          CREATE BRAND
                          <Button
                            color="primary"
                            onClick={toggle}
                            style={{ backgroundColor: "blue" }}
                            className="cross-button"
                          >
                            <RxCross2 />
                          </Button>
                        </ModalHeader>
                        <ModalBody>
                          <div className="create-modal-content">
                            <div className="brand-info-content">
                              <h2>Brand Information</h2>
                              <p>Enter information for new brand.</p>
                            </div>
                            <div className="brand-input-field">
                              <Label for="exampleEmail">Name :</Label>
                              <Input
                                id="name"
                                name="name"
                                placeholder="Enter Your Brand Name"
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>
                        </ModalBody>
                        <ModalFooter style={{ border: "hidden" }}>
                          <Button
                            type="submit"
                            color="secondary"
                            style={{ backgroundColor: "blue" }}
                            onClick={saveForm}
                          >
                            Save
                          </Button>
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
                                <Label for="exampleFile">File</Label>
                                <Input
                                  id="exampleFile"
                                  name="file"
                                  type="file"
                                  // value={selectedFile}
                                  onChange={handleFileChange}

                                />
                              </FormGroup>
                            </div>
                          </div>
                        </ModalBody>
                        <ModalFooter style={{ border: "hidden" }}>
                          <Button
                            color="secondary"
                            type="upload"
                            style={{ backgroundColor: "blue" }}
                            onClick={saveModels}
                          >
                            Upload
                          </Button>
                        </ModalFooter>
                      </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
       <br />
       
        
        {
          getBrand && getBrand.map((brand, index) => (
            <div className="brandSection" key={index}>
               <div className="container">
                  <div className="row">
                    <div className="col-10 mx-auto">
                      <div className="row gy-4">
                        <div className="col-10 col-md-10">
                          <div className="brand-name-logo d-flex">
                          <i><BiStar /></i>
                          <h1>{brand.name}</h1>
                          </div>
                        </div>
                        
                        <div className="col-10 col-md-2 mx-auto">
                         <div className="brand-arrow d-flex ">
                         <button className="arrow-button" onClick={()=>handleToggle(brand,"edit")}>
                         <IoIosArrowDroprightCircle />
                            </button>
                            <button
                            className="trash-button"
                           onClick={()=>deleteBrand(brand.id)}
                          >
                            <BsFillTrashFill />
                          </button>
                         </div>
                        </div>
                           
                      </div>
                    </div>
                  </div>
               </div>   
               </div>      
        ))} 

        <Pagination
          total={totalPage}
          current={currentPage}
          onChange={(page)=>{
            setCurrentPage(page)
            // handleBrandData()
          }}
        />

         {/* handlePageChange={handlePageChange} */}
        {/* <repdevices getBrands= {getBrand}/> */}
        <Modal
              isOpen={otherModal}
              toggle={handleToggle}
              style={{ maxWidth: "50%", background: "none" ,zIndex: 9999, }}
            >
              <ModalHeader
                // toggle={handleToggle}
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                UPDATE BRAND
                <Button
                  color="primary"
                  onClick={handleToggle}
                  style={{ backgroundColor: "blue" }}
                  className="cross-button"
                >
                  <RxCross2 />
                </Button>
              </ModalHeader>
              <ModalBody>
                <div className="create-modal-content">
                  <div className="brand-info-content">
                    <h2>Brand Information</h2>
                    <p>Enter information for new brand.</p>
                  </div>
                  <div className="brand-input-field">
                    <Form>
                      <Label for="exampleEmail">Name :</Label>
                      <Input
                        id="exampleName"
                        name="name"
                        placeholder="Enter Your Brand Name"
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter style={{ border: "hidden" }}>
                <Button
                  color="primary"
                  onClick={EditForm}
                  style={{ backgroundColor: "blue"}}
                >
                  Edit
                </Button>
                {/* <Button
                  color="primary"
                  onClick={handleToggle}
                  style={{ backgroundColor: "blue" }}
                >
                  Update
                </Button> */}
              </ModalFooter>
            </Modal>
            
      </div>
      
    </>
  );
};

export default brands;
