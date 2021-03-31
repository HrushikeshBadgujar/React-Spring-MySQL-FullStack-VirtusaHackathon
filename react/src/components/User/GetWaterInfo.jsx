import React, { Component } from 'react';
import edit from '../../images/edit_small.png';
import search from '../../images/search_small.png';


import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
class GetWaterInfo extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (

            <Container>
            <Row >
                <Col ><Button variant="primary" block><h3>Get Water Info</h3></Button></Col>
                <Col xs = {4}></Col>
                <Col><Button variant="primary" block><h3>Search City <img src={search} alt="search"/></h3></Button></Col>
            </Row>
            <br></br>
            
            <Row>
            <Col sm={4}>
            <Table >
                    <thead >
                        <tr>
                            <th>Area Lists</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Area"
                                />
                            </InputGroup>
                        </td>
                        </tr>
                    </tbody>
            </Table>
            </Col>
            <Col></Col>
            <Col sm={7}>
            <Row>
                <Col></Col>
                <Col sm={1}><Button variant="warning" ><img src={edit} alt="edit" /></Button></Col>
                <Col sm={1}></Col>
            </Row>
            <br></br>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalAreaname">
                    <Form.Label column sm={2} >
                    Areaname
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="areaname" placeholder="Areaname" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalDuration">
                    <Form.Label column sm={2}>
                    Duration
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="duration" placeholder="Duration" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalCity">
                    <Form.Label column sm={2}>
                    City
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="city" placeholder="City" />
                    </Col>
                </Form.Group>

                
                <Form.Group as={Row} controlId="formHorizontalWaterDesc">
                    <Form.Label column sm={2}>
                    WaterDesc
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="waterdesc" placeholder="WaterDesc"  />
                    </Col>
                </Form.Group>

                
                <Form.Group as={Row} controlId="formHorizontalWaterPres">
                    <Form.Label column sm={2}>
                    WaterPres
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="waterpres" placeholder="WaterPres"  />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="update">Update</Button>
                    </Col>
                </Form.Group>
            </Form>
            </Col>
            </Row>
         </Container>


            // <div className="container-fluid">
            //     <div className="row m-5 p-5 bg-warning">
            //        <div className="float-left">Area Lists</div>
            //         <div className="float-right">
            //         <img src={edit} alt="edit" />
            //         </div> 
                    
            //     </div>
            //     <div className="row">
            //         <div className="col-3">
            //             <div className="row mx-5 my-3 px-5 py-3 bg-primary">Area 1</div>
            //             <div className="row mx-5 my-3 px-5 py-3 bg-primary">Area 2</div>
            //             <div className="row mx-5 my-3 px-5 py-3 bg-primary">Area 3</div>
            //             <div className="row mx-5 my-3 px-5 py-3 bg-primary">Area 4</div>
            //             <div className="row mx-5 my-3 px-5 py-3 bg-primary">Area </div>
            //         </div>
            //         <div className="col-9">


            //             <form>
            //                 <div className="row">
            //                     <div className= "col-6">
            //                     <div className="px-3 py-3 mx-3 my-3" >
            //                         <label>UserID</label>
            //                         <input type="email" className="px-2 py-2 mx-3 my-3"  placeholder="Display" />
            //                     </div>
            //                     <div className="px-3 py-3 mx-3 my-3">
            //                         <label>Areaname</label>
            //                         <input type="text" className="px-2 py-2 mx-3 my-3" placeholder="Display" />
            //                     </div>
            //                     <div className="px-3 py-3 mx-3 my-3">
            //                         <label>Duration</label>
            //                         <input type="time" className="px-2 py-2 mx-3 my-3" placeholder="Display" />
            //                     </div>
                                
                                
            //                     </div>
            //                     <div className= "col-6">
            //                     <div className="px-3 py-3 mx-3 my-3" >
            //                         <label>City</label>
            //                         <input type="text" className="px-2 py-2 mx-3 my-3"  placeholder="Display" />
            //                     </div>
            //                     <div className="px-3 py-3 mx-3 my-3">
            //                         <label>WaterDesc</label>
            //                         <input type="text" className="px-2 py-2 mx-3 my-3" placeholder="Display" />
            //                     </div>
            //                     <div className="px-3 py-3 mx-3 my-3">
            //                         <label>WaterPressure</label>
            //                         <input type="text" className="px-2 py-2 mx-3 my-3 " placeholder="Display" />
            //                     </div>
            //                     </div>
            //                 </div>
            //             </form>

            //         </div>


            //         <div className="col-2">three</div>
            //         <div className="col-2">four</div>
            //         <div className="col-2">five</div>

            //     </div>
            // </div>
        );
    }
}

export default GetWaterInfo;
