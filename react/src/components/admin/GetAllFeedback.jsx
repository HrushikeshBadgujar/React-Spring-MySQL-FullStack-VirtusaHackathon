import React, { Component } from 'react';
import search from '../../images/search_small.png';

import AdminServices from '../../Services/AdminServices';
import AuthenticationService from '../../Services/AuthenticationService'


import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

class GetAllFeedback extends Component {

    constructor(props) {
        super(props);

        this.state = {
            FeedbackTable : [],
        }


    }

    componentDidMount(){
        // const user = AuthenticationService.getCurrentUser();    
        // console.log("user : "+ user.username);
        AdminServices.getAllFeedback().then( (res) =>{
            this.setState({FeedbackTable: res.data});
        });
    }


    render() {
        return (
            <Container>
                <Row >
                    <Col ><Button variant="primary" block><h3>All Feedback</h3></Button></Col>
                    <Col xs = {4}></Col>
                    <Col><Button variant="primary" block><h3>Search Feedback <img src={search} alt="search"/></h3></Button></Col>
                </Row>
                <br></br>
                <Table >
                    <thead >
                        <tr>
                            <th>UserID</th>
                            <th>Feedbacks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.FeedbackTable.map(
                                FeedbackTable =>
                                <tr key = {FeedbackTable.feedbackId}> 
                                    <td>{FeedbackTable.feedbackId}</td>
                                    <td>{FeedbackTable.feedbackDesc}</td>
                                </tr>
                            )
                        } 
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default GetAllFeedback;
