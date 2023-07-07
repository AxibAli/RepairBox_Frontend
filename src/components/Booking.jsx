import React from 'react'
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import BasicStack from './heading';
import HorizontalLabelPositionBelowStepper from './step';
import MultipleSelect from './dropdown';
import AllCollapseExample from './accor';
import MiddleSexction from './middlesec';
// import Types from './typo';
import Nextbtn from './Nextbtn';
import Contact from './Contact';
import Footer from './Footer';
import  Navbar  from './navbar'
import  Navber  from './navber'

import UserForm from './UserStepForm'

export default function Booking() {
  
// let navbarCheck = () => {

//   if(window.location.pathname == "/"){
//     return <Navber />
//   }else if(window.location.pathname == "/"){

//   }
//   else{
//     return <Navbar />
//   }

// }
  return (

    // sx={{ width: '100%',display:'flex',justifyContent:'flex-start',paddingLeft:3,paddingTop:2 }}
    <Box>
        {/* {navbarCheck()} */}
      {/* <Navbar /> */}
     <BasicStack />
     <UserForm/>
      {/* <HorizontalLabelPositionBelowStepper /> */}
      {/* <MultipleSelect /> */}
      {/* <Nextbtn/> */}
      {/* <Types />
      <AllCollapseExample />
      <MiddleSexction /> 
      <Contact/> */}
      <Footer/>
    
    {/* <div>HomePage</div>

    <Stack spacing={2}>
    <h1>Book your defective or repairable device</h1>
 </Stack> */}
 </Box>
  )
}
