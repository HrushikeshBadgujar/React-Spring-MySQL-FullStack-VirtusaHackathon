import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button ,Alert} from 'reactstrap';
import image from '../../images/water.jfif'
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';


import Navbar from '../NavBar';

import Authentication from "../../Services/AuthenticationService";
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Register extends Component {

    constructor(props) {
        super(props);

    this.state = {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        mobileno:"",
        password: "",
        message: "",
        successful: false,
        validForm: true,

        errors: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        mobileno:'',
        password: ''
        }
    };
}

    changeHandler = (event) => {
        const { name, value } = event.target;
      
        let errors = this.state.errors;
    
        switch (name) {
          case 'firstname':
            errors.firstname = 
              value.length < 3
                ? 'FirstName must be 3 characters long!'
                : '';
            break;
          case 'lastname':
            errors.lastname = 
              value.length < 3
                ? 'LastName must be 3 characters long!'
                : '';
            break;
          case 'username':
            errors.username = 
              value.length < 5
                ? 'Username must be 5 characters long!'
                : '';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
        case 'mobileno': 
            errors.mobileno = 
              value.length < 11
                ? ''
                : 'Mobile is not valid!';
            break;
          case 'password': 
            errors.password = 
              value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
            break;
          default:
            break;
        }
      
        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })  
      }
    
      signUp = (e) => {
        e.preventDefault();
        const valid = validateForm(this.state.errors);
        this.setState({validForm: valid});
        if(valid){
          Authentication.register(
            this.state.firstname,
            this.state.lastname,
            this.state.username,
            this.state.email,
            this.state.password,
            this.state.mobileno
          ).then(
            response => {
              this.setState({
                message: response.data.message,
                successful: true
              });
            },
            error => {
              console.log("Fail! Error = " + error.toString());
              
              this.setState({
                successful: false,
                message: error.toString()
              });
            }
          );  
        }
      }


    render() {
        const title = <h2>Register User</h2>;
        const errors = this.state.errors;
    
        let alert = "";
    
        if(this.state.message){
          if(this.state.successful){
            alert = (
                      <Alert variant="success">
                        {this.state.message}
                      </Alert>
                    );
          }else{
            alert = (
                      <Alert variant="danger">
                        {this.state.message}
                      </Alert>
                    );
          }
        }
    
        return ( 
          <div>
            <Navbar/>
            <Container fluid>
              <Row>
              <Col sm={4}></Col>
              <Col sm={4}>
              {title}
                <Form onSubmit={this.signUp}>
                  <FormGroup controlid="forFirstname">
                    <Label for="firstname">First Name</Label>
                    <Input
                      type="text" 
                      placeholder="Enter First Name"
                      name="firstname" id="firstname"
                      value={this.state.firstname}
                      autoComplete="firstname"
                      onChange={this.changeHandler}
                    />
                    {
                      errors.firstname && ( 
                          <Alert variant="danger">
                            {errors.firstname}
                          </Alert>
                        )
                    }
                  </FormGroup>
    
                  <FormGroup controlid="forLastname">
                    <Label for="lastname">Last Name</Label>
                    <Input
                      type="text" 
                      placeholder="Enter Last Name"
                      name="lastname" id="lastname"
                      value={this.state.lastname}
                      autoComplete="lastname"
                      onChange={this.changeHandler}
                    />
                    {
                      errors.lastname && ( 
                          <Alert variant="danger">
                            {errors.firstname}
                          </Alert>
                        )
                    }
                  </FormGroup>
    
                  <FormGroup controlid="forUsername">
                    <Label for="username">Username</Label>
                    <Input
                      type="text" 
                      placeholder="Enter UserName"
                      name="username" id="username"
                      value={this.state.username}
                      autoComplete="username"
                      onChange={this.changeHandler}
                    />
                    {
                      errors.username && ( 
                          <Alert variant="danger">
                            {errors.username}
                          </Alert>
                        )
                    }
                  </FormGroup>
    
                  <FormGroup controlid="formEmail">
                    <Label for="email">Email</Label>
                    <Input required
                      type="text" 
                      placeholder="Enter Email"
                      name="email" id="email"
                      value={this.state.email}
                      autoComplete="email"
                      onChange={this.changeHandler}
                    />
                    {
                      errors.email && ( 
                          <Alert variant="danger">
                            {errors.email}
                          </Alert>
                        )
                    }
                  </FormGroup>

                  
                  <FormGroup controlid="forMobileno">
                    <Label for="mobileno">Mobile No</Label>
                    <Input
                      type="text" 
                      placeholder="Enter Mobile No"
                      name="mobileno" id="mobileno"
                      value={this.state.mobileno}
                      autoComplete="mobileno"
                      onChange={this.changeHandler}
                    />
                    {
                      errors.mobileno && ( 
                          <Alert variant="danger">
                            {errors.mobileno}
                          </Alert>
                        )
                    }
                  </FormGroup>
    
                  <FormGroup controlid="formPassword">
                    <Label for="password">Password</Label>
                    <Input required 
                      type="password" 
                      placeholder="Enter Password"
                      name="password" id="password"
                      value={this.state.password}
                      autoComplete="password"
                      onChange={this.changeHandler}
                    />
                    {
                      errors.password && ( 
                          <Alert key="errorspassword" variant="danger">
                            {errors.password}
                          </Alert>
                        )
                    }
                  </FormGroup>
    
                  <Button variant="primary" type="submit">
                    Create
                  </Button>
                  {
                    !this.state.validForm && (
                      <Alert key="validForm" variant="danger">
                        Please check the inputs again!
                      </Alert>
                    )
                  }
    
                  {alert}
                </Form>
                </Col>
                <Col sm={4}></Col>
              </Row>
            </Container>
          </div>);
      }

}

export default Register;