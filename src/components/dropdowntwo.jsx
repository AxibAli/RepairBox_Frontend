import  React,{useEffect} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import {Checkbox,Box} from '@mui/material';
import axios from "axios";




export default function Basic() {
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
        const response = await axios.get("http://18.221.148.248:84/api/v1/Brand/GetModelDefectsforDropdown");
        console.log(response.data.data);
  
        SetshowData(response.data.data);
      } catch (err) {
        console.log(err)
      }
    }
    console.log(showData, "showData")
    // const handleChange = (event) => {
    //     setAge(event.target.value);
    //     // console.log(event)
    //     const {
    //       target: { value },
    //     } = event;
    //     setAge(
    //       // On autofill we get a stringified value.
    //       typeof value === 'string' ? value.split(',') : value,
    //       // console.log(value,"value"),
    //       setnew_value(value)
          
    //     );
    //   };
    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
      ];
    const [issueName, setissueName] = React.useState([]);


    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setissueName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    return (
        <Box sx={{marginTop:'30px', paddingLeft:'100px',width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'justify', fontFamily: 'sans-serif', fontSize: '14px', color: '#4B5563'}}>
            <Box sx={{ width: '30%' }} ><h4  className="DropSelect">Select Repairable Issues</h4>
                <p>Available services/defect for selected device.</p>
            </Box>
            {/* <FormControl  fullWidth>
                <InputLabel id="demo-simple-select-label">Device</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl> */}
            <FormControl sx={{ width: "70%",  marginRight:30 }}>
        <InputLabel id="demo-multiple-checkbox-label">Issues</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={issueName}
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
