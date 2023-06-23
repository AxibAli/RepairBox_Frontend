import React, { useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import '../App.css';
import Information from './Information';
import axios from "axios";

function Priority({ setSelectedPriority }) {


  const [showData, SetshowData] = React.useState([]);
  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };
  useEffect(() => {
    FetchApiData();
  }, [])
  const FetchApiData = async () => {
    try {
      const response = await axios.get("http://18.221.148.248:84/api/v1/Order/GetPriorities");

      SetshowData(response.data.data);


    } catch (err) {
      console.log(err)
    }
  }
  console.log(showData, "showData")
  return (
    <Container>
      <h2>Select Priority</h2>
      <p>Repair processing priority.</p>
      {showData && showData.map((item, value) => (

        <Stack className='PriorityCss' direction="horizontal" gap={3}>
          <div className="p-2">
            <input
              type="radio"
              name="myRadio"
              // value={id}
              key={value}
              onChange={handlePriorityChange}
            />
          </div>
          <div className="p-2">{item.name}</div>
          <div className="p-2 ms-auto">${item.processCharges}</div>
        </Stack>
      ))}
    </Container>
  );
}

export default Priority;
