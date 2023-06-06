


import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BasicSelect from './dropdownone';
import { Box } from '@mui/material';
import '../App.css'
import axios from "axios";


export default function MultipleSelect() {

  const [age, setAge] = React.useState([]);
  const [new_value, setnew_value] = React.useState("")

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value)
    const {
      target: { value },
    } = event;
    setAge(
      typeof value === 'string' ? value.split(',') : value,
      console.log(value, "value"),
      // console.log(value,"value"),

      setnew_value(value)

    );
  };

  useEffect(() => {
    FetchApiData();
  }, [])
  const FetchApiData = async () => {
    try {
      const response = await axios.get("http://18.221.148.248:84/api/v1/Brand/GetBrandsforDropdown");
      setAge(response.data.data);
    } catch (err) {
      console.log(err)
    }

  }


  return (
    <div className='dropdown'>
      <Box sx={{ paddingLeft: '100px', width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'justify', marginTop: '30px', fontFamily: 'sans-serif', fontSize: '14px', color: '#4B5563' }}>
        <Box sx={{ width: '30%' }} ><h4 >Select Your Device Brand</h4>
          <p>Brands we repair.</p>
        </Box>
        <FormControl sx={{ width: "70%", }} fullWidth>
          <InputLabel id="demo-simple-select-label">Brands</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {
              age.map((item) => (
                <MenuItem value={item.text}>{item.text}</MenuItem>
              ))
            }


          </Select>
        </FormControl>
      </Box>
      {new_value ?


        <BasicSelect /> : null
      }
    </div>
  );
}