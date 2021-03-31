import React, { Component } from 'react';
import image from '../../images/water.jfif'
import addman from '../../images/newUser.png'
import tap from '../../images/tap.jfif'

import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Form} from 'react-bootstrap';


class AddWaterInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            areaname: '',
            duration: '',
            city: '',
            waterdesc: '',
            waterpres: ''            
        }
    }

    handleAreanameChange = (event) => {
        this.setState({
            areaname: event.target.value
        })
    }

    handleDurationChange = (event) => {
        this.setState({
            duration: event.target.value
        })
    }

    handleCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    handleWaterDescChange = (event) => {
        this.setState({
            waterdesc: event.target.value
        })
    }

    handleWaterPresChange = (event) => {
        this.setState({
            waterpres: event.target.value
        })
    }

    render() {
        const { areaname, duration, city, waterdesc, waterpres } = this.state
        return (
        
            <Container>
            <Row >
                <Col ><Button variant="primary" block><h3>Add Water Info</h3></Button></Col>
                <Col xs = {4}></Col>
                <Col></Col>
            </Row>
            <br></br>
            
            <Form>
                <Form.Group as={Row} controlId="formHorizontalAreaname">
                    <Form.Label column sm={2} >
                    Areaname
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="areaname" placeholder="Areaname" value={areaname} onChange={this.handleAreanameChange}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalDuration">
                    <Form.Label column sm={2}>
                    Duration
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="duration" placeholder="Duration" value={duration} onChange={this.handleDurationChange}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalCity">
                    <Form.Label column sm={2}>
                    City
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="city" placeholder="City" value={city} onChange={this.handleCityChange} />
                    </Col>
                </Form.Group>

                
                <Form.Group as={Row} controlId="formHorizontalWaterDesc">
                    <Form.Label column sm={2}>
                    WaterDesc
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="waterdesc" placeholder="WaterDesc" value={waterdesc} onChange={this.handleWaterDescChange} />
                    </Col>
                </Form.Group>

                
                <Form.Group as={Row} controlId="formHorizontalWaterPres">
                    <Form.Label column sm={2}>
                    WaterPres
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="waterpres" placeholder="WaterPres" value={waterpres} onChange={this.handleWaterPresChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>

         </Container>

            //     <div className="container bg-warning"> 
        //     <div className="row"> 
        //         <div className="col-sm-8 bg-success">
        //             <div className="row"> 
        //                 <div className="col-sm-2"></div>
        //                 <div className="col-sm-1"><img src={addman} alt="add" /></div>
        //                 <div className="col-sm-4"><h2> WaterInfo </h2></div>
        //                 <div className="col-sm-2"><img src={tap} alt="tap" /></div>                            
        //             </div>
        //             <div className="form-group">
        //                     <label >Areaname : </label>
        //                     <input type="text" className="form-control" value={areaname} onChange={this.handleAreanameChange} />
        //             </div>

        //             <div className="form-group">
        //                     <label >Duration : </label>
        //                     <input type="time" className="form-control" value={duration} onChange={this.handleDurationChange} />
        //             </div>
        //             <div className="form-group">
        //                     <label> City :    </label>
        //                     <input type="text" className="form-control" value={city} onChange={this.handleCityChange} />
        //             </div>


        //         </div>
        //         <div className="col-sm-4"> 

        //         </div>
        //     </div> 
        // </div>        
        );
    }
}

export default AddWaterInfo;