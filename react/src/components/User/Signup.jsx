import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button ,Alert} from 'reactstrap';
import image from '../../images/water.jfif'
import { isEmail } from 'validator';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';


import Navbar from '../NavBar';

import UserServices from '../../Services/UserServices'


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

//        this.state = this.getInitialState();

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

    // getInitialState = () => ({
    //     data: {
    //         firstName: '',
    //         lastName: '',
    //         userid: '',
    //         password: '',
    //         email: '',
    //         mobileno: ''
    //     },
    //     errors: {}
    // });

    // componentDidMount(){
    //     UserServices.createUser(this.state.userid).then( (res) =>{
    //         let UserTable = res.data;
    //         this.setState({
            
    //             userid : UserTable.userid, 
    //             firstName : UserTable.firstName,
    //             lastName : UserTable.lastName,
    //             password : UserTable.password,
    //             email : UserTable.email,
    //             mobileno : UserTable.mobileno,
    //         });
    //     });
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         data: {
    //             ...this.state.data,
    //             [e.target.name]: e.target.value
    //         },
    //         errors: {
    //             ...this.state.errors,
    //             [e.target.name]: ''
    //         }
    //     });
    // }

    // validate = () => {
    //     const { data } = this.state;
    //     let errors = {};

    //     if (data.firstName === '') errors.firstName = 'First Name can not be blank.';
    //     if (data.lastName === '') errors.lastName = 'Last Name can not be blank.';
    //     if (data.userid === '') errors.userid = 'UserID can not be blank.';
    //     if (!isEmail(data.email)) errors.email = 'Email must be valid.';
    //     if (data.email === '') errors.email = 'Email can not be blank.';
    //     if (data.password === '') errors.password = 'Password must be valid.';
    //     if (data.mobileno === '') errors.mobileno = 'Mobileno can not be blank.';

    //     return errors;
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     const { data } = this.state;

    //     const errors = this.validate();

    //     if (Object.keys(errors).length === 0) {
    //         console.log(data);
    //         //Call an api here
            
    //         //Resetting the form
    //         this.setState(this.getInitialState());
    //     } else {
    //         this.setState({ errors });
    //     }
    // }

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
              value.length < 10
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
            this.state.mobileno,
            this.state.password
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

    // render() {
    //     const { data, errors } = this.state;
    //     return (

    //         <Container>
    //         <Row >
    //             <Col >
    //                 <Button className="bg-primary" block><h3>Signup</h3></Button>
    //             </Col>
    //             <Col sm={4}></Col>
    //             <Col></Col>
    //         </Row>
    //         <br></br>
    //         <Row>
    //             <Col sm={8}>
    //                 <Form onSubmit={this.handleSubmit}>
    //                             <br></br>
    //                             <FormGroup as row>
    //                                 <Col sm={2}><Label for="firstName">First Name</Label></Col>
    //                                 <Col sm={10}><Input id="firstName" value={data.firstName} invalid={errors.firstName ? true : false} name="firstName" onChange={this.handleChange} /></Col>
    //                                 <FormFeedback>{errors.firstName}</FormFeedback>
    //                             </FormGroup>

    //                             <FormGroup as row>
    //                                 <Col sm={2}><Label for="lastName">Last Name</Label></Col>
    //                                 <Col sm={10}><Input id="lastName" value={data.lastName} invalid={errors.lastName ? true : false} name="lastName" onChange={this.handleChange} /> </Col>
    //                                 <FormFeedback>{errors.lastName}</FormFeedback>
    //                             </FormGroup>

    //                             <FormGroup as row>
    //                             <Col sm={2}><Label for="userid">UserID</Label></Col>
    //                                 <Col sm={10}><Input id="userid" value={data.userid} invalid={errors.userid ? true : false} name="userid" onChange={this.handleChange} /> </Col>
    //                                 <FormFeedback>{errors.userid}</FormFeedback>
    //                             </FormGroup>

    //                             <FormGroup as row >
    //                             <Col sm={2}><Label for="password">Password</Label></Col>
    //                                 <Col sm={10}><Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} /> </Col>
    //                                 <FormFeedback>{errors.password}</FormFeedback>
    //                             </FormGroup>

    //                             <FormGroup as row >
    //                             <Col sm={2}><Label for="email">Email</Label></Col>
    //                                 <Col sm={10}><Input id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange} /> </Col>
    //                                 <FormFeedback>{errors.email}</FormFeedback>
    //                             </FormGroup>

    //                             <FormGroup as row>
    //                             <Col sm={2}><Label for="mobileno">Mobileno</Label> </Col>
    //                                 <Col sm={10}> <Input id="mobileno" value={data.mobileno} name="mobileno" invalid={errors.mobileno ? true : false} onChange={this.handleChange} /> </Col>
    //                                 <FormFeedback>{errors.mobileno}</FormFeedback>
    //                             </FormGroup>

    //                             <Button color="primary">Register</Button>
    //                     </Form>
    //             </Col>
    //             <Col sm={4} >
    //                 <img src={image} alt="water"/>
    //             </Col>
    //         </Row>
    //      </Container>

    //     );
    // }

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
              <Col sm="12" md={{ size: 4, offset: 4 }}>
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
              </Row>
            </Container>
          </div>);
      }

}

export default Register;