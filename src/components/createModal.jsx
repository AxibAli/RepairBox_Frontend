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
      <Button type="primary" onClick={showModal} className='w-[160px] h-[40px] bg-[#0096FF] rounded-[10px] hover:bg-[#3aa8f7] text-white text-[16px] font-semibold repair-create-button'>
        Create
      </Button>
      <Modal
        title="Add a Repair Device"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={900}
        style={{backgroundColor: blue}}
      >
        <div className='mt-[20px] h-[300px] flex justify-between items-center w-[700px]'>
                <div className='h-[100%] w-[400px]'>
                    <p className='text-[#505050] text-[20px] font-semibold'>Repairable Device Information</p>
                    <p className='mt-[5px] text-[#505050] text-[16px] font-normal'>Add Details and Customizations in the given field.</p>
                </div>
                <div className='h-[100%] w-[300px] flex flex-col items-start'>
                    <label htmlFor='body' className=' text-[18px] font-semibold'>Brand </label>
                    <select class="form-select" aria-label="Default select example" id='body' name='body'>
                        <option selected>Select an Option</option>
                        <option value="1">Konka</option>
                        <option value="2">Mercedes</option>
                        <option value="3">MI Tv</option>
                        <option value="4">HP</option>
                        <option value="5">TECHNO</option>
                        <option value="6">REDMI</option>
                        <option value="7">LAPTOP LENOVO</option>
                         </select><br />
                    {/* <input
                        type='text'
                        id='body'
                        name='body'
                        className='w-[300px] h-[40px] outline-none rounded-lg border-[1px] border-slate-400 p-[20px] shadow-[#0096FF] focus:shadow-md focus:border-[#0096FF]'
                        placeholder='Enter Your Brand'
                        value={NewSt}
                        onChange={(e) => setNewSt(e.target.value)}
                    /> <br /> */}
                    <label htmlFor='body' className='text-[18px] font-semibold'>Name </label>
                    <input
                        type='text'
                        id='body'
                        name='body'
                        className='w-[300px] h-[40px] outline-none rounded-lg border-[1px] border-slate-400 p-[20px] shadow-[#0096FF] focus:shadow-md focus:border-[#0096FF]'
                        placeholder='Name'
                        value={NewSt}
                        onChange={(e) => setNewSt(e.target.value)}
                    /> <br />
                    <label htmlFor='body' className='text-[18px] font-semibold'>Modal </label>
                    <input
                        type='text'
                        id='body'
                        name='body'
                        className='w-[300px] h-[40px] outline-none rounded-lg border-[1px] border-slate-400 p-[20px] shadow-[#0096FF] focus:shadow-md focus:border-[#0096FF]'
                        placeholder='Modal'
                        value={NewSt}
                        onChange={(e) => setNewSt(e.target.value)}
                    /> <br />
                    
                    <div className="file-upload-wrapper">
                    <label htmlFor='body' className='text-[18px] font-semibold'>Image </label>
                   <input type="file" id="input-file-now-disabled-2" className="file-upload" data-default-file="https://mdbootstrap.com/img/Others/documentation/1.webp" />                   
                   </div>

                   {/* <Button type="primary" className='w-[80px] h-[50px] bg-[#0096FF] rounded-[10px] hover:bg-[#3aa8f7] text-white text-[16px] font-semibold save-button'>
                                Save  
                            </Button> */}                            
               </div>
                
                
            </div>
            
        {/* <p>{modalText}</p> */}
      </Modal>

      
    </>
  );
};
export default createModal;