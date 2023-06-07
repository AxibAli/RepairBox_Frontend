import React from 'react'
import { useState } from 'react'

export default function createForm() {
    const [NewSt, setNewSt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('You have submitted');
    }

  return (
    <div className='w-[1000px] h-[220px] '>
        <div className='w-[1000px] h-[60px] flex items-center justify-normal'>
            <p className='ml-[10px] text-[#505050] text-[26px] font-semibold'>Add a Repair Device</p>
        </div>
        <form className='w-[1000px] h-[150px] bg-white flex justify-center items-center rounded-lg border-[rgba(229,231,235,1)] border-[1px]'>
            <div className='mt-[20px] h-[130px] flex justify-between items-center w-[900px]'>
                <div className='ml-[20px] h-[100%] w-[300px]'>
                    <p className='ml-[10px] text-[#505050] text-[20px] font-semibold'>Repair Device Details</p>
                    <p className='ml-[10px] mt-[5px] text-[#505050] text-[16px] font-normal'>Add Details and Customizations in the given field</p>
                </div>
                <div className='mr-[20px] h-[100%] w-[480px] flex flex-col items-start'>
                    <label htmlFor='body' className='text-[#505050] text-[18px] font-semibold'>Name </label>
                    <input
                        type='text'
                        id='body'
                        name='body'
                        className='w-[480px] h-[40px] outline-none rounded-lg border-[1px] border-slate-400 pl-[20px] shadow-[#0096FF] focus:shadow-md focus:border-[#0096FF]'
                        placeholder='Enter ...'
                        value={NewSt}
                        onChange={(e) => setNewSt(e.target.value)}
                    />
                    <div className='w-[480px] h-[50px] flex justify-center items-center'>
                        <button type='submit' className='w-[100px] h-[40px] bg-[#0096FF] rounded-[10px] hover:bg-[#3aa8f7] text-white text-[16px] font-semibold' onClick={handleSubmit}>Add</button>
                    </div>
                  
                </div>
            </div>
        </form>
    </div>
  )
}