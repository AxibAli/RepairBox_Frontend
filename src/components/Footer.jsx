import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    
      <Row style={{backgroundColor:'#111827'}}>
        <Col>
        <div >
        <h1 style={{fontWeight:600,fontSize:'48px', color:'#fff',paddingLeft:50,paddingTop:50,}}>Repair Box</h1>
        <p style={{fontWeight:400,fontSize:'20px', color:'#fff',paddingLeft:50,paddingTop:5,}}>4466 Scheuvront Drive Centennial, CO 80112</p>
       <br/>
        <p  style={{fontWeight:400,fontSize:'20px', color:'#fff',paddingLeft:50,paddingTop:5,}}>Got Question? Call us 24/7</p>
        <p  style={{fontWeight:400,fontSize:'20px', color:'#fff',paddingLeft:50,paddingTop:5,}}>7866718114</p>
        </div>
        </Col>
        <Col>
        <div style={{float:'right',paddingRight:20}}>
        <br/>
        <br/>
        <p style={{fontWeight:600,fontSize:'16px', color:'#fff',paddingLeft:50,paddingTop:5,}}>USEFUL LINKS</p>
       <br/>
        <p  style={{fontWeight:600,fontSize:'16px', color:'#fff',paddingLeft:50,paddingTop:5,}}>Terms and conditions</p>
        <p  style={{fontWeight:600,fontSize:'16px', color:'#fff',paddingLeft:50,paddingTop:5,}}>Privacy policy</p>
        </div>
        
        </Col>
      </Row>
   
  );
}

export default Footer;