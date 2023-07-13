import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState, useEffect } from 'react'
import axios from "axios";
import '../App.css'


function Information(props) {
  const[name,SetName]=useState()
  const[email,SetEmail]=useState()
  const[phone,SetPhone]=useState()
  const[serail,Setserail]=useState()
  const[address,SetAddress]=useState()
  const [warranty, SetWarranty] = useState(false)
  const[diagnostics,SetDiagnostics]=useState()
  // I am not sure about this -Furqan
  // 0-> Card Payment
  // 1-> Cash Payment
  const[payMethod, SetPayMethod] = useState(0)
  const[cardNumber,SetcardNumber]=useState("4111 1111 1111 1111")
  const[expiryMonth,SetexpiryMonth]=useState("05")
  const[expiryYear,SetexpiryYear]=useState("29")
  const[cardType,SetcardType]=useState("Test Card")
  const[cvv,Setcvv]=useState("258")

  const[amount, Setamount]=useState(0)
  const[priorityProcessCharges, SetpriorityProcessCharges]=useState(0)
  const[subTotal, SetsubTotal]=useState(0)
  const[tax, SetTax]=useState(0)

  const[DefectID, SetDefectID] = useState([])

    
  // Update the state with the extracted IDs
  useState(() => {
    const extractedIds = props.DefectCurr.map((item) => item.id);
    SetDefectID(extractedIds);
  }, []);

  console.log("Level 3:", DefectID);

  useEffect(() => {
    CalcAmount();
  }, [DefectID])
  
  useEffect(() => {
    if (props.Done) {
      CreateOrder();
    }
  },[props.Done])


  console.log("Test 1:" ,props.PriorityCurr)
  const CalcAmount = async () => {
    try {
      console.log("Test 2.1:" ,props.PriorityCurr)
      console.log("Test 2.2:" ,DefectID)
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/Order/CalculateOrderPrice`, 
        {
          defects: DefectID, 
          priorityId: props.PriorityCurr
        }
      );
      console.log(response.data.data);
      let AmountResponse = response.data.data;
      SetpriorityProcessCharges(AmountResponse.priorityProcessCharges)
      SetsubTotal(AmountResponse.subTotal)
      SetTax(AmountResponse.tax)
      Setamount(AmountResponse.totalAmount)
      
    } catch (err) {
      console.log(err)
    }
  }


  const CreateOrder = async () => {
    console.log("Create Order Function")
    // try {
    //   console.log("Test 2.1:" ,props.PriorityCurr)
    //   console.log("Test 2.2:" ,DefectID)
    //   const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/Order/CalculateOrderPrice`, 
    //     {
    //       defects: DefectID, 
    //       priorityId: props.PriorityCurr
    //     }
    //   );
    //   console.log(response.data.data);
    //   let AmountResponse = response.data.data;
    //   SetpriorityProcessCharges(AmountResponse.priorityProcessCharges)
    //   SetsubTotal(AmountResponse.subTotal)
    //   SetTax(AmountResponse.tax)
    //   Setamount(AmountResponse.totalAmount)
      
    // } catch (err) {
    //   console.log(err)
    // }
  }

  const handleName=(event)=>{
    SetName(event.target.value)
  }
  console.log("Name",name);
 
  const handleEmail=(event)=>{
    SetEmail(event.target.value)
  }
  console.log("Email",email);
  
  const handlePhone=(event)=>{
    SetPhone(event.target.value)
  }
  console.log("Phone",phone);

  const handleSerial=(event)=>{
    Setserail(event.target.value)
  }
  console.log("Serial",serail);

  const handleAddress=(event)=>{
    SetAddress(event.target.value)
  }
  console.log("address",address);

  const handleWarranty=(event)=>{
    SetWarranty(!warranty)
  }
  console.log("warranty",warranty);

  const handleDiagnostics=(event)=>{
    SetDiagnostics(event.target.value)
  }
  console.log("diagnostics",diagnostics);

  const handlePayMethod=(event)=>{
    SetPayMethod(1)
  }
  console.log("payMethod",payMethod);

  console.log("Level 3: ", props.DefectCurr)
  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" onChange={handleName} value={name} placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" onChange={handleEmail} value={email} placeholder="Enter Email Address" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" onChange={handlePhone} value={phone} placeholder="Phone" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Serail number</Form.Label>
            <Form.Control type="tel" onChange={handleSerial} value={serail} placeholder="Serail number" />
          </Form.Group>

        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Home Address</Form.Label>
          <Form.Control onChange={handleAddress} value={address} placeholder="Home Address" />
        </Form.Group>





        <Row >
          <Form.Label>Diagnostics</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" >
            <Form.Control
              as="textarea"
              onChange={handleDiagnostics} 
              value={diagnostics}
              placeholder="Leave a comment here"
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
              onChange={handleWarranty} 
            // label="Check this switch"
            />
            <p style={{ fontSize: '12px' }}>This option will set device has warranty or not.</p>
          </Form.Group>
        </Row>
        <Row  style={{float:'right',marginBottom:20}}>
          <div>
            <h2> <strong>Subtotal</strong> <span>: ${subTotal}</span> </h2> 
            <h2> <strong>Priority Process Charges </strong> <span>:${priorityProcessCharges} </span> </h2>
            <h2> <strong>Tax </strong> <span> : ${tax}</span> </h2>
            <h2> <strong>Total Amount</strong> <span> : ${amount}</span> </h2>
          </div>
        </Row>
        <Row className='cash-delivery' >
         
         <span className='Cash-section'> 
         <input type="radio" name="myRadio"onChange={handlePayMethod}/>Cash on delivery</span>
          
          </Row>
          <Row className='Warning-section-row'>
           
            <p> <b>Warning: This is the demo Mode (Stripe/Braintree Sandbox)</b></p> 
            <p>Card Number : 4111 1111 1111 1111</p>
            <p>Expiration Date : 05/29</p>
            <p>CVV : 258</p>
            <p>Don't use your original card data while the demo mode ,use only above information or click here for braintree and here for stripe to see full list of available test cards with different scenarios.</p>
           
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