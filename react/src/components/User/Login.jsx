import React, { Component } from 'react';
import image from '../../images/water.jfif'
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

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

            
            <Container>
            <Row >
                <Col >
                    <Button className="bg-primary" block><h3>Login</h3></Button>
                </Col>
                <Col sm={4}></Col>
                <Col></Col>
            </Row>
            <br></br>
            <Row>
                <Col sm={8}>
                         <Form onSubmit={this.handleSubmit}>
                         <FormGroup as row>
                             <Col sm={2}><Label for="userid">Username</Label></Col>
                             <Col sm={10}><Input id="userid" value={data.userid} invalid={errors.userid ? true : false} name="userid" onChange={this.handleChange} /></Col>
                             <FormFeedback>{errors.userid}</FormFeedback>
                         </FormGroup>

                         <FormGroup as row>
                            <Col sm={2}><Label for="password">Password</Label></Col>
                            <Col sm={10}><Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} /></Col>
                             <FormFeedback>{errors.password}</FormFeedback>
                         </FormGroup>

                         <Button color="primary">login</Button>
                     </Form>
                </Col>
                <Col sm={4} >
                    <img src={image} alt="water"/>
                </Col>
            </Row>
         </Container>

            // <div class="container">
            //     <div class="row">
            //     <div class="col-sm-8">
            //         <Form onSubmit={this.handleSubmit}>
            //             <h1>Login</h1>
            //             <FormGroup>
            //                 <Label for="userid">Username</Label>
            //                 <Input id="userid" value={data.userid} invalid={errors.userid ? true : false} name="userid" onChange={this.handleChange} />
            //                 <FormFeedback>{errors.userid}</FormFeedback>
            //             </FormGroup>

            //             <FormGroup>
            //                 <Label for="password">Password</Label>
            //                 <Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
            //                 <FormFeedback>{errors.password}</FormFeedback>
            //             </FormGroup>

            //             <Button color="primary">login</Button>
            //         </Form>
            //     </div>
            //     <div class="col-sm-4">
            //         <img src={image} alt="imagehand" />
            //     </div>
            //     </div>
            // </div>
        );
    }
}

export default Login;