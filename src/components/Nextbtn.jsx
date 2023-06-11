import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import Stepper from './step';

function Nextbtn(props) {
  return (
    <Navbar style={{backgroundColor:'#d1d5db',padding:15,width:'80%',marginLeft:100,marginTop:200,borderRadius:5}}>
      <Container>
      <Button style={{backgroundColor:'black',fontweight: 700,}}  variant="secondary" size="lg">
          PREVIOUS
        </Button>
      
        <Navbar.Collapse className="justify-content-end">
        <Button onClick={props.n} style={{backgroundColor:'black',fontweight: 700,}}   variant="secondary" size="lg">
          NEXT
        </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nextbtn;