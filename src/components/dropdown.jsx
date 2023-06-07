


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
  const [showData, SetshowData] = React.useState([]);
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
      console.log(value,"value"),

      setnew_value(value)

    );
    
  };

  useEffect(() => {
    FetchApiData();
  }, [])
  const FetchApiData = async () => {
    try {
      const response = await axios.get("http://18.221.148.248:84/api/v1/Brand/GetBrandsforDropdown");
      console.log(response.data.data);

      SetshowData(response.data.data);
    } catch (err) {
      console.log(err)
    }
  }
  console.log(showData,"showData")

  const items = [
    {
      name: 't'
    }, 
    {
      name: 'z'
    },
    {
      name: 'x'
    }
  ]
  return (
    <div className='dropdown'>
        </Box>
        <FormControl sx={{ width: "70%", }} fullWidth>
          <InputLabel id="demo-simple-select-label">Brands</InputLabel>
          {/* <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {
              age.map((item,index) => (
                <MenuItem value={item.index}>{item.text}</MenuItem>
              ))
            }
              
          </Select> */}
          <Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={age}
  label="Age"
  onChange={handleChange}
>
  {showData && showData.map((item, value) => (
    <MenuItem value={item.value} key={value}>{item.text}</MenuItem>
  ))}
</Select>

        </FormControl>
      </Box>
      {new_value ?


        <BasicSelect /> : null
      }
    </div>
  );
}