import React from 'react'
import Sidebar from '../components/Admin'
import Navbar from '../components/navbar'

import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"


export default function adminLayout() {
  const [view, setview]= useState(false);
  const [menu, setmenu] = useState(false);
  
  useEffect(() => {
      renderMobileView();
  }, []);

  const handleClick = () => {
      window.scrollTo(0, 0);
      setmenu(!menu);
  };

  const renderMobileView = () => {
  if (window.innerWidth <= 1300) {
      setview(true);
  } else {
      setview(false);
  }
  };

  useEffect(() =>{
      window.addEventListener("resize", renderMobileView);
  }, [])

  return (
    <>

      {!view &&(
        <>
          <Navbar/>
          <div className='w-[100%] h-[89vh] flex justify-between items-center'>
              <div className='w-[20%] h-[89vh] overflow-y-auto'>
                <Sidebar/>                
              </div>
              <div className='w-[80%] h-[89vh] overflow-y-auto flex justify-center items-center'>
                <Outlet/>
              </div>
          </div> 
        </>
        
      )}
      {view &&(
        <>
          <div className='w-[100%] h-[70px] flex justify-between items-center overflow-x-clip'>
              <div className=' max-w-screen-[250px] h-[100%] bg-[#152238] flex justify-start items-center '>
                  <div className='ml-[10px] border-1 border-white'>
                      <WidgetsIcon fontSize='large' style={{ color: '#FFFF' }}/>
                  </div>
                  <div className='ml-[15px] mr-[5px] border-1 border-red'>
                      <p className='text-white text-[24px]'>Joytel</p>
                  </div>      
              </div>
              <div className='max-w-screen-[auto] w-[300px] h-[100%] flex justify-end items-center border-b-4 border-[#0096FF]'>
                  <div className='w-[100px] h-[100%] flex justify-between items-center'>
                    <div className='w-[40px] h-[40px] rounded-full bg-gray-100 flex justify-center items-center'>
                        <AccountCircleIcon fontSize='large'/>
                    </div>
                    {menu? 
                      <div className='w-[40px] h-[40px] bg-slate-50' onClick={handleClick}>
                        <CloseOutlinedIcon style={{ fontSize: '40px'}}/>
                      </div>
                      :
                      <div className='w-[40px] h-[40px] bg-slate-50' onClick={handleClick}>
                      <ViewSidebarOutlinedIcon style={{ fontSize: '40px'}}/>
                      </div>
                    } 
                  </div>
              </div>
          </div>

          {menu &&
            (
              <div className='z-10 w-[100%] h-[auto] absolute flex justify-end items-center'>
                <div className="h-[auto] w-[400px] animate-sidebar flex justify-end items-center">
                  <Sidebar/> 
                </div>
              </div>
          )}
          <div className='min-w-screen min-h-screen overflow-x-auto overflow-y-auto'>
            <Outlet/>
          </div>
        </>

        

      )}


    </>
   
  )
}

