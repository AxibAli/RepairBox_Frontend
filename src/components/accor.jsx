import React from 'react';
import Typography from '@mui/material/Typography';
import Accordion from 'react-bootstrap/Accordion';
import { Box } from '@mui/material';
import '../App.css'

function AllCollapseExample() {
  return (
    <div className="frequentheadindcss">
   
    <Box  >
<Typography variant="h4" sx={{ fontSize: '2rem', marginBottom: '1rem', '@media (max-width: 600px)': { fontSize: '1.5rem' } }}>
  Frequently Asked Questions
</Typography>
<Typography variant="body1" sx={{ color: 'grey', '@media (max-width: 600px)': { fontSize: '0.9rem' } }}>
  The most common questions about how our works.
</Typography>
</Box>
    
    <Box className='accordianmainbox'>
     
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How does it work?</Accordion.Header>
          <Accordion.Body>
            Our platform works with your content to provide insights and metrics on how you can grow your business and scale your infrastructure.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Do you offer team pricing?</Accordion.Header>
          <Accordion.Body>
            Yes, we do! Team pricing is available for any plan. You can take advantage of 30% off by signing up for team pricing with 10 users or more.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>How do I make changes and configure my site?</Accordion.Header>
          <Accordion.Body>
            You can easily change your site settings inside your site dashboard by clicking the top right menu and selecting the settings button.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>How do I add a custom domain?</Accordion.Header>
          <Accordion.Body>
            You can easily add a custom domain to your site by accessing the site settings in your dashboard and following the domain configuration instructions.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Box>
    </div>
  );
}

export default AllCollapseExample;
