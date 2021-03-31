import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import image from '../../images/water.jfif'
import { isEmail } from 'validator';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            firstName: '',
            lastName: '',
            userid: '',
            password: '',
            email: '',
            mobileno: ''
        },
        errors: {}
    });

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = () => {
        const { data } = this.state;
        let errors = {};

        if (data.firstName === '') errors.firstName = 'First Name can not be blank.';
        if (data.lastName === '') errors.lastName = 'Last Name can not be blank.';
        if (data.userid === '') errors.userid = 'UserID can not be blank.';
        if (!isEmail(data.email)) errors.email = 'Email must be valid.';
        if (data.email === '') errors.email = 'Email can not be blank.';
        if (data.password === '') errors.password = 'Password must be valid.';
        if (data.mobileno === '') errors.mobileno = 'Mobileno can not be blank.';

        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            //Call an api here
            //Resetting the form
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }

    render() {
        const { data, errors } = this.state;
        return (

            <Container>
            <Row >
                <Col >
                    <Button className="bg-primary" block><h3>Signup</h3></Button>
                </Col>
                <Col sm={4}></Col>
                <Col></Col>
            </Row>
            <br></br>
            <Row>
                <Col sm={8}>
                    <Form onSubmit={this.handleSubmit}>
                                <br></br>
                                <FormGroup as row>
                                    <Col sm={2}><Label for="firstName">First Name</Label></Col>
                                    <Col sm={10}><Input id="firstName" value={data.firstName} invalid={errors.firstName ? true : false} name="firstName" onChange={this.handleChange} /></Col>
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </FormGroup>

                                <FormGroup as row>
                                    <Col sm={2}><Label for="lastName">Last Name</Label></Col>
                                    <Col sm={10}><Input id="lastName" value={data.lastName} invalid={errors.lastName ? true : false} name="lastName" onChange={this.handleChange} /> </Col>
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                </FormGroup>

                                <FormGroup as row>
                                <Col sm={2}><Label for="userid">UserID</Label></Col>
                                    <Col sm={10}><Input id="userid" value={data.userid} invalid={errors.userid ? true : false} name="userid" onChange={this.handleChange} /> </Col>
                                    <FormFeedback>{errors.userid}</FormFeedback>
                                </FormGroup>

                                <FormGroup as row >
                                <Col sm={2}><Label for="password">Password</Label></Col>
                                    <Col sm={10}><Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} /> </Col>
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </FormGroup>

                                <FormGroup as row >
                                <Col sm={2}><Label for="email">Email</Label></Col>
                                    <Col sm={10}><Input id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange} /> </Col>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>

                                <FormGroup as row>
                                <Col sm={2}><Label for="mobileno">Mobileno</Label> </Col>
                                    <Col sm={10}> <Input id="mobileno" value={data.mobileno} name="mobileno" invalid={errors.mobileno ? true : false} onChange={this.handleChange} /> </Col>
                                    <FormFeedback>{errors.mobileno}</FormFeedback>
                                </FormGroup>

                                <Button color="primary">Register</Button>
                        </Form>
                </Col>
                <Col sm={4} >
                    <img src={image} alt="water"/>
                </Col>
            </Row>
         </Container>

        );
    }
}

export default Register;