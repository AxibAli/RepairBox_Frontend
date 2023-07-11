import React from 'react'
import { Box } from '@mui/material';
import BasicStack from './heading';
import Footer from './Footer';
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
