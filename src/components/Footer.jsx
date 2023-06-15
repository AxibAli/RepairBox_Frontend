import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

function Footer() {
  return (
    
  
    <div >
      <Row style={{ display: 'flex', flexWrap: 'wrap', color: 'grey', backgroundColor: '#f8faff', fontSize: '18px', fontWeight: 400,paddingLeft:100, padding: 50, marginTop: "50px" }}>
        <Col> <ul>
          <li style={{ fontSize: '26px', fontWeight: 400 }}><h3>START.LY</h3></li>
          <li>Start.ly is a SASS software landing page <br />  template.</li>
          <a> <li style={{ color: 'blue' }} className='Purchase'> Purchase Now  </li></a>
        </ul>  </Col>
        <Col>
          <ul>
            <li>Portfolio</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact</li>

          </ul>
        </Col>
        <Col>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>

          </ul>
        </Col>
        <Col> <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Linkedin</li>



        </ul></Col>
       
      </Row>
      <Row xs="auto" style={{ display: 'flex', color: 'grey', backgroundColor: '#f8faff', fontSize: '18px', fontWeight: 400, justifyContent: 'space-around', alignItems: 'center', paddingBottom: '50px', paddingTop: "50px" }}>
        <p>Copyright © 2023 All rights reserved. Start.ly</p>
      </Row>
    </div>

  );
}

export default Footer;