import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function MiddleSexction() {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  return (
    <Container >
      <Row style={{ height: "500px",backgroundColor:'#f9fafb',marginTop:100 }}>
        <Col style={{
          backgroundColor: 'white', margin: '50px 20px', textAlign: 'justify',
        }} sm={5}>
          <h1 style={{ fontSize: 50 }}>
            Services we love to provide
          </h1>
          <h5 style={{ fontSize: '16px', fontWeight: '400', color: 'grey', lineHeight: '2', textAlign: 'justify', alignItems: 'center' }}>
            we have been into the business and our clients cherish us for the promising that we convey them
          </h5>
          <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#6B7280', lineHeight: '2', textAlign: 'justify', alignItems: 'center' }}>
            We take care your data privacy
            We provide professional solutions
            Expert and qualified technician
            Professional repairing labs
            Trusted and reliable repairing
            Best quality hardware parts for replace
          </h4>
        </Col>




        <Col sm={3}>
          <Card sx={{ minWidth: 200, height: 300 ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',marginBottom:5 }}>
            <CardContent>
              <Box sx={{ backgroundColor: '#cabffd', height: 25, width: 25, borderRadius: 2, color: '#cabffd', marginBottom: 2 }}>s</Box>
              <h2 style={{ paddingBottom:"20px",textAlign: 'justify',fontSize:'24px',fontWeight:'bold' }}>
                Excellent services
              </h2>
              <p style={{fontSize:"18px", textAlign: 'justify', color: 'grey' }}>
                We promise to provide excellent repair services with multiple bands and the devices
              </p>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 200, height: 300, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
            <CardContent>
              <Box sx={{ backgroundColor: '#cabffd', height: 25, width: 25, borderRadius: 2, color: '#cabffd', marginBottom: 2 }}>s</Box>
              <h2 style={{ textAlign: 'justify',fontSize:'24px',fontWeight:'bold',paddingBottom:"20px", }}>
              Expert technical team
              </h2>
              <p style={{ fontSize:"18px",textAlign: 'justify', color: 'grey' }}>
              We have well trained and professional experts with relevant experience to fix your devices issues
              </p>
            </CardContent>
          </Card>
        </Col>
        <Col sm={3}>
        <Card sx={{ minWidth: 200,marginTop:15, height: 300 ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',marginBottom:5 }}>
            <CardContent>
              <Box sx={{ backgroundColor: '#cabffd', height: 25, width: 25, borderRadius: 2, color: '#cabffd', marginBottom: 2 }}>s</Box>
              <h2  style={{ paddingBottom:"20px",textAlign: 'justify',fontSize:'24px',fontWeight:'bold' }}>
              Track repair status
              </h2>
              <p  style={{ fontSize:"18px",textAlign: 'justify', color: 'grey' }}>
              Track your device repairing status with complete details at any time and from any place or even from your home
                  </p>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 200, height: 300, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
            <CardContent>
              <Box sx={{ backgroundColor: '#cabffd', height: 25, width: 25, borderRadius: 2, color: '#cabffd', marginBottom: 2 }}>s</Box>
              <h2  style={{ paddingBottom:"20px",textAlign: 'justify',fontSize:'24px',fontWeight:'bold' }}>
              Notifications
              </h2>
              <p style={{ fontSize:"18px",textAlign: 'justify', color: 'grey' }}>
              When does a technician update repair status the customer will be notified by email.
                </p>
            </CardContent>
          </Card>

        </Col>
      </Row>

    </Container>
  );
}
export default MiddleSexction;