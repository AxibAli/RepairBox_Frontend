import * as React from 'react';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import '../App.css'



export default function BasicStack() {
  return (
    <Box sx={{ width: '100%',display:'flex',justifyContent:'center',alignItems:'center',paddingLeft:3,paddingTop:2 }}>
      <Stack spacing={2}>
         <h1 className='defectHead'>Book your defective or repairable device</h1>
      </Stack>
    </Box>
  );
}
