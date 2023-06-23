import  React,{useEffect,useState} from 'react';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Basic from './dropdowntwo';
import axios from "axios";



export default function BasicSelect({value}) {
    const [age, setAge] = React.useState('');
  const [new_value,setnew_value]= React.useState("");
  const [showData, SetshowData] = React.useState([]);


  const handleChange = (event) => {
    setAge(event.target.value);
    const {
      target: { value },
    } = event;
    setAge(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
      console.log(value,"value"),
      setnew_value(value)
      
    );
  };
  
    useEffect(() => {
      FetchApiData();
    }, [value])
    const FetchApiData = async () => {
      try {
        const response = await axios.get(`http://18.221.148.248:84/api/v1/Brand/GetBrandModelsforDropdown?brandId=${value}`);
        console.log(value)
        // console.log(new_value)
        // console.log(response.data.data);
        // ?.filter((val)=>val.value==value)
        SetshowData(response.data.data);
      } catch (err) {
        console.log(err)
      }
    }
    console.log(showData, "showData")
    // useEffect(()=>{
    //   if(new_value){
    //     setisbrand(true)
    //   }else{
    //     setisbrand(false)
    //   }
    // },[new_value])
    

    return (
        <div  className='dropdown'>
            <Box sx={{ paddingLeft:'100px',width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'justify',marginTop:'30px', fontFamily: 'sans-serif', fontSize: '14px', color: '#4B5563'}}>
                <Box sx={{ width: '30%' }} ><h4 className="DropSelect">Select Your Device</h4>
                    <p>Available devices for selected brand.</p>
                </Box>
                <FormControl sx={{ width: "70%",  marginRight:30 }} fullWidth>
                    <InputLabel id="demo-simple-select-label">Device</InputLabel>
                    <Select
                   
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                     <MenuItem value={30}>Thirty</MenuItem> */}
             {showData && showData.map((item, index) => (
               <MenuItem value={item.value} key={index}>{item.text}</MenuItem>
             ))}
          </Select>
                </FormControl>

            </Box>
            {new_value ?


                <Basic value={new_value}  /> : null
            }

        </div>

    );
}
