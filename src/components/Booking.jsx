import React from 'react'
import { Box } from '@mui/material';
import Footer from './Footer';
import BasicStack from './heading';
// import Stack from '@mui/material/Stack';
// import HorizontalLabelPositionBelowStepper from './step';
// import MultipleSelect from './dropdown';
// import AllCollapseExample from './accor';
// import MiddleSexction from './middlesec';
// import Types from './typo';
// import Nextbtn from './Nextbtn';
// import Contact from './Contact';
// import  Navbar  from './navbar'
// import  Navber  from './navber'

import UserForm from './UserStepForm'

export default function Booking() {
  return (

    <Box>
      <BasicStack />
      <UserForm/>
      <Footer/>
    </Box>
  )
}

// let navbarCheck = () => {

//   if(window.location.pathname == "/"){
//     return <Navber />
//   }else if(window.location.pathname == "/"){

//   }
//   else{
//     return <Navbar />
//   }

// }

   // sx={{ width: '100%',display:'flex',justifyContent:'flex-start',paddingLeft:3,paddingTop:2 }}

        {/* {navbarCheck()} */}
      {/* <Navbar /> */}
      {/* <HorizontalLabelPositionBelowStepper /> */}
      {/* <MultipleSelect /> */}
      {/* <Nextbtn/> */}
      {/* <Types />
      <AllCollapseExample />
      <MiddleSexction /> 
      <Contact/> */}

    {/* <div>HomePage</div>

    <Stack spacing={2}>
    <h1>Book your defective or repairable device</h1>
 </Stack> */}