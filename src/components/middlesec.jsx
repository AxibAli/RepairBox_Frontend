import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import '../App.css'

function MiddleSection() {
  return (
    // <Container>
      <Row style={{  backgroundColor: '#f9fafb',paddingLeft:'30px',paddingTop:'30px' }}>
        <Col style={{ backgroundColor: '#f9fafb', fontWeight: 600, textAlign: 'center' }} sm={12} md={5}>
          <h1 style={{fontSize:'3rem'}}>Services we love to provide</h1>
          <h4 style={{ fontSize: '1rem',color: 'grey', lineHeight: '2', textAlign: 'justify', alignItems: 'center' }}>
            We have been in the business, and our clients cherish us for the promising service we deliver.
          </h4>
          <h4 style={{ fontSize: '1rem',  color: '#6B7280', lineHeight: '2', textAlign: 'justify', alignItems: 'center' }}>
            - We take care of your data privacy
            <br />
            - We provide professional solutions
            <br />
            - Expert and qualified technicians
            <br />
            - Professional repairing labs
            <br />
            - Trusted and reliable repairing services
            <br />
            - Best quality hardware parts for replacement
          </h4>
        </Col>

        <Col sm={12} md={3}>
          <Card className='middlesectioncards'>
            <CardContent>
              <Box sx={{ backgroundColor: '#cabffd', height: 25, width: 25, borderRadius: 2, color: '#cabffd', marginBottom: 2 }}>s</Box>
              <h2 style={{ paddingBottom: "20px", textAlign: 'justify', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Excellent services
              </h2>
              <p style={{ fontSize: "1rem", textAlign: 'justify', color: 'grey' }}>
                We promise to provide excellent repair services with multiple brands and devices.
              </p>
            </CardContent>
          </Card>
          <Card className='middlesectioncards'>
            <CardContent>
              <Box sx={{ backgroundColor: '#cabffd', height: 25, width: 25, borderRadius: 2, color: '#cabffd', marginBottom: 2 }}>s</Box>
              <h2 style={{ textAlign: 'justify', fontSize: '1.5rem', fontWeight: 'bold', paddingBottom: "20px" }}>
                Expert technical team
              </h2>
              <p style={{ fontSize: "1rem", textAlign: 'justify', color: 'grey' }}>
                We have well-trained and professional experts with relevant experience to fix issues with your devices.
              </p>
            </CardContent>
          </Card>
        </Col>

        <Col sm={12} md={3}>
          <Card className='middlesectioncards'>
            <CardContent>
              <Box sx={{ backgroundColor: '#cabffd', height: 25, width: 25, borderRadius: 2, color: '#cabffd', marginBottom: 2 }}>s</Box>
              <h2 style={{ paddingBottom: "20px", textAlign: 'justify', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Track repair status
              </h2>
              <p style={{ fontSize: "1rem", textAlign: 'justify', color: 'grey' }}>
                Track the status of your device repairs with complete details at any time and from any place, even from your home.
              </p>
            </CardContent>
          </Card>
          <Card className='middlesectioncards'>
            <CardContent>
              <Box sx={{ backgroundColor: '#cabffd', height: 25, width: 25, borderRadius: 2, color: '#cabffd', marginBottom: 2 }}>s</Box>
              <h2 style={{ paddingBottom: "20px", textAlign: 'justify', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Notifications
              </h2>
              <p style={{ fontSize: "1rem", textAlign: 'justify', color: 'grey' }}>
                Whenever a technician updates the repair status, the customer will be notified by email.
              </p>
            </CardContent>
          </Card>
        </Col>
      </Row>
    // </Container>
  );
}

export default MiddleSection;
