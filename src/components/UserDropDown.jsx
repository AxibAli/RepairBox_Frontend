// import React from 'react'
// // import BrandDropdown from './dropdown'
// import { useEffect } from 'react';
// import '../App.css'
// import axios from "axios";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import { Checkbox, Box } from '@mui/material';



// export default function UserDropDown(props) {
//     const ITEM_HEIGHT = 48;
//     const ITEM_PADDING_TOP = 8;
//     const MenuProps = {
//       PaperProps: {
//         style: {
//           maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//           width: 250,
//         },
//       },
//     };

//     const [BrandData, setBrandData] = React.useState([]);
//     const [brand, SetBrand] = React.useState(props.BrandCurr);
//     const [BrandModelsData, setBrandModelsData] = React.useState([]);
//     const [model, SetModel] = React.useState(props.ModelCurr);
//     const [BMDefectsData, setBMDefectsData] = React.useState([]);
//     const [defect, SetDefect] = React.useState(
//         props.DefectCurr
//     );

//     const FetchApiData = async () => {
//         try {
//           const response = await axios.get("http://18.221.148.248:84/api/v1/Brand/GetBrandsforDropdown");
//           console.log(response.data.data);
    
//           setBrandData(response.data.data);
          
//         } catch (err) {
//           console.log(err)
//         }
//     }

//     const FetchApiDataModels = async () => {
//         try {
//           const response = await axios.get(`http://18.221.148.248:84/api/v1/Brand/GetBrandModelsforDropdown?brandId=${brand}`);
//           console.log(response.data.data);
//           setBrandModelsData(response.data.data);
//         } catch (err) {
//           console.log(err)
//         }
//     }

//     const FetchApiDataDefects = async () => {
//         try {
//             const response = await axios.get(`http://18.221.148.248:84/api/v1/Brand/GetModelDefectsforDropdown?modelId=${model}`);
//             console.log(response.data.data);    
//             setBMDefectsData(response.data.data);

//         } catch (err) {
//             console.log(err)
//         }
//     }

//     const handleBrand = (e) => {
//         SetBrand(e.target.value)
//         props.BrandFunc(e.target.value)
//         if (e.target.value != props.BrandCurr){
//             props.ModelFunc(null)
//             props.DefectFunc([])
//             SetDefect([])   
//         }
//     };
//     // console.log(brand)

//     const handleModel = (e) => {
//         SetModel(e.target.value)
//         props.ModelFunc(e.target.value)
//         if (e.target.value != props.ModelCurr){
//             props.DefectFunc([])
//             SetDefect([])   
//         }
//     };
//     // console.log(model)

//     const handleDefect = (e) => {
//         let newDefect = e.target.value
//         // console.log("Original:", newDefect)
//         const lastElement = newDefect[newDefect.length - 1];
//         // console.log("Last Element:", lastElement)

//         let elementFound = false;

//         if (newDefect.length >=2){
//             newDefect.pop()
//             // console.log("After Pop:", newDefect)
//             newDefect = newDefect.filter(item => {
//                 if (item.id === lastElement.id ) {
//                     elementFound = true;
//                     return false; // Exclude the element from the filtered array
//                 }
//                 return true; // Include all other elements in the filtered array
//             });
//             // console.log("After Filter: ", newDefect)
//             if (elementFound === false){
//                 newDefect = [...newDefect, lastElement]; 
//             }
//             // console.log("After adding Last Element: ", newDefect)
//         }
//         else {
//             console.log("New:", newDefect)
//         }


//         SetDefect(null)
//         SetDefect(newDefect)
//         props.DefectFunc(newDefect)
//         props.TL()
//         // SetDefect(prevDefect => [...prevDefect, { id: "newId", text: "newText" }]);
//         // SetDefect([...defect, newDefect])
//     };
//     // console.log(defect)


//     useEffect(() => {
//         FetchApiData();
//     }, [])


//     useEffect(() => {
//         FetchApiDataModels();
//     }, [brand])

