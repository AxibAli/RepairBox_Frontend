import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import img1 from '../images/img1.jpg'
import Button from 'react-bootstrap/Button';
// import { Diversity1Outlined } from '@mui/icons-material';

function Contact() {
  return (
    <Container>
      <Row>
        <Col >
            <div style={{marginTop:250,textAlign:'center'}}>
        <h1  style={{lineheight: 1.25,fontWeight: 700,fontSize:'60px',color:'#000'}}>Contact Us</h1> 
        <p style={{fontWeight: 500,fontSize:'20px',color:'#000'}}>We do love to hear from you.</p>
        </div>
        <img style={{marginTop:100,marginBottom:20,paddingLeft:70,height:250,width:600,}} src={img1} />
        </Col>
        <Col>
        <div>
        <Form.Label style={{fontWeight: 700,marginTop:250,fontSize:20,color:'#69717c'}}>Full NAME</Form.Label>
      <Form.Control style={{backgroundColor:'#d1d5db'}} size="lg" type="email" placeholder="FULL NAME" />
      <Form.Label style={{fontWeight: 700,marginTop:30,fontSize:20,color:'#69717c'}}>EMAIL</Form.Label>
      <Form.Control style={{backgroundColor:'#d1d5db'}}  size="lg" type="text" placeholder="Email" />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label style={{fontWeight: 700,marginTop:30,fontSize:20,color:'#69717c'}}>MESSAGE</Form.Label>
        <Form.Control style={{backgroundColor:'#d1d5db'}}  as="textarea" rows={8} />
        <Form.Control  style={{fontWeight: 700,marginTop:30,fontSize:20,background:'#4338ca',color:'#fff'}} name='SEND MESSAGE' size="lg" type="Submit"  />
      </Form.Group>
      <br />
     
    </div>



            </Col>
      </Row>
    </Container>
  );
}

export default Contact;