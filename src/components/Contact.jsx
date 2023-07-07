// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import * as React from 'react';
// import '../App.css'


// function Contact() {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <div style={{ marginTop: 250, color: '#69717c', }}>
//             <h2 style={{ fontSize: "30px", color: '#3e396b', lineHeight: '2.5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Start your free trial</h2>
//             <h3 style={{ fontSize: "15px", fontWeight: '400', color: '#3e396b', lineHeight: '0.5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Signup now. Its free and takes less than 3 minutes</h3>
//             <div>
//             <div style={{textAlign:'center'}} >
//       <input style={{width:'500px',height:50,padding:20,margin:10,marginTop:40,border:"1px solid grey",borderRadius:'200px'}}   name='Fullname' type="text" placeholder="Full NAME"  /> <br />
//       <input style={{width:'500px',height:50,padding:20,margin:5,border:"1px solid grey",borderRadius:'200px'}}   name='email' type="email" placeholder="Email Address"  /> <br />
//       <input style={{width:'500px',height:50,padding:20,margin:5,border:"1px solid grey",borderRadius:'200px'}}   name='password' type="password" placeholder="Password"  /> <br />
//       <button style={{width:'500px',color:'#fff',backgroundColor:'#7642ff',height:60,margin:5,border:"1px solid grey",borderRadius:'200px',fontSize:'18px',fontWeight:'500'}}>GET STARTED FOR FREE</button>
//        <br />
       
//         </div>
//             </div>
           

//           </div>



//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Contact;
// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function Contact() {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <div style={{ marginTop: '50px', color: '#69717c' }}>
//             <h2 style={{ fontSize: '3rem', color: '#3e396b', lineHeight: '2.5', textAlign: 'center' }}>Start your free trial</h2>
//             <h3 style={{ fontSize: '1.5rem', fontWeight: '400', color: '#3e396b', lineHeight: '1', textAlign: 'center' }}>Signup now. It's free and takes less than 3 minutes</h3>
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '40px' }}>
//               <input style={{ width: '100%', maxWidth: '500px', height: '50px', padding: '20px', margin: '5px', border: '1px solid grey', borderRadius: '200px' }} name='Fullname' type="text" placeholder="Full Name" /><br />
//               <input style={{ width: '100%', maxWidth: '500px', height: '50px', padding: '20px', margin: '5px', border: '1px solid grey', borderRadius: '200px' }} name='email' type="email" placeholder="Email Address" /><br />
//               <input style={{ width: '100%', maxWidth: '500px', height: '50px', padding: '20px', margin: '5px', border: '1px solid grey', borderRadius: '200px' }} name='password' type="password" placeholder="Password" /><br />
//               <button style={{ width: '100%', maxWidth: '500px', color: '#fff', backgroundColor: '#7642ff', height: '60px', margin: '5px', border: '1px solid grey', borderRadius: '200px', fontSize: '1.125rem', fontWeight: '500' }}>GET STARTED FOR FREE</button>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Contact;
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonClick = () => {
    console.log('Full Name:', fullname);
    console.log('Email Address:', email);
    console.log('Password:', password);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div style={{ marginTop: '50px', color: '#69717c' }}>
            <h2 id='StartFree' style={{ fontSize: '3rem', color: '#3e396b', lineHeight: '2.5', textAlign: 'center' }}>Get In Touch</h2>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '400', color: '#3e396b', lineHeight: '1', textAlign: 'center' }}>Let's Start a Conversation</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '40px' }}>
              <input
                style={{ width: '100%', maxWidth: '500px', height: '50px', padding: '20px', margin: '5px', border: '1px solid grey', borderRadius: '200px' }}
                name='Fullname'
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              /><br />
              <input
                style={{ width: '100%', maxWidth: '500px', height: '50px', padding: '20px', margin: '5px', border: '1px solid grey', borderRadius: '200px' }}
                name='email'
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /><br />
              <input
                style={{ width: '100%', maxWidth: '500px', padding: '20px', margin: '5px', border: '1px solid grey', borderRadius: '200px' }}
                name='password'
                type="text"
                placeholder="Your Message"
                cols="30" rows="10"
              /><br />
              <button style={{ width: '100%', maxWidth: '500px', color: '#fff', backgroundColor: '#7642ff', height: '60px', margin: '5px', border: '1px solid grey', borderRadius: '200px', fontSize: '1.125rem', fontWeight: '500' }}
                onClick={handleButtonClick}>Send Message</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

// import React, { useState } from 'react';
// import '../App.css';
// const ContactForm = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     if (name === 'fullName') {
//       setFullName(value);
//     } else if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'message') {
//       setMessage(value);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//     console.log({ fullName, email, message });
//     // Reset form fields
//     setFullName('');
//     setEmail('');
//     setMessage('');
//   };

//   return (
//     <div className="contact-form">
//       <h2 className='h2'>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label className='label' htmlFor="fullName">Full Name</label>
//           <input
//           className='input'
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={fullName}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label className='label' htmlFor="email">Email Address</label>
//           <input
//           className='input'
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label className='label' htmlFor="message">Message</label>
//           <textarea
//           className='textarea'
//             id="message"
//             name="message"
//             value={message}
//             onChange={handleInputChange}
//             required
//           ></textarea>
//         </div>
//         <button id='Button' type="submit">Submit</button>
//       </form>

      
//     </div>
//   );
// };

// export default ContactForm;
