import React from 'react'
import { useState, useEffect } from 'react'
import dataI from './repprioritiesData'
import CModal from './repPrModalCreate'
import UModal from './repPrModalUpdate'

import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import DeleteIcon from '@mui/icons-material/Delete';
import {BsFillTrashFill } from "react-icons/all";

import axios from "axios"

export default function reppriorities() {
  const [Data, setData] = useState([])

  const handleStatusData = async () =>{
    try {
       const getResponse = await axios.get(`http://18.221.148.248:84/api/v1/Order/GetPriorities`)
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
       const getResponse = await axios.delete(`http://18.221.148.248:84/api/v1/Order/DeletePriority?priorityId=${ID}`)
      //  console.log(getResponse.data.data?.data,"response")
       if (getResponse.status==200) {
          handleStatusData()
       }
    } catch (error) {
       console.log("Errors", error) 
    }
  }

  function fetchdata(){
    // Api call
    handleStatusData()
    const dataAscending = [...Data].sort((a, b) => a.value - b.value);
    setData(dataAscending)
    console.log('render')
  }


  useEffect(() => {
    fetchdata()
  }, []);

  console.log(Data)
  
  return (
    <div className='w-[1050px] h-[100%] flex flex-col justify-start items-center'>
      <div className='w-[1010px] h-[60px] mt-[20px] flex items-center justify-between'>
        <div class='w-[350px] h-[100%] flex items-center justify-normal'>
          <FormatListNumberedIcon style={{ color: '#505050', fontSize: '40px' }}/>
          <p className='ml-[10px] text-[#505050] text-[30px] font-semibold'>REPAIR PRIORITIES</p>
        </div>
        <div class='w-[250px] h-[100%] mr-[10px] flex items-center justify-end'>
          <CModal getData={fetchdata}/>
        </div>
      </div>
      <div className='w-[1050px] h-[auto] overflow-y-auto mt-[20px] pl-[25px]'>
        {
          Data.map((item) => (
            <div className='pl-[20px] pr-[20px] w-[1000px] h-[60px] bg-slate-50 hover:bg-slate-100 border-[#E0E0E0] border-[1px] rounded-sm flex justify-between items-center hover:cursor-pointer'>
              <div className='w-[auto] h-[100%] flex justify-between items-center'>
                <div className='w-[25px] h-[25px] bg-blue-200 flex justify-center items-center rounded-[5px]'>
                  <p className='text-[14px] font-medium text-blue-700'>{item.id}</p>       
                </div>
                <div className='ml-[15px] w-[auto] h-auto flex justify-start items-center'>
                  <p className='text-[18px] font-medium'>{item.name}</p>
                  <p className='text-[18px] font-medium ml-[5px] mr-[5px]'> : </p>
                  <p className='text-[18px] font-light'>${item.processCharges}</p>    
                </div>
              </div>
              <div className='w-[80px] flex justify-between items-center'>
                <UModal name={item.name} value={item.id} price={item.processCharges} getData={fetchdata}/>
                <BsFillTrashFill className='text-red-500' style={{fontSize:"18px"}} ID={item.id} onClick={handleStatusDataDelete}/>

              </div>
            </div>            
          ))
        }
      </div>

    </div>
  )
}
