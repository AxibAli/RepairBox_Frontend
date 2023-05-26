import { Button, Modal } from 'antd';
import { useState } from 'react';

import 'antd/dist/reset.css';
import { blue } from '@mui/material/colors';

const createModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [NewSt, setNewSt] = useState('');
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    alert(NewSt);
    setModalText(NewSt);
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };



  return (
    <>
      <Button type="primary" onClick={showModal} className='bg-blue-600'>
        Create
      </Button>
      <Modal
        title="Add a Repair Status"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={700}
        style={{backgroundColor: blue}}
      >
        <div className='mt-[20px] h-[130px] flex justify-between items-center w-[600px]'>
                <div className='h-[100%] w-[300px]'>
                    <p className='text-[#505050] text-[20px] font-semibold'>Repair Status Details</p>
                    <p className='mt-[5px] text-[#505050] text-[16px] font-normal'>Add Details and Customizations in the given field</p>
                </div>
                <div className='h-[100%] w-[300px] flex flex-col items-start'>
                    <label htmlFor='body' className='text-[#505050] text-[18px] font-semibold'>Details: </label>
                    <input
                        type='text'
                        id='body'
                        name='body'
                        className='w-[300px] h-[40px] outline-none rounded-lg border-[1px] border-slate-400 pl-[20px] shadow-[#0096FF] focus:shadow-md focus:border-[#0096FF]'
                        placeholder='Enter ...'
                        value={NewSt}
                        onChange={(e) => setNewSt(e.target.value)}
                    />
                    {/* <div className='w-[300px] h-[50px] flex justify-center items-center'>
                        <button type='submit' className='w-[100px] h-[40px] bg-[#0096FF] rounded-[10px] hover:bg-[#3aa8f7] text-white text-[16px] font-semibold' onClick={handleSubmit}>Add</button>
                    </div> */}
                </div>
            </div>
        {/* <p>{modalText}</p> */}
      </Modal>
    </>
  );
};
export default createModal;