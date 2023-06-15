import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as React from 'react';
import '../App.css'


function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <div style={{ marginTop: 250, color: '#69717c', }}>
            <h2 style={{ fontSize: "30px", color: '#3e396b', lineHeight: '2.5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Start your free trial</h2>
            <h3 style={{ fontSize: "15px", fontWeight: '400', color: '#3e396b', lineHeight: '0.5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Signup now. Its free and takes less than 3 minutes</h3>
            <div>
            <div style={{textAlign:'center'}} >
      <input style={{width:'500px',height:50,padding:20,margin:10,marginTop:40,border:"1px solid grey",borderRadius:'200px'}}   name='Fullname' type="text" placeholder="Full NAME"  /> <br />
      <input style={{width:'500px',height:50,padding:20,margin:5,border:"1px solid grey",borderRadius:'200px'}}   name='email' type="email" placeholder="Email Address"  /> <br />
      <input style={{width:'500px',height:50,padding:20,margin:5,border:"1px solid grey",borderRadius:'200px'}}   name='password' type="password" placeholder="Password"  /> <br />
      <button style={{width:'500px',color:'#fff',backgroundColor:'#7642ff',height:60,margin:5,border:"1px solid grey",borderRadius:'200px',fontSize:'18px',fontWeight:'500'}}>GET STARTED FOR FREE</button>
       <br />
       
        </div>
            </div>
           

          </div>



        </Col>
      </Row>
    </Container>
  );
}

export default Contact;