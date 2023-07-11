import React, { useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import '../App.css';
import Information from './Information';
import axios from "axios";

function Priority(props) {


  const [showData, SetshowData] = React.useState([]);

  const handlePriorityChange = (event) => {
    console.log("Priority: ", event.target.value)
    props.PS(event.target.value);
  };

  useEffect(() => {
    FetchApiData();
  }, [])
  const FetchApiData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/Order/GetPriorities`);

      SetshowData(response.data.data);


    } catch (err) {
      console.log(err)
    }
  }
  console.log(showData, "showData")
  return (
    <Container style={{
      paddingLeft: '10px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '30px',
      fontFamily: 'sans-serif',
      fontSize: '14px',
      fontWeight: 600,
      color: '#4B5563',
    }} >
      <h2 style={{ fontWeight: 800 }}>Select Priority</h2>
      <p style={{ fontWeight: 600 }}>Repair processing priority.</p>
      {showData && showData.map((item, value) => (

        <Stack className='PriorityCss' direction="horizontal" gap={3}>
          <div className="p-2">
            <input
              type="radio"
              name="myRadio"
              value={item.id}
              key={value}
              checked={props.PriorityCurr == item.id}
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