//     useEffect(() => {
//         FetchApiDataDefects();
//     }, [model])
//   return (
//     <div>
//         <div className='dropdownforbrand'>
//             <Box sx={{ paddingLeft: '100px', width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'justify', marginTop: '30px', fontFamily: 'sans-serif', fontSize: '14px', color: '#4B5563' }}>
//                 <Box sx={{ width: '30%', }} ><h2 className="DropSelect"  >Select Your Device brand</h2>
//                 <p>Brands we repair.</p>
//                 </Box>
//                 <FormControl sx={{ width: "70%", marginRight:30 }} fullWidth>
//                 <InputLabel id="demo-simple-select-label">Brands</InputLabel>
                
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={brand}
//                     label="Age"
//                     onChange={handleBrand}
//                 >
//                     {BrandData && BrandData.map((item, value) => (
//                     <MenuItem value={item.value} key={value}>{item.text}</MenuItem>
//                     ))}
//                 </Select>
                    
//                 </FormControl>
//             </Box>
//         </div>

//         {brand?
//             <div className='dropdown'>
//                 <Box sx={{ paddingLeft:'100px',width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'justify',marginTop:'30px', fontFamily: 'sans-serif', fontSize: '14px', color: '#4B5563'}}>
//                     <Box sx={{ width: '30%' }} ><h4 className="DropSelect">Select Your Device</h4>
//                         <p>Available devices for selected brand.</p>
//                     </Box>
//                     <FormControl sx={{ width: "70%",  marginRight:30 }} fullWidth>
//                         <InputLabel id="demo-simple-select-label">Device</InputLabel>
//                         <Select                        
//                             labelId="demo-simple-select-label"
//                             id="demo-simple-select"
//                             value={model}
//                             label="Age"
//                             onChange={handleModel}
//                         >
//                             {BrandModelsData && BrandModelsData.map((item, index) => (
//                             <MenuItem value={item.value} key={index}>{item.text}</MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                 </Box>
//             </div>
//         :
//             <></>
//         }


//         {model? 
//             <Box sx={{ marginTop: '30px', paddingLeft: '100px', width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'justify', fontFamily: 'sans-serif', fontSize: '14px', color: '#4B5563' }}>
//             <Box sx={{ width: '30%' }} ><h4 className="DropSelect">Select Repairable Issues</h4>
//                 <p>Available services/defect for selected device.</p>
//             </Box>
        
