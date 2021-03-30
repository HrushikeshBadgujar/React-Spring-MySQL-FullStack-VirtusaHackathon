import React, { Component } from 'react';
import image from '../../images/water.jfif'
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            userid: '',
            password: ''
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

        if (data.userid === '') errors.userid = 'UserID can not be blank.';
        if (data.password === '') errors.password = 'Password must be valid.';
       

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
                        <h1>Login</h1>
                        <FormGroup>
                            <Label for="userid">Username</Label>
                            <Input id="userid" value={data.userid} invalid={errors.userid ? true : false} name="userid" onChange={this.handleChange} />
                            <FormFeedback>{errors.userid}</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                            <FormFeedback>{errors.password}</FormFeedback>
                        </FormGroup>

                        <Button color="primary">login</Button>
                    </Form>
                </div>
                <div class="col-sm-4">
                    <img src={image} alt="imagehand" />
                </div>
                </div>
            </div>
        );
    }
}

export default Login;