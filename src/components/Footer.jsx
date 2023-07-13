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
        <p>Copyright © {new Date().getFullYear()} All rights reserved. Start.ly</p>
      </Row>
    </div>

  );
}

export default Footer;
// =======================second=========
// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import '../App.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row>
//           <Col md={4}>
//             <div className="footer-section">
//               <h3 className="footer-heading">START.LY</h3>
//               <p>Start.ly is a SASS software landing page template.</p>
//               <a href="#" className="footer-link">Purchase Now</a>
//             </div>
//           </Col>
//           <Col md={3}>
//             <div className="footer-section">
//               <h3 className="footer-heading">Quick Links</h3>
//               <ul className="footer-menu">
//                 <li><a href="#">Portfolio</a></li>
//                 <li><a href="#">About Us</a></li>
//                 <li><a href="#">Services</a></li>
//                 <li><a href="#">Contact</a></li>
//               </ul>
//             </div>
//           </Col>
//           <Col md={3}>
//             <div className="footer-section">
//               <h3 className="footer-heading">Legal</h3>
//               <ul className="footer-menu">
//                 <li><a href="#">Terms</a></li>
//                 <li><a href="#">Privacy</a></li>
//               </ul>
//             </div>
//           </Col>
//           <Col md={2}>
//             <div className="footer-section">
//               <h3 className="footer-heading">Social</h3>
//               <ul className="footer-menu">
//                 <li><a href="#">Facebook</a></li>
//                 <li><a href="#">Twitter</a></li>
//                 <li><a href="#">LinkedIn</a></li>
//               </ul>
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <div className="footer-bottom">
//               <p className="footer-text">© 2023 All rights reserved. Start.ly</p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;

