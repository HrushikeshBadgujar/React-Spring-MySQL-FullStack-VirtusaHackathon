import React, { Component } from 'react';
import search from '../../images/search_small.png';


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
                        <tr>
                        <td>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="UserID"
                                />
                            </InputGroup>
                        </td>
                        <td>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Display Feedbacks"
                                />
                            </InputGroup>
                        </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

            
        //     <div class="container">
        //     <div class="row">
        //         <div class="col-sm-4 ">
        //             <h1>All Feedback </h1>
        //         </div>
        //         <div class="col-sm-4 ">
        //         </div>
        //         <div class="col-sm-3 ">
        //             <h3>Search Feedback</h3>
        //         </div>
        //         <div class="col-sm-1 ">
        //             <img src={search} alt="search" />
        //         </div>
        //     </div>

        //     <div >
        //         <div >
        //             <label>UserID</label>
        //             <input type="email" placeholder="Display" />
        //         </div>  

        //             <br></br>
        //             <div >
        //                 <input type="text"  placeholder="Display Feedback" />
        //             </div>
        //     </div>

             
        // </div>
        );
    }
}

export default GetAllFeedback;
