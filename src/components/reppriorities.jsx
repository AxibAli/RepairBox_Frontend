import React from 'react'
import { useState, useEffect } from 'react'
import dataI from './repprioritiesData'
import CModal from './repPrModalCreate'
import UModal from './repPrModalUpdate'

import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import DeleteIcon from '@mui/icons-material/Delete';
import {BsFillTrashFill } from "react-icons/all";



export default function repstatus() {
  const [Data, setData] = useState([])

  function fetchdata(){
    // Api call

    const dataAscending = [...dataI].sort((a, b) => a.value - b.value);
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
          <CModal/>
        </div>
      </div>
      <div className='w-[1050px] h-[auto] overflow-y-auto mt-[20px] pl-[25px]'>
        {
          Data.map((item) => (
            <div className='pl-[20px] pr-[20px] w-[1000px] h-[60px] bg-slate-50 hover:bg-slate-100 border-[#E0E0E0] border-[1px] rounded-sm flex justify-between items-center hover:cursor-pointer'>
              <div className='w-[200px] h-[100%] flex justify-between items-center'>
                <div className='w-[25px] h-[25px] bg-blue-200 flex justify-center items-center rounded-[5px]'>
                  <p className='text-[14px] font-medium text-blue-700'>{item.value}</p>       
                </div>
                <div className='w-[150px] h-auto flex justify-start items-center'>
                  <p className='text-[18px] font-medium'>{item.name}</p>
                  <p className='text-[18px] font-medium ml-[5px] mr-[5px]'> : </p>
                  <p className='text-[18px] font-light'>${item.charge}</p>    
                </div>
              </div>
              <div className='w-[80px] flex justify-between items-center'>
                <UModal name={item.name} value={item.value} price={item.charge}/>
                <BsFillTrashFill className='text-red-500' style={{fontSize:"18px"}}/>

              </div>
            </div>            
          ))
        }
      </div>

    </div>
  )
}
