import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CModal from './repStModalCreate'

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
      <div className='w-[1050px] h-[50px] '>

      </div>
      <div className='w-[1050px] h-[auto] overflow-y-auto mt-[20px] pl-[25px]'>

        
      </div>

    </div>
  )
}