//             <FormControl sx={{ width: "70%", marginRight: 30 }}>
//                 <InputLabel id="demo-multiple-checkbox-label">Issues</InputLabel>
//                 <Select
//                     labelId="demo-multiple-checkbox-label"
//                     id="demo-multiple-checkbox"
//                     multiple
//                     value={defect}
//                     onChange={handleDefect}
//                     input={<OutlinedInput label="Tag" />}
//                     renderValue={(selected) =>
//                         selected.map((item) => item.text).join(", ")
//                     }
//                     MenuProps={MenuProps}
//                     >
//                     {BMDefectsData.map((item, index) => (
//                         <MenuItem key={index} value={{ id: item.value, text: item.text }}>
//                         <Checkbox checked={defect.findIndex(
//                             (selectedValue) =>
//                                 selectedValue.id === item.value
//                             ) > -1} 
//                         />
//                         <ListItemText primary={item.text} />
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
//             </Box>
//         :
//         <></>
//         }
//     </div>
//   )
// }
import React from 'react';
import { useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import { Checkbox, Box } from '@mui/material';

export default function UserDropDown(props) {
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

  const [BrandData, setBrandData] = React.useState([]);
  const [brand, SetBrand] = React.useState(props.BrandCurr);
  const [BrandModelsData, setBrandModelsData] = React.useState([]);
  const [model, SetModel] = React.useState(props.ModelCurr);
  const [BMDefectsData, setBMDefectsData] = React.useState([]);
  const [defect, SetDefect] = React.useState(props.DefectCurr);

  const FetchApiData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/Brand/GetBrandsforDropdown`);
      console.log(response.data.data);

      setBrandData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const FetchApiDataModels = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/Brand/GetBrandModelsforDropdown?brandId=${brand}`);
      console.log(response.data.data);
      setBrandModelsData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const FetchApiDataDefects = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/Brand/GetModelDefectsforDropdown?modelId=${model}`);
      console.log(response.data.data);
      setBMDefectsData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBrand = (e) => {
    SetBrand(e.target.value);
    props.BrandFunc(e.target.value);
    if (e.target.value !== props.BrandCurr) {
      props.ModelFunc(null);
      props.DefectFunc([]);
      SetDefect([]);
    }
  };

  const handleModel = (e) => {
    SetModel(e.target.value);
    props.ModelFunc(e.target.value);
    if (e.target.value !== props.ModelCurr) {
      props.DefectFunc([]);
      SetDefect([]);
    }
  };

  const handleDefect = (e) => {
    let newDefect = e.target.value;
    const lastElement = newDefect[newDefect.length - 1];

    let elementFound = false;

    if (newDefect.length >= 2) {
      newDefect.pop();
      newDefect = newDefect.filter((item) => {
        if (item.id === lastElement.id) {
          elementFound = true;
          return false;
        }
        return true;
      });

      if (elementFound === false) {
        newDefect = [...newDefect, lastElement];
      }
    } else {
      console.log('New:', newDefect);
    }

    SetDefect(null);
    SetDefect(newDefect);
    props.DefectFunc(newDefect);
    props.TL();
  };

  useEffect(() => {
    FetchApiData();
  }, []);

  useEffect(() => {
    FetchApiDataModels();
  }, [brand]);

  useEffect(() => {
    FetchApiDataDefects();
  }, [model]);

  return (
    <div>
      <div className="dropdownforbrand">
        <Box
          sx={{
            paddingLeft: '10px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '30px',
            fontFamily: 'sans-serif',
            fontSize: '14px',
            color: '#4B5563',
          }}
        >
          <h2 className="DropSelect">Select Your Device Brand</h2>
          <p>Brands we repair.</p>
          <FormControl sx={{ width: '100%', marginBottom: '15px' }}>
            <InputLabel id="demo-simple-select-label">Brands</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={brand}
              label="Brands"
              onChange={handleBrand}
            >
              {BrandData &&
                BrandData.map((item, value) => (
                  <MenuItem value={item.value} key={value}>
                    {item.text}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
      </div>

      {brand ? (
        <div className="dropdown">
          <Box
            sx={{
              paddingLeft: '10px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '30px',
              fontFamily: 'sans-serif',
              fontSize: '14px',
              color: '#4B5563',
            }}
          >
            <h4 className="DropSelect">Select Your Device</h4>
            <p>Available devices for selected brand.</p>
            <FormControl sx={{ width: '100%', marginBottom: '15px' }}>
              <InputLabel id="demo-simple-select-label">Device</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={model}
                label="Device"
                onChange={handleModel}
              >
                {BrandModelsData &&
                  BrandModelsData.map((item, index) => (
                    <MenuItem value={item.value} key={index}>
                      {item.text}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      ) : null}

      {model ? (
        <Box
          sx={{
            marginTop: '30px',
            paddingLeft: '10px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'sans-serif',
            fontSize: '14px',
            color: '#4B5563',
          }}
        >
          <h4 className="DropSelect">Select Repairable Issues</h4>
          <p>Available services/defects for selected device.</p>
          <FormControl sx={{ width: '100%', marginBottom: '15px' }}>
            <InputLabel id="demo-multiple-checkbox-label">Issues</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={defect}
              onChange={handleDefect}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.map((item) => item.text).join(', ')}
              MenuProps={MenuProps}
            >
              {BMDefectsData.map((item, index) => (
                <MenuItem key={index} value={{ id: item.value, text: item.text }}>
                  <Checkbox
                    checked={
                      defect.findIndex((selectedValue) => selectedValue.id === item.value) > -1
                    }
                  />
                  <ListItemText primary={item.text} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      ) : null}
    </div>
  );
}

