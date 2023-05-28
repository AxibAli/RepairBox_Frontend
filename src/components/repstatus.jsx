import React from 'react'
import { useState } from 'react'
import CreateForm from './createForm'
import CreateModal from './createModal'

import StyleIcon from '@mui/icons-material/Style';

export default function repstatus() {
  const [FormToggle, setFormToggle] = useState(false);

  const toggle= () => {
    setFormToggle(!FormToggle)
  }
  

  return (
    <div className='w-[1050px] h-[100%] border-2 border-black border-dotted flex flex-col justify-center items-center'>
      <div className='w-[1010px] h-[60px] flex items-center justify-between'>
        <div class='w-[350px] h-[100%] flex items-center justify-normal'>
          <StyleIcon style={{ color: '#505050', fontSize: '40px' }}/>
          <p className='ml-[10px] text-[#505050] text-[30px] font-semibold'>REPAIR STATUSES</p>
        </div>
        <div class='w-[250px] h-[100%] mr-[10px] flex items-center justify-end'>
          {FormToggle? 
          <button class='w-[160px] h-[40px] bg-[#FF0000] rounded-[10px] hover:bg-[#e04c4c] text-white text-[16px] font-semibold' onClick={toggle}>Close</button>
          :
          <button class='w-[160px] h-[40px] bg-[#0096FF] rounded-[10px] hover:bg-[#3aa8f7] text-white text-[16px] font-semibold' onClick={toggle}>Create</button>
          }
          
          {/* <div className='w-[1px] h-[40px] bg-[#2385ca]'></div>
          <button class='w-[80px] h-[40px] bg-[#0096FF] rounded-r-[10px] hover:bg-[#3aa8f7] text-white text-[16px] font-semibold'>Back</button> */}
        </div>
      </div>
      <p>Hello</p>
      {FormToggle ? <CreateForm/> : <></>}

      <CreateModal/>

    </div>
  )
}
