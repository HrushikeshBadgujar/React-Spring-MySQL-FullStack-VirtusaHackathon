import React, { Component } from 'react';
import image from '../../images/water.jfif'
import { Form, Input, Label, FormGroup, FormFeedback, Button, Alert } from 'reactstrap';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

import Navbar from '../NavBar';

import AuthenticationService from "../../Services/AuthenticationService";

import UserServices from '../../Services/UserServices'
class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            error: ""
          };
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
    
      doLogin = async (event) => {
        event.preventDefault();
    
        AuthenticationService
            .signin(this.state.username, 
                      this.state.password)
          .then(
            () => {
              this.props.history.push('/profile');
            },
            error => {
              console.log("Login fail: error = { " + error.toString() + " }");
              this.setState({error: "Can not signin successfully ! Please check username/password again"});
            }
        );
      }


    render() {
        return ( 
          <div>
            <Navbar/>
            <Container fluid>
              <Row style={{marginTop:"20px"}}>
              <Col sm="4"></Col>
              <Col sm="4">
                
                <Form onSubmit={this.doLogin}>
                  <FormGroup>
                    <Label for="username"><strong>Username</strong></Label>
                    <Input autoFocus 
                      type="text"
                      name="username" id="username"
                      value={this.state.username}
                      placeholder="Enter Username"
                      autoComplete="username"
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
    
                  <FormGroup>
                    <Label for="password"><strong>Password</strong></Label>
                    <Input type="password" 
                      name="password" id="password"
                      value={this.state.password}
                      placeholder="Enter Password"
                      autoComplete="password"
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
    
                  <Button type="submit" variant="primary" size="lg" block>
                    Log In
                  </Button>
                  {
                    this.state.error && (
                      <Alert color="danger">
                        {this.state.error}
                      </Alert>
                    )
                  }
                </Form>
                </Col>
                <Col sm={4}></Col>
              </Row>
            </Container>
          </div>);
         }
}

export default Login;