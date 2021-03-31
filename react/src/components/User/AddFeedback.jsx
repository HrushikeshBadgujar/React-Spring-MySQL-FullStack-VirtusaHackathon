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
                        <Form.Control plaintext placeholder="UserID" value={userid} onChange={this.handleUseridChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Feedback</Form.Label>
                        <Form.Control as="textarea" rows={3} value={feedback} onChange={this.handleFeedbackChange}/>
                    </Form.Group>

                    <Button  onClick={this.submitFeedback} type="submit" >Submit</Button>
                </Form>

             </Container>

            // <div className="container">
            //     <div className="row">
            //         <div className="col-7">

            //             <div className="rows" >
                            

            //                <div class="cols"> <img src={feed} alt="add" /></div>
            //                <div class="cols"><h2> AddFeedback </h2></div>
            //                <div class="cols"><img src={tap} alt="tap" /></div>
                            
            //             </div>
            //             <div className="form-group">
            //                 <label >User Id : </label>
            //                 <input type="text" className="form-control" value={userid} onChange={this.handleUseridChange} />
            //             </div>

            //             <div className="form-group">
            //                 <label> Feedback :    </label>
            //                 <input type="text" className="form-control" value={feedback} onChange={this.handleFeedbackChange} />
            //             </div>




            //         </div>

            //         <div className="col-5">
            //             <img src={image} alt="imagehand" />

            //         </div>

            //     </div>
            // </div>
        );
    }
}

export default AddFeedback;