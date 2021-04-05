import React, { Component } from 'react';
import {Form,Row,FormGroup, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavbarText, NavItem, NavLink } from 'reactstrap';
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
       
        {this.state.showUser && <NavLink href="/addInfo" style={{color: 'black'}} >Add Water Information</NavLink>}
      
        {this.state.showUser && <NavLink href="/getWaterInfo/{id}" style={{color: 'black'}}>Your Water Information</NavLink>}
        {this.state.showUser && <NavLink href="/addFeedback" style={{color: 'black'}}>Feedback</NavLink>}
        {this.state.showUser && <NavLink href="/getFeedback" style={{color: 'black'}}>Your Feedbacks</NavLink>}
        
        {this.state.showAdmin && <NavLink href="/admin" style={{color: 'black'}}>All Water Information</NavLink>}
        {this.state.showAdmin && <NavLink href="/admin/feedback" style={{color: 'black'}}>All Feedback</NavLink>}
        {this.state.showAdmin && <NavLink href="/admin/feedback/{id}" style={{color: 'black'}}>Search Feedback</NavLink>}
      </Nav>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        {
          this.state.login ? (
            <Nav className="ml-auto" navbar>
              <NavItem>
              <Form>
              <FormGroup as={Row} controlId="formHorizontalUsername">
                        <Form.Label>UserID</Form.Label>
                        <Form.Control type="text" placeholder="Username" value={this.state.username} disabled/>
                        
            </FormGroup>
            </Form>
                  {/* <NavbarText>
                    Signed in as: <a href="/profile">{this.state.username}</a>
                  </NavbarText> */}
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
