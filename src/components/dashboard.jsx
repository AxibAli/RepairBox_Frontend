import React from 'react'
import { useState, useEffect } from 'react'
import Select from "react-dropdown-select";
import AssignmentIcon from '@mui/icons-material/Assignment';

function Card(props){
  return(
    <div className='w-[250px] h-[70px] mt-[5px] pt-[10px] pl-[10px] rounded-[10px] bg-slate-100'>
      <p className='text-[15px]'>{props.title}</p>
      <p className='text-[18px] font-bold'>{props.content}</p>
    </div>
  )
}

export default function dashboard() {
  const [Amount, setAmount] = useState("$" + "874.00")
  const [Cost, setCost] = useState("$" + "491.00")
  const [Tax, setTax] = useState("$" + "148.58")
  const [Profit, setProfit] = useState("$" + "234.42")
  const [ROrders, setROrders] = useState(17)
  const [Brands, setBrands] = useState(10)
  const [Devices, setDevices] = useState(40)
  const [Defects, setDefects] = useState(270)

  const [valuesP, setValuesP] = useState() //Payment
  const [valuesS, setValuesS] = useState()  //Status
  const [valuesPr, setValuesPr] = useState() //Priority
  const [valuesT, setValuesT] = useState() //Technician

  const payment = [
    { 
      value: 1,
      label: "By payment"
    },
    {
      value:  2,
      label: "paid"
    },
    {
      value:  3,
      label: "unpaid"
    }
  ];

  const status = [
    { 
      value: 1,
      label: "By status"
    },
    {
      value:  2,
      label: "Open"
    },
    {
      value:  3,
      label: "Pending"
    },
    {
      value:  4,
      label: "Resolved"
    },
    {
      value:  5,
      label: "Closed"
    }
  ];

  const priority = [
    { 
      value: 1,
      label: "By priority"
    },
    {
      value:  2,
      label: "Low"
    },
    {
      value:  3,
      label: "Medium"
    },
    {
      value:  4,
      label: "High"
    },
    {
      value:  5,
      label: "Urgent"
    }
  ];

  const technician = [
    { 
      value: 1,
      label: "By technician"
    },
    {
      value:  2,
      label: "Rose Finch"
    },
    {
      value:  3,
      label: "Technician"
    }
  ];

  // Payment Dropdown function
  function handleChangeP(valuesP){
    console.log("Payment")
    console.log(valuesP)
    setValuesP(valuesP)
  }

  // Status Dropdown function
  function handleChangeS(valuesS){
    console.log("Status")
    console.log(valuesS)
    setValuesS(valuesS)
  }

  // Priority Dropdown function
  function handleChangePr(valuesPr){
    console.log("Priority")
    console.log(valuesPr)
    setValuesPr(valuesPr)
  }

  // Technician Dropdown function
  function handleChangeT(valuesT){
    console.log("Technician")
    console.log(valuesT)
    setValuesT(valuesT)
  }

  return (
    <div className='w-[1050px] h-[100%] flex flex-col justify-start items-center'>
      <div className='w-[1010px] h-[60px] mt-[20px] flex items-center justify-between'>
        <div class='w-[350px] h-[100%] flex items-center justify-normal'>
          <AssignmentIcon style={{ color: '#505050', fontSize: '40px' }}/>
          <p className='ml-[10px] text-[#505050] text-[30px] font-semibold'>DASHBOARD</p>
        </div>
        <div class='w-[550px] h-[100%] mr-[10px] flex items-center justify-end'>
          <Select 
            searchable={false}
            options={payment} 
            placeholder='By Payment' 
            style={{width:"150px", height:"40px", border:"1px solid #DDDDDD", outline:"none", borderRadius:"10px 0px 0px 10px" }} 
            onChange={handleChangeP} 
          />
          <Select 
            searchable={false}
            options={status} 
            placeholder='By Status' 
            style={{width:"120px", height:"40px", border:"1px solid #DDDDDD", outline:"none"}} 
            onChange={handleChangeS} 
          />
          <Select
            searchable={false} 
            options={priority} 
            placeholder='By Priority' 
            style={{width:"120px", height:"40px", border:"1px solid #DDDDDD", outline:"none" }} 
            onChange={handleChangePr} 
          />
          <Select 
            searchable={false}
            options={technician} 
            placeholder='By Technician'
            style={{width:"150px", height:"40px", border:"1px solid #DDDDDD", outline:"none", borderRadius:"0px 10px 10px 0px" }} 
            onChange={handleChangeT} 
          />
        </div>
      </div>

      <div className='w-[1050px] h-[auto] flex flex-col justify-start items-center'>
        <div className='w-[1050px] h-[170px] mt-[20px] pl-[15px] pr-[15px] flex justify-between items-center flex-wrap'>
          {/* <div className='w-[1050px] h-[auto] border-2 border-blue-300'>
                    
          </div> */}
          <Card title="AMOUNT" content={Amount}/>
          <Card title="COST" content={Cost}/>
          <Card title="TAX" content={Tax}/>
          <Card title="PROFIT" content={Profit}/>
          <Card title="REPAIR ORDERS" content={ROrders}/>
          <Card title="BRANDS" content={Brands}/>
          <Card title="DEVICES" content={Devices}/>
          <Card title="DEFECTS" content={Defects}/>
        </div>
        <div className='w-[100%] h-[500px] mt-[20px] bg-blue-100'>

        </div>
      </div>
    </div>
    
  )
}
