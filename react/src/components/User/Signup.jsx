import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import image from '../../images/water.jfif'
import { isEmail } from 'validator';

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
            <div class="container">
                <div class="row"> 
                        <div class="col-sm-8"> 

                            <Form onSubmit={this.handleSubmit}>
                                <h1>Register</h1>
                                <FormGroup>
                                    <Label for="firstName">First Name</Label>
                                    <Input id="firstName" value={data.firstName} invalid={errors.firstName ? true : false} name="firstName" onChange={this.handleChange} />
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="lastName">Last Name</Label>
                                    <Input id="lastName" value={data.lastName} invalid={errors.lastName ? true : false} name="lastName" onChange={this.handleChange} />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="userid">UserID</Label>
                                    <Input id="userid" value={data.userid} invalid={errors.userid ? true : false} name="userid" onChange={this.handleChange} />
                                    <FormFeedback>{errors.userid}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="mobileno">Mobileno</Label>
                                    <Input id="mobileno" value={data.mobileno} name="mobileno" invalid={errors.mobileno ? true : false} onChange={this.handleChange} />
                                    <FormFeedback>{errors.mobileno}</FormFeedback>
                                </FormGroup>

                                <Button color="primary">Register</Button>
                            </Form>
                
                    </div>
                    <div class="col-sm-4">
                        <div class="center">
                        <img src={image} alt="imagehand" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;