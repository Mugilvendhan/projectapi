import { AirplaneEnginesFill } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavTitle() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
          <AirplaneEnginesFill  style={{ marginRight: '5px' }} /> Air_Ports 
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  );
}

export default NavTitle;