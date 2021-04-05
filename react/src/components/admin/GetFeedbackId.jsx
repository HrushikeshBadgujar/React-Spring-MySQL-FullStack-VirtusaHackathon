import React, { Component } from 'react';
import search from '../../images/search_small.png';
import del from '../../images/delete_small.png';

import Navbar from '../NavBar';
import AdminServices from '../../Services/AdminServices';

import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';


class GetFeedbackId extends Component {

    constructor(props) {
        super(props);

        
        this.state = {
            // userid: '',
            // feedback: '',
            id: this.props.match.params.id,
            FeedbackTable : []
        }
        

    }

    componentDidMount(){
        AdminServices.getAllFeedback().then( (res) =>{
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

    DeleteFeedback = (e) => {
        e.preventDefault();
        let FeedbackTable = { userid:this.state.userid,areaname:this.state.areaname, duration: this.state.duration, city: this.state.city, mobileno:this.state.mobileno};
        console.log('FeedbackTaable => ' + JSON.stringify(FeedbackTable));

        
        AdminServices.deleteFeedback(FeedbackTable).then(res =>{ 
//          this.props.history.push('/employees');
        });

    }


    render() {

        return (

            <div>
                <Navbar/>
            

            <Container>
            <Row >
                <Col >
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextUserId">
                            <Form.Label column sm="2">
                                UserID
                            </Form.Label>
                           <Col sm="10">
                                <Form.Control plaintext placeholder="UserID" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs = {4}></Col>
                <Col><Button variant="primary" block>Search User <img src={search} alt="search"/></Button></Col>
            </Row>
            <br></br>
            <Table >
                <thead>
                    <tr>
                    <th>Feedback</th>
                    <th>Area</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.FeedbackTable.map(
                            FeedbackTable =>
                            <tr key ={FeedbackTable.id}> 
                                <td>{FeedbackTable.feedbackId} </td>
                                <td>{FeedbackTable.feedbackDesc}</td>
                            </tr>
                        )
                    }   
                </tbody>
            </Table>
        </Container>
        </div>
        
        );
    }
}

export default GetFeedbackId;