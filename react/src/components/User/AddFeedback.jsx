import React, { Component } from 'react';

import UserServices from '../../Services/UserServices'
import NavBar from '../NavBar'

import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

class AddFeedback extends Component {

    constructor(props) {
        super(props);

        this.state = {
            feedbackId: '',
            feedbackDesc: ''
        }
        this.handleFeedbackidChange = this.handleFeedbackidChange.bind(this);
        this.handleFeedbackDescChange = this.handleFeedbackDescChange.bind(this);
        this.submitFeedback = this.submitFeedback.bind(this);        
    }

    handleFeedbackidChange = (event) => {
        this.setState({
            feedbackId: event.target.value
        })
    }

    handleFeedbackDescChange = (event) => {
        this.setState({
            feedbackDesc: event.target.value
        })
    }

    submitFeedback = (e) => {
        e.preventDefault();
        let FeedbackTable = {feedbackId :this.state.feedbackId, feedbackDesc:this.state.feedbackDesc};
        console.log('FeedbackTable => ' + JSON.stringify(FeedbackTable));

        
        UserServices.addFeedback(FeedbackTable).then(res =>{
//          path(/employees) => AddWaterInfo
            this.props.history.push('/admin');
        });

        // // step 5
        // if(this.state.id === '_add'){
        //     EmployeeService.createEmployee(employee).then(res =>{
        //         this.props.history.push('/employees');
        //     });
        // }
        // else{
        //     EmployeeService.updateEmployee(employee, this.state.id).then( res => {
        //         this.props.history.push('/employees');
        //     });
        // }
    }


    render() {
        const { feedbackId,feedbackDesc } = this.state
        return (

            <div>
                <NavBar/>
            <Container>
                <Row >
                    <Col ><Button variant="primary" block><h3>Add Feedback</h3></Button></Col>
                    <Col xs = {4}></Col>
                    <Col></Col>
                </Row>
                <br></br>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalFeedbackid">
                        <Form.Label column sm="2">
                                Feedback ID
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control  placeholder="Feedback ID" value={feedbackId} onChange={this.handleFeedbackidChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalFeedbackDesc">
                        <Form.Label>
                            Feedback
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="textarea" rows={3} value={feedbackDesc} onChange={this.handleFeedbackDescChange}/>
                        </Col>
                    </Form.Group>

                    <Button  onClick={this.submitFeedback} type="submit" >Submit</Button>
                </Form>

             </Container>
             </div>

           
        );
    }
}

export default AddFeedback;