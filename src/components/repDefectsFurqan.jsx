import React from 'react'
import { useState, useEffect } from 'react'
import CModal from './repDefectCModalF'
import UModal from './repDefectUModalF'
import { BiStar } from "react-icons/bi";
import {
    AiFillFolderOpen, 
    BsFillTrashFill 
} from "react-icons/all";
import axios from "axios"
import { Pagination } from "antd";
import { ToastContainer, toast } from 'react-toastify';

export default function repDefectsFurqan() {
    const [Data, setData] = useState([])
    // const [Id, setId] = useState(null)

    // Pagination Code States
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const [pagesize, setpagesize] = useState(10);
  
    const handleDefectData = async () =>{
      try {
         const getResponse = await axios.get(`${process.env.REACT_APP_BASE_URL}/Brand/GetDefects?pageNo=${currentPage}`)
         console.log(getResponse.data.data?.data,"response")
         if (getResponse.status==200) {
          console.log("Render")
          let data=getResponse.data.data.data
          console.log(data)
            setData(data)
            let cPage = getResponse.data.data.currentPage;
            let tPage = getResponse.data.data.totalPages;
            tPage = tPage * pagesize;
            // console.log("Current: ", cPage)
            // console.log("Total: ", tPage)
            setCurrentPage(cPage);
            setTotalPage(tPage);
         }
      } catch (error) {
         console.log("Errors", error) 
      }
    }


  
    const handleStatusDataDelete = async (e) =>{
      const ID = e.currentTarget.getAttribute('ID');
      console.log(ID);
      try {
         const getResponse = await axios.post(`${process.env.REACT_APP_BASE_URL}/Brand/DeleteDefect?Id=${ID}`)
        //  console.log(getResponse.data.data?.data,"response")        
        toast.success("Model deleted successfully");

         if (getResponse.status==200) {
            handleDefectData()
         }
      } catch (error) {
         console.log("Errors", error) 
      }
    }
  
    useEffect(() => {
      handleDefectData()
    }, [currentPage]);

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
    <div className='w-[1050px] h-[100%] flex flex-col justify-start items-center'>
    <div className='w-[1010px] h-[60px] mt-[20px] flex items-center justify-between'>
      <div class='w-[350px] h-[100%] flex items-center justify-normal'>
        <AiFillFolderOpen style={{ color: '#505050', fontSize: '40px' }}/>
        <p className='ml-[10px] text-[#505050] text-[30px] font-semibold'>REPAIRABLE DEFECTS</p>
      </div>
      <div class='w-[250px] h-[100%] mr-[10px] flex items-center justify-end'>
        <CModal 
            getData={handleDefectData}
        />
      </div>
    </div>
    <div className='w-[1050px] h-[auto] overflow-y-auto mt-[20px] pl-[25px]'>
      {
        Data.map((item,index) => (
          <div className='pl-[20px] pr-[20px] w-[1000px] h-[60px] bg-slate-50 hover:bg-slate-100 border-[#E0E0E0] border-[1px] rounded-sm flex justify-between items-center hover:cursor-pointer' key={index}>
            <div className='flex justify-between items-center'>
              <BiStar style={{fontSize:"20px"}}/>
              <div className='w-[auto] flex justify-between items-center'>
                <p className='ml-[15px] text-[18px] font-medium'>{item.defectName}</p>
                <p className='ml-[15px] text-[18px] font-medium'>{item.repairTime}</p>
                <p className='ml-[15px] text-[18px] font-medium'>${item.price}</p>
              </div>

            </div>
            {/* {console.log(item)} */}
            <div className='w-[80px] flex justify-between items-center'>
              <UModal 
                dName= {item.defectName}
                dPrice ={item.price}
                dTime ={item.repairTime} 
                Iid={item.id} 
                getData={handleDefectData}
                />
              <BsFillTrashFill 
                className='text-red-500' 
                style={{fontSize:"18px"}} 
                ID={item.id} 
                onClick={handleStatusDataDelete}
                />
            </div>

          </div>            
        ))
      }
        <Pagination
          total={totalPage}
          current={currentPage}
          onChange={(page) => {
            setCurrentPage(page);
            // handleBrandData()
          }}
        />
    </div>

  </div>
  </>
  )
}
