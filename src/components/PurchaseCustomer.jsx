import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {BsFillTrashFill } from "react-icons/all";
import CModal from './PurChCreateModal'
import UModal from './PurChUpdateModal'


export default function PurchaseCustomer() {
  return (
    <div className='w-[1050px] h-[100%] flex flex-col justify-start items-center'>
      <div className='w-[1010px] h-[60px] mt-[20px] flex items-center justify-between'>
        <div class='w-[500px] h-[100%] flex items-center justify-normal'>
          <AddShoppingCartIcon style={{ color: '#505050', fontSize: '40px' }}/>
          <p className='ml-[10px] text-[#505050] text-[30px] font-semibold'>PURCHASE FROM CUSTOMER</p>
        </div>
        <div class='w-[250px] h-[100%] mr-[10px] flex items-center justify-end'>
          <CModal />
        </div>
      </div>
      <div className='w-[1050px] h-[auto] overflow-y-auto mt-[20px] pl-[25px]'>
        
        <div className='pl-[20px] pr-[20px] w-[1000px] h-[60px] bg-slate-50 hover:bg-slate-100 border-[#E0E0E0] border-[1px] rounded-sm flex justify-between items-center hover:cursor-pointer'>
          <div className='flex justify-between items-center'>
            <p className='ml-[15px] text-[18px] font-medium border-2 border-black'></p>
          </div>
          <div className='w-[80px] flex justify-between items-center'>
            <UModal/>
            <BsFillTrashFill className='text-red-500' style={{fontSize:"18px"}} />
          </div>
        </div> 
        
      </div>

    </div>
  )
}

// Code will be Applied when API is ready
// {
//   Data.map((item,index) => (
            
//   ))
// }
// key={index}
// {item.name}
// status={item.name} Iid={item.id} getData={handleStatusData}
// ID={item.id} onClick={handleStatusDataDelete}