import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Contact() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [massage, setmassage] = useState('');

  const handleButtonClick = () => {
    console.log('Full Name:', fullname);
    console.log('Email Address:', email);
    console.log('massage:', massage);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h2 className='contactformheading'>Get In Touch</h2>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '400', color: '#3e396b', lineHeight: '1', textAlign: 'center' }}>Let's Start a Conversation</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '40px' }}>
              <input className='contactforminputfields' name='Fullname' type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} /><br />
              <input className='contactforminputfields' name='email'type="email" placeholder="Email Address"value={email}onChange={(e) => setEmail(e.target.value)}/><br />
              <input className='contactforminputfields'  name='password'type="text"placeholder="Your Message"cols="30" rows="10"onChange={(e) => setmassage(e.target.value)}/><br />
              <button
               className='loginbtncontactform'
               onClick={handleButtonClick}>Send Message</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
