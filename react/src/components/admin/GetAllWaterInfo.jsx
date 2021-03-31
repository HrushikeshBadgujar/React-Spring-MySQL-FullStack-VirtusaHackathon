import React, { Component } from 'react';
import edit from '../../images/edit_small.png';
import del from '../../images/delete_small.png';
import tap from '../../images/tap.jfif';
import search from '../../images/search_small.png';


import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

class GetAllWaterInfo extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (

            <Container>
                <Row >
                    <Col ><Button variant="primary" block><h3>Update Water Info</h3></Button></Col>
                    <Col xs = {4}></Col>
                    <Col><Button variant="primary" block><h3>Search <img src={search} alt="search"/></h3></Button></Col>
                </Row>
                <br></br>
                <Table >
                    <thead>
                        <tr>
                        <th>Mobileno</th>
                        <th>UserID</th>
                        <th>Areaname</th>
                        <th>Duration</th>
                        <th>City</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Mobileno"
                                />
                            </InputGroup>
                        </td>
                        <td>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="UserId"
                                />
                            </InputGroup>
                        </td>
                        <td>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Areaname"
                                />
                            </InputGroup>
                        </td>
                        <td>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Duration"
                                />
                            </InputGroup>
                        </td>
                        <td>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="City"
                                />
                            </InputGroup>
                        </td>
                        <td href="#"><Button variant="danger" ><img src={del} alt="delete" /></Button></td>
                        <td href="#"><Button variant="warning" ><img src={edit} alt="edit" /></Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

            // <div class="container">
            //     <div class="row">
            //         <div class="col-sm-4 ">
            //             <h1>Update Water Info </h1>
            //         </div>
            //         <div class="col-sm-2 ">
            //             <img src={tap} alt="tap" />
            //         </div>
            //         <div class="col-sm-4 ">
            //         </div>
            //         <div class="col-sm-1 ">
            //             <h3>Search</h3>
            //         </div>
            //         <div class="col-sm-1 ">
            //             <img src={search} alt="search" />
            //         </div>

            //     </div>
            //     <br></br>
            //     <div class="row">
            //         <div class="col-sm-2 bg-success">
            //         <h3>Mobileno</h3>
            //         </div>
            //         <div class="col-sm-2 bg-warning">
            //         <h3>UserID</h3>
            //         </div>
            //         <div class="col-sm-2 bg-success">
            //         <h3>Areaname</h3>
            //         </div>
            //         <div class="col-sm-2 bg-warning">
            //         <h3>Duration</h3>
            //         </div>
            //         <div class="col-sm-2 bg-success">
            //         <h3>City</h3>
            //         </div>
            //         <div class="col-sm-1 bg-warning">
            //         </div>
            //         <div class="col-sm-1 bg-success">
            //         </div>
            //     </div>
            //     <br></br>
            //     <div class="row">
            //         <div class="col-sm-2 ">
            //         <input type="text" className="full"placeholder="Display" />
            //         </div>
            //         <div class="col-sm-2 ">
            //         <input type="text" className="full"placeholder="Display" />
            //         </div>
            //         <div class="col-sm-2 ">
            //         <input type="text" className="full"placeholder="Display" />
            //         </div>
            //         <div class="col-sm-2 ">
            //         <input type="text" className="full"placeholder="Display" />
            //         </div>
            //         <div class="col-sm-2 ">
            //         <input type="text" className="full"placeholder="Display" />
            //         </div>
            //         <div class="col-sm-1 ">
            //            <img src={del} alt="delete" />
            //         </div>
            //         <div class="col-sm-1 ">
            //             <img src={edit} alt="edit" />
            //         </div>
            //     </div>
            // </div>

        );
    }
}

export default GetAllWaterInfo;
