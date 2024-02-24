// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import i from '../../node_modules/bootstrap-icons'
// function Footerblank() {
//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home"><i className="bi bi-airplane-engines-fill"></i>Air-Ports</Navbar.Brand>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Footerblank;



// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import { BiAirplaneEnginesFill } from 'react-icons/bi';

// function Footerblank() {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">
//             <BiAirplaneEnginesFill /> Air-Ports {/* Using the icon component */}
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Footerblank;


import { Container, Navbar } from 'react-bootstrap';
import { AirplaneEnginesFill } from 'react-bootstrap-icons';

function Footerblank() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <AirplaneEnginesFill  style={{ marginRight: '5px' }} /> Air_Ports 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Footerblank;


