import React, { Component } from 'react';
import search from '../../images/search_small.png';

import UserServices from '../../Services/UserServices'

import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

import Navbar from '../NavBar';

class GetFeedback extends Component {

    constructor(props) {
        super(props);


        this.state = {
            FeedbackTable:[],
        }
    }

    componentDidMount(){
        UserServices.getFeedback(this.state.userid).then( (res) =>{
            this.setState({FeedbackTable: res.data});
        });
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


    render() {
        const {userid, feedback} = this.state

        return (
            <div>
            <Navbar/>

            <Container>
                <Row >
                    <Col ><Button variant="primary" block><h3>Your Feedback</h3></Button></Col>
                    <Col xs = {4}></Col>
                    <Col><Button variant="primary" block><h3>Search Feedback <img src={search} alt="search"/></h3></Button></Col>
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
                    </Form>

                <Table >
                    <tbody>
                        <tr>
                        <td>
                            <InputGroup className="mb-3">
                                <FormControl placeholder="Display Feedbacks" value={feedback} onChange={this.handleFeedbackChange}/>
                            </InputGroup>
                        </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            </div>
        
        );
    }
}

export default GetFeedback;
