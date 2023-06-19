import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import '../App.css';
import Information from './Information';

function Priority() {
  const [selectedPriority, setSelectedPriority] = useState("$0.00");

  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  return (
    <Container>
      <h2>Select Priority</h2>
      <p>Repair processing priority.</p>
      <Stack className='PriorityCss' direction="horizontal" gap={3}>
        <div className="p-2">
          <input
            type="radio"
            name="myRadio"
            value="$0.00"
            onChange={handlePriorityChange}
          />
        </div>
        <div className="p-2">Urgent</div>
        <div className="p-2 ms-auto">$0.00</div>
      </Stack>
      <Stack className='PriorityCss' direction="horizontal" gap={3}>
        <div className="p-2">
          <input
            type="radio"
            name="myRadio"
            value="$1.00"
            onChange={handlePriorityChange}
          />
        </div>
        <div className="p-2">Low</div>
        <div className="p-2 ms-auto">$1.00</div>
      </Stack>
      <Stack className='PriorityCss' direction="horizontal" gap={3}>
        <div className="p-2">
          <input
            type="radio"
            name="myRadio"
            value="$2.00"
            onChange={handlePriorityChange}
          />
        </div>
        <div className="p-2">Medium</div>
        <div className="p-2 ms-auto">$2.00</div>
      </Stack>
      <Stack className='PriorityCss' direction="horizontal" gap={3}>
        <div className="p-2">
          <input
            type="radio"
            name="myRadio"
            value="$5.00"
            onChange={handlePriorityChange}
          />
        </div>
        <div className="p-2">High</div>
        <div className="p-2 ms-auto">$5.00</div>
      </Stack>
       {console.log(selectedPriority)}
    </Container>
  );
}

export default Priority;
