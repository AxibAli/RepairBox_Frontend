import { useState, useEffect } from 'react'
// import dataI from './XrepstatusData'
import CModal from './repStModalCreate'
import UModal from './repStModalUpdate'


import StyleIcon from '@mui/icons-material/Style';
import DeleteIcon from '@mui/icons-material/Delete';
import { BiStar } from "react-icons/bi";
import {BsFillTrashFill } from "react-icons/all";

import axios from "axios"

export default function repstatus() {
  const [Data, setData] = useState([])
  const [Id, setId] = useState(null)

  const handleStatusData = async () =>{
    try {
       const getResponse = await axios.get(`${process.env.REACT_APP_BASE_URL}/Order/GetStatuses`)
      //  console.log(getResponse.data.data?.data,"response")
       if (getResponse.status==200) {
        console.log("Render")
        let data=getResponse.data.data
          setData(data)
       }
    } catch (error) {
       console.log("Errors", error) 
    }
  }

  const handleStatusDataDelete = async (e) =>{
    const ID = e.currentTarget.getAttribute('ID');
    console.log(ID);
    try {
       const getResponse = await axios.delete(`${process.env.REACT_APP_BASE_URL}/Order/DeleteStatus?statusId=${ID}`)
      //  console.log(getResponse.data.data?.data,"response")
       if (getResponse.status==200) {
          handleStatusData()
       }
    } catch (error) {
       console.log("Errors", error) 
    }
  }
  
  // function fetchdata(){
  //   setData(dataI)
  //   console.log('render')
  // }
  

  useEffect(() => {
    handleStatusData()
  }, []);

  // console.log(Data)
  
  return (
    <div className='w-[1050px] h-[100%] flex flex-col justify-start items-center'>
      <div className='w-[1010px] h-[60px] mt-[20px] flex items-center justify-between'>
        <div class='w-[350px] h-[100%] flex items-center justify-normal'>
          <StyleIcon style={{ color: '#505050', fontSize: '40px' }}/>
          <p className='ml-[10px] text-[#505050] text-[30px] font-semibold'>REPAIR STATUSES</p>
        </div>
        <div class='w-[250px] h-[100%] mr-[10px] flex items-center justify-end'>
          <CModal getData={handleStatusData}/>
        </div>
      </div>
      <div className='w-[1050px] h-[auto] overflow-y-auto mt-[20px] pl-[25px]'>
        {
          Data.map((item,index) => (
            <div className='pl-[20px] pr-[20px] w-[1000px] h-[60px] bg-slate-50 hover:bg-slate-100 border-[#E0E0E0] border-[1px] rounded-sm flex justify-between items-center hover:cursor-pointer' key={index}>
              <div className='flex justify-between items-center'>
                <BiStar style={{fontSize:"20px"}}/>
                <p className='ml-[15px] text-[18px] font-medium'>{item.name}</p>
              </div>
              <div className='w-[80px] flex justify-between items-center'>
                <UModal status={item.name} Iid={item.id} getData={handleStatusData}/>
                <BsFillTrashFill className='text-red-500' style={{fontSize:"18px"}} ID={item.id} onClick={handleStatusDataDelete}/>
              </div>

            </div>            
          ))
        }
      </div>

    </div>
  )
}
