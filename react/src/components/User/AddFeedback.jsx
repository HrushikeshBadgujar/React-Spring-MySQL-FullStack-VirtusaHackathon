import React, { Component } from 'react';

import UserServices from '../../Services/UserServices'

import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

class AddFeedback extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userid: '',
            feedback: '',
        }
        this.handleUseridChange = this.handleUseridChange.bind(this);
        this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
        this.submitFeedback = this.submitFeedback.bind(this);        
    }

    handleUseridChange = (event) => {
        this.setState({
            userid: event.target.value
        })
    }

    handleFeedbackChange = (event) => {
        this.setState({
            feedback: event.target.value
        })
    }

    submitFeedback = (e) => {
        e.preventDefault();
        let FeedbackTable = {userid :this.state.userid, feedback:this.state.feedback};
        console.log('FeedbackTable => ' + JSON.stringify(FeedbackTable));

        
        UserServices.addFeedback(FeedbackTable).then(res =>{
//          path(/employees) => AddWaterInfo
//          this.props.history.push('/employees');
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
        const { userid,feedback } = this.state
        return (


            <Container>
                <Row >
                    <Col ><Button variant="primary" block><h3>Add Feedback</h3></Button></Col>
                    <Col xs = {4}></Col>
                    <Col></Col>
                </Row>
                <br></br>
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextUserId">
                        <Form.Label column sm="2">
                                UserID
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control  placeholder="UserID" value={userid} onChange={this.handleUseridChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Feedback</Form.Label>
                        <Form.Control as="textarea" rows={3} value={feedback} onChange={this.handleFeedbackChange}/>
                    </Form.Group>

                    <Button  onClick={this.submitFeedback} type="submit" >Submit</Button>
                </Form>

             </Container>

           
        );
    }
}

export default AddFeedback;