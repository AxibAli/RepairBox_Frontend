import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



function Information() {
  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email Address" />
          </Form.Group>



        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Phone" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Serail number</Form.Label>
            <Form.Control type="tel" placeholder="Serail number" />
          </Form.Group>

        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Home Address</Form.Label>
          <Form.Control placeholder="Home Address" />
        </Form.Group>





        <Row >
          <Form.Label>Diagnostics</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" >
            <Form.Control
              as="textarea"
              // placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
        </Row>
        <Row>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <p>Device warranty status</p>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
            // label="Check this switch"
            />
            <p style={{ fontSize: '12px' }}>This option will set device has warranty or not.</p>
          </Form.Group>
        </Row>
        <Row  style={{float:'right',marginBottom:20}}>
          <div>
            <h2> <strong>Subtotal</strong> <span>: $49.00</span> </h2> 
            <h2> <strong>Priority Process Charges </strong> <span>:$5.00 </span> </h2>
            <h2> <strong>Tax </strong> <span> : $9.18</span> </h2>
            <h2> <strong>Total Amount</strong> <span> : $54.00</span> </h2>
          </div>
        </Row>
        <Row  style={{float:'center',marginBottom:20}}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <span style={{fontSize:'14px',backgroundColor:'#d1d5db',padding:10,border:'1px solid grey',borderRadius:10}}> <input
            type="radio"
            name="myRadio"
            
          />Cash on delivery</span>
          </div>
          <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#fca5a5',border:'1px solid grey',borderRadius:10,marginLeft:'200px',marginTop:10,height:150,width:'700px'}}>
            <div style={{fontSize:'12px',padding:'10px',}}>
            <p> <b>Warning: This is the demo Mode (Stripe/Braintree Sandbox)</b></p> 
            <p>Card Number : 4111 1111 1111 1111</p>
            <p>Expiration Date : 05/29</p>
            <p>CVV : 258</p>
            <p>Don't use your original card data while the demo mode ,use only above information or click here for braintree and here for stripe to see full list of available test cards with different scenarios.</p>
            </div>
          </div>
        </Row>
{/* 
        <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
    </Container>
  );
}

export default Information;