import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavbarText, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

import AuthenticationService from '../Services/AuthenticationService';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);

    this.state = {
      showUser: false,
      showAdmin: false,
      username: undefined,
      login: false
    };
  }

  componentDidMount() {
    const user = AuthenticationService.getCurrentUser();

    if (user) {
      const roles = [];

      user.authorities.forEach(authority => {
        roles.push(authority.authority)
      });
  
      this.setState({
        showUser: true,
        showAdmin: roles.includes("ROLE_ADMIN"),
        login: true,
        username: user.username
      });
    }
  }

  signOut = () => {
    AuthenticationService.signOut();
    this.props.history.push('/home');
    window.location.reload();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <div style={{marginBottom:"50px",width:"100% !important"}}>
      <Navbar color="primary" light expand="md">
      <NavbarBrand tag={Link} to="/login">WMP</NavbarBrand>
      <Nav className="mr-auto">
        {/* <NavLink href="/home">Home</NavLink> */}
        {this.state.showUser && <NavLink href="/addInfo">Add Water Information</NavLink>}
        {this.state.showUser && <NavLink href="/getWaterInfo/{id}">Your Water Information</NavLink>}
        {this.state.showUser && <NavLink href="/addFeedback">Feedback</NavLink>}
        {this.state.showUser && <NavLink href="/getFeedback">Your Feedbacks</NavLink>}
        
        {this.state.showAdmin && <NavLink href="/admin">All Water Information</NavLink>}
        {this.state.showAdmin && <NavLink href="/admin/feedback">All Feedback</NavLink>}
        {this.state.showAdmin && <NavLink href="/admin/feedback/{id}">Search Feedback</NavLink>}
      </Nav>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        {
          this.state.login ? (
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavbarText>
                    Signed in as: <a href="/profile">{this.state.username}</a>
                  </NavbarText>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.signOut}>SignOut</NavLink>
              </NavItem>
            </Nav>                 
          ) : (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Register</NavLink>
              </NavItem>
            </Nav>
          )
        }
      </Collapse>
    </Navbar>;
    </div>
  }
}

export default withRouter(NavBar);

// import React, { Component, Fragment } from 'react';
// import {Link} from "react-router-dom";
// import { Container } from 'reactstrap';
// import tap from '../images/tap.jfif';
// import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

// function NavBar(){
// return (
//     <Fragment>
//         <div style={{marginBottom:"50px",width:"100% !important"}}>
//     <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
//     <Navbar.Brand href="#home">WMP</Navbar.Brand>
//     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//     <Navbar.Collapse id="responsive-navbar-nav">
//       <Nav className="mr-auto">
//         <Nav.Link href="/login">Login</Nav.Link>
//         <Nav.Link href="/signup">Signup</Nav.Link>
//         <NavDropdown title="Water Info" id="collasible-nav-dropdown">
//           <NavDropdown.Item href="/addInfo">Add Water Info</NavDropdown.Item>
//           {/*  */}
//           <NavDropdown.Item href="/GetWaterInfo/:id">Update Water Info</NavDropdown.Item>
//         </NavDropdown>
        
//         {/* Admin Section Checking */}
//         <NavDropdown title="Admin" id="collasible-nav-dropdown">
//           <NavDropdown.Item href="/admin">All Water Info</NavDropdown.Item>
//           <NavDropdown.Item href="/admin/feedback">All Feedback</NavDropdown.Item>
//           <NavDropdown.Item href="/admin/feedback/:id">Feedback by Id</NavDropdown.Item>
//         </NavDropdown>

//       </Nav>


//       <Nav>
//         <Nav.Link href="/AddFeedback">Add Feedback</Nav.Link>
//         <Nav.Link href="/GetFeedback">Get Feedback</Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
//   </div>
// </Fragment>
// )
// }
// export default NavBar;



// // import React, { Component } from 'react';
// // import { Container, Row, Col } from 'reactstrap';
// // import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


// // class NavBar extends Component {
// //   render() {
// //     return (
// //       <Container>
// //         <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
// //           <Navbar.Brand href="#home">WMP</Navbar.Brand>
// //           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// //           <Navbar.Collapse id="responsive-navbar-nav">
// //             <Nav className="mr-auto">
// //               <Nav.Link href="#features">Login</Nav.Link>
// //               <Nav.Link href="#pricing">Register</Nav.Link>
// //               <NavDropdown title="Water Info" id="collasible-nav-dropdown">
// //                 <NavDropdown.Item href="#action/3.1">Add Water Info</NavDropdown.Item>
// //                 <NavDropdown.Item href="#action/3.2">Update Water Info</NavDropdown.Item>
// //               </NavDropdown>
// //             </Nav>
// //             <Nav>
// //               <Nav.Link href="#deets">Feedback</Nav.Link>
// //             </Nav>
// //           </Navbar.Collapse>
// //         </Navbar>

// //         <Row>
// //           <Col>
// //             <Header />
// //           </Col>
// //         </Row>

// //         <Row>
// //           <Col md={4}>
// //             <Register />
// //           </Col>
// //         </Row>

// //         <Row>
// //           <Col>
// //             <Footer />
// //           </Col>
// //         </Row>
// //       </Container>
// //     );
// //   }
// // }

// // export default NavBar;