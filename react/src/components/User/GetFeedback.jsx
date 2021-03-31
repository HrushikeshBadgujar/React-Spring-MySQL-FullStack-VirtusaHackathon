import React, { Component } from 'react';
import search from '../../images/search_small.png';
import del from '../../images/delete.png';


import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

class GetFeedback extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (


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
                                <Form.Control plaintext placeholder="UserID" />
                            </Col>
                        </Form.Group>
                    </Form>

                <Table >
                    <tbody>
                        <tr>
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

            // <div className="container">
                
            //         <div className="col-6">
            //             <h1>Your Feedback</h1>

            //         </div>
            //         {/* <div className="col-6">
            //             <h1>Search Feedback</h1>

            //         </div> */}

                
            //     <div className="row">
                    
            //         <div className="col">
            //             <div >
            //                 <label>UserID</label>
            //                 <input type="email" placeholder="Display" />
            //             </div>  

            //             <br></br>
            //             <div >
            //                 <input type="text"  placeholder="Display Feedback" />
            //             </div>
            //             <br></br>

            //             <div >
            //             <input type="text"  placeholder="Display Feedback" />
            //             </div>
            //             <br></br>

            //             <div >
            //             <input type="text"  placeholder="Display Feedback" />
            //             </div>

                        

            //         </div>


            //     </div>
            // </div>
        
        );
    }
}

export default GetFeedback;
