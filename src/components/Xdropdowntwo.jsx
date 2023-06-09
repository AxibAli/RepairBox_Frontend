// THIS FILE IS NOT BEING USED
import React, { useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import { Checkbox, Box } from '@mui/material';
import axios from "axios";




export default function Basic({ value2,tg,Brands,Models,Defects,varBrand,varDefect,varModel }) {
  console.log(value2)
  console.log(Brands)
  console.log(Models)




  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const [showData, SetshowData] = React.useState([]);
  useEffect(() => {
    FetchApiData();
  }, [])
  const FetchApiData = async () => {
    try {
      const response = await axios.get(`http://18.221.148.248:84/api/v1/Brand/GetModelDefectsforDropdown?modelId=${value2.new_value}`);

      SetshowData(response.data.data);
      console.log(response.data.data);

    } catch (err) {
      console.log(err)
    }
  }
  console.log(showData, "showData")
  const [issueName, setissueName] = React.useState([]);


  const handleChange = (event) => {

    const {
      target: { value },
    } = event;
    setissueName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
      // Defects(issueName)
      
    );
    Defects(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
     
      
    );
    tg()
  };
 
  return (
    <Box sx={{ marginTop: '30px', paddingLeft: '100px', width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'justify', fontFamily: 'sans-serif', fontSize: '14px', color: '#4B5563' }}>
      <Box sx={{ width: '30%' }} ><h4 className="DropSelect">Select Repairable Issues</h4>
        <p>Available services/defect for selected device.</p>
      </Box>

      <FormControl sx={{ width: "70%", marginRight: 30 }}>
        <InputLabel id="demo-multiple-checkbox-label">Issues</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={varDefect}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {showData.map((item, index) => (
            <MenuItem key={index} value={item.text}>
              <Checkbox checked={issueName.indexOf(item.value) > -1} />
              <ListItemText primary={item.text} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}







// import React, { useEffect, useState } from 'react';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import { Checkbox, Box } from '@mui/material';
// import axios from "axios";

// export default function Basic({ value2 }) {
  // let APi3=value2.new_value;


//   const [showData, setShowData] = useState([]);
//   const [issueName, setIssueName] = useState([]);

//   useEffect(() => {
//     const fetchApiData = async () => {
//       try {
//         const response = await axios.get(`http://18.221.148.248:84/api/v1/Brand/GetModelDefectsforDropdown?modelId=${value2.new_value}`);
//         setShowData(response.data.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchApiData();
//   }, [value2]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setIssueName(value);
//   };

//   return (
//     <Box sx={{ marginTop: '30px', paddingLeft: '100px', width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'justify', fontFamily: 'sans-serif', fontSize: '14px', color: '#4B5563' }}>
//       <Box sx={{ width: '30%' }} >
//         <h4 className="DropSelect">Select Repairable Issues</h4>
//         <p>Available services/defects for the selected device.</p>
//       </Box>

//       <FormControl sx={{ width: "70%", marginRight: 30 }}>
//         <InputLabel id="demo-multiple-checkbox-label">Issues</InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={issueName}
//           onChange={handleChange}
//           input={<OutlinedInput label="Tag" />}
//           renderValue={(selected) => selected.join(', ')}
//           MenuProps={{
//             PaperProps: {
//               style: {
//                 maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//                 width: 250,
//               },
//             },
//           }}
//         >
//           {showData.map((item, index) => (
//             <MenuItem key={index} value={item.value}>
//               <Checkbox checked={issueName.includes(item.value)} />
//               <ListItemText primary={item.text} />
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
