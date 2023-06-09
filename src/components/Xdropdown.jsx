// THIS FILE IS NOT BEING USED
import React, { useEffect } from 'react';
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
    console.log("newValue========aneeeq>", new_value) 
    setAge(event.target.value);
    // console.log(event.target.value)
    const {
      target: { value },
    } = event;
    setAge(
      typeof value === 'string' ? value.split(',') : value,

      // console.log(value, "value"),
      // console.log(value, "value"),

      setnew_value(value),
      CollectBrands(value)

    );


  };
// useEffect(()=>{
//   if(new_value){
//     setisbrand(true)
//   }else{
//     setisbrand(false)
//   }
// },[new_value])

  useEffect(() => {
    FetchApiData();
  }, [new_value])
  const FetchApiData = async () => {
    try {
      const response = await axios.get("http://18.221.148.248:84/api/v1/Brand/GetBrandsforDropdown");
      console.log(response.data.data);

      SetshowData(response.data.data);
      // console.log("==================>data",response?.data?.data)
      
    } catch (err) {
      console.log(err)
    }
  }
  // console.log(showData, "showData")
  return (
    <div className='dropdown'>
      <Box sx={{ paddingLeft: '100px', width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'justify', marginTop: '30px', fontFamily: 'sans-serif', fontSize: '14px', color: '#4B5563' }}>
        <Box sx={{ width: '30%', }} ><h2 className="DropSelect"  >Select Your Device brand</h2>
          <p>Brands we repair.</p>
        </Box>
        <FormControl sx={{ width: "70%", marginRight:30 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Brands</InputLabel>
        
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={}
            label="Age"
            onChange={handleChange}
          >
            {showData && showData.map((item, value) => (
              <MenuItem value={item.value} key={value}>{item.text}</MenuItem>
            ))}
          </Select>

        </FormControl>
      </Box>
      {/* {new_value ?


        <BasicSelect value1={new_value} tog={Togg} CollBrands={CollectBrands} CollModels={CollectModels} CollDefects={CollectDefects} varaiaBrand={varaiableBrand} varaiModel={varaiableModel}  varaiDefect={varaiableDefect}  /> : null
      } */}
    </div>
  );
}
