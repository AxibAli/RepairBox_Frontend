import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import '../App.css'

function Priority() {
  
  return (
    <Container >
    <Stack className='PriorityCss' direction="horizontal" gap={3}>
      <div className="p-2"><input  type="radio" name="myRadio"/></div>
      <div className="p-2 ">Urgent</div>
      <div className="p-2 ms-auto">$0.00</div>
    </Stack>
    <Stack className='PriorityCss' direction="horizontal" gap={3}>
      <div className="p-2"> <input  type="radio" name="myRadio"/></div>
      <div className="p-2 ">Low</div>
      <div className="p-2 ms-auto">$1.00</div>
    </Stack>
    <Stack className='PriorityCss' direction="horizontal" gap={3}>
      <div className="p-2"> <input  type="radio" name="myRadio"/></div>
      <div className="p-2 ">Medium</div>
      <div className="p-2 ms-auto">$2.00</div>
    </Stack>
    <Stack className='PriorityCss' direction="horizontal" gap={3}>
      <div className="p-2"> <input  type="radio" name="myRadio"/></div>
      <div className="p-2 ">High</div>
      <div className="p-2 ms-auto">$3.00</div>
    </Stack>
    </Container>
  );
}

export default Priority;