import React, { useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";
import { IoIosArrowDroprightCircle, RxCross2,BsFillTrashFill } from "react-icons/all";
import { AiFillFolderOpen } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import axios from "axios"
// import brandsData from "./brandsData";
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
    const [getBrand, setGetBrand] =useState([])
    const [image, setImage] = useState("");
    const [brandId, setBrandId] = useState("");
    const [modal, setModal] = useState(false)
    const[otherModal, setOtherModal] =useState("")

    useEffect(()=>{
        handleBrandData();
    },[])
    const toggle = () =>{ 
      // alert("check")
      setModal(!modal)
    };


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
  const saveForm = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.post(`http://18.221.148.248:84/api/v1/Brand/AddBrand?Name=${name}`);
      // Handle the response
      // console.log(response.data);
      if (response.status==200) {
        console.log(response?.data?.message)
        toggle()
        // state b khali kr do
        handleBrandData()
        setName("") 
        this.reset()
      }
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  //  Get Brand API

    const handleBrandData = async () =>{
      try {
         const getResponse = await axios.get(`http://18.221.148.248:84/api/v1/Brand/GetBrands?pageNo=${1}`)
        //  console.log(getResponse.data.data?.data,"response")
         if (getResponse.status==200) {
          let data=getResponse.data.data?.data.reverse()
            setGetBrand(data)
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
    const deleteBrand = async (id) =>{
      try {
      const response = await axios.post(`http://18.221.148.248:84/api/v1/Brand/DeleteBrand?Id=${id}`);
        // Handle the response
        if (response.status==200) {
         handleBrandData();
        }
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    };
   
  return ( 
    <>
    
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
                                  value={image}
                                  onChange={(e) => setImage(e.target.value)}
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
                            onClick={saveForm}
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
          getBrand?.map((brand, index) => (
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
                            <button className="trash-button" onClick={deleteBrand}>
                            <BsFillTrashFill/>
                            </button>
                         </div>
                        </div>
                           
                      </div>
                    </div>
                  </div>
               </div>   
               </div>      
        ))}
        

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
