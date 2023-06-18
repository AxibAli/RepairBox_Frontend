import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


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
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>


      <Row >
        
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <p>Device warranty status</p>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        // label="Check this switch"
      />
       <p style={{fontSize:'12px'}}>This option will set device has warranty or not.</p>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default Information;