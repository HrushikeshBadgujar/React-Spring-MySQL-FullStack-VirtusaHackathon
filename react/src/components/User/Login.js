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

    // getInitialState = () => ({
    //     data: {
    //         userid: '',
    //         password: ''
    //     },
    //     errors: {}
    // });

    // componentDidMount(){
    //     UserServices.checkUser(this.state.userid).then( (res) =>{
    //         let UserTable = res.data;
    //         this.setState({
            
    //             password : UserTable.password,
    //             email : UserTable.email,
    //         });
    //     });
    // }

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

    //     if (data.userid === '') errors.userid = 'UserID can not be blank.';
    //     if (data.password === '') errors.password = 'Password must be valid.';
       

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
    //  }

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
      
    // render() {
    //     const { data, errors } = this.state;
    //     return (

            
    //         <Container>
    //         <Row >
    //             <Col >
    //                 <Button className="bg-primary" block><h3>Login</h3></Button>
    //             </Col>
    //             <Col sm={4}></Col>
    //             <Col></Col>
    //         </Row>
    //         <br></br>
    //         <Row>
    //             <Col sm={8}>
    //                      <Form onSubmit={this.handleSubmit}>
    //                      <FormGroup as row>
    //                          <Col sm={2}><Label for="userid">Username</Label></Col>
    //                          <Col sm={10}><Input id="userid" value={data.userid} invalid={errors.userid ? true : false} name="userid" onChange={this.handleChange} /></Col>
    //                          <FormFeedback>{errors.userid}</FormFeedback>
    //                      </FormGroup>

    //                      <FormGroup as row>
    //                         <Col sm={2}><Label for="password">Password</Label></Col>
    //                         <Col sm={10}><Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} /></Col>
    //                          <FormFeedback>{errors.password}</FormFeedback>
    //                      </FormGroup>

    //                      <Button color="primary">login</Button>
    //                  </Form>
    //             </Col>
    //             <Col sm={4} >
    //                 <img src={image} alt="water"/>
    //             </Col>
    //         </Row>
    //      </Container>


    //     );
     }
}

export default Login;