import React from 'react'
import { useState, useEffect } from 'react'
import dataI from './repstatusData'
import CModal from './repStModalCreate'
import UModal from './repStModalUpdate'

import StyleIcon from '@mui/icons-material/Style';



export default function repstatus() {
  const [Data, setData] = useState([])

  function fetchdata(){
    setData(dataI)
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
          <StyleIcon style={{ color: '#505050', fontSize: '40px' }}/>
          <p className='ml-[10px] text-[#505050] text-[30px] font-semibold'>REPAIR STATUSES</p>
        </div>
        <div class='w-[250px] h-[100%] mr-[10px] flex items-center justify-end'>
          <CModal/>
        </div>
      </div>
      <div className='w-[1050px] h-[auto] overflow-y-auto mt-[20px] pl-[25px]'>
        {
          Data.map((item) => (
            <div className='pl-[20px] pr-[20px] w-[1000px] h-[60px] bg-slate-50 hover:bg-slate-100 border-[#E0E0E0] border-[1px] rounded-sm flex justify-between items-center hover:cursor-pointer'>
              <p className='text-[18px] font-medium'>{item.name}</p>
              <UModal status={item.name}/>
            </div>            
          ))
        }
      </div>

    </div>
  )
}
