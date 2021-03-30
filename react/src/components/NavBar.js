import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import { Container } from 'reactstrap';
import tap from '../images/tap.jfif';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

function NavBar(){
return (
    <Fragment>
        <div style={{marginBottom:"50px",width:"100% !important"}}>
    <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
    <Navbar.Brand href="#home">WMP</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Login</Nav.Link>
        <Nav.Link href="/Signup">Register</Nav.Link>
        <NavDropdown title="Water Info" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/AddWaterInfo">Add Water Info</NavDropdown.Item>
          <NavDropdown.Item href="/GetWaterInfo">Update Water Info</NavDropdown.Item>
        </NavDropdown>
        
        {/* Admin Section Checking */}
        <NavDropdown title="Admin" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/GetAllWaterInfo">All Water Info</NavDropdown.Item>
          <NavDropdown.Item href="/GetAllFeedback">All Feedback</NavDropdown.Item>
          <NavDropdown.Item href="/GetFeedbackId">Feedback by Id</NavDropdown.Item>
        </NavDropdown>

      </Nav>


      <Nav>
        <Nav.Link href="/AddFeedback">Add Feedback</Nav.Link>
        <Nav.Link href="/GetFeedback">Get Feedback</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
</Fragment>
)
}
export default NavBar;



// import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


// class NavBar extends Component {
//   render() {
//     return (
//       <Container>
//         <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
//           <Navbar.Brand href="#home">WMP</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="mr-auto">
//               <Nav.Link href="#features">Login</Nav.Link>
//               <Nav.Link href="#pricing">Register</Nav.Link>
//               <NavDropdown title="Water Info" id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Add Water Info</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">Update Water Info</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Nav>
//               <Nav.Link href="#deets">Feedback</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>

//         <Row>
//           <Col>
//             <Header />
//           </Col>
//         </Row>

//         <Row>
//           <Col md={4}>
//             <Register />
//           </Col>
//         </Row>

//         <Row>
//           <Col>
//             <Footer />
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default NavBar;