import React, { Component } from 'react';

import UserServices from '../../Services/UserServices'

import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import AdminServices from '../../Services/AdminServices';


import Navbar from '../NavBar';


class UpdateWaterInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {

            location: '',
            duration: '',
            city: '',
            waterdesc: '',
            waterpres: '',
            userid : this.props.match.params.id
            
        }
        
        //this.handleUserIdChange = this.handleUserIdChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleWaterDescChange = this.handleWaterDescChange.bind(this);
        this.handleWaterPresChange = this.handleWaterPresChange.bind(this);
        this.submitWaterInfo = this.submitWaterInfo.bind(this);        
    }


    // handleUserIdChange = (event) => {
    //     this.setState({
    //         userid: event.target.value
    //     })
    // }

    handleLocationChange = (event) => {
        this.setState({
            location: event.target.value
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

    submitWaterInfo = (e) => {
        let WaterTable = {location:this.state.location, duration: this.state.duration, 
            city: this.state.city, waterdesc: this.state.waterdesc, waterpres:this.state.waterpres};

        console.log('WaterTable => ' + JSON.stringify(WaterTable));
        console.log('userid => ' + JSON.stringify(this.state.userid))
        
        AdminServices.updateWaterInfo(WaterTable,this.state.userid).then(res =>{   
            this.props.history.push('/admin');
        });
    }

    componentDidMount(){
        UserServices.getWaterInfoById(this.state.userid).then( (res) =>{
            let waterInfo = res.data;
            this.setState({location: waterInfo.location, duration: waterInfo.duration, 
                city: waterInfo.city, waterdesc: waterInfo.waterdesc, waterpres: waterInfo.waterpres});

        });
    }

    render() {
        const { location, duration, city, waterdesc, waterpres } = this.state
 
        return (
            <div>
                <Navbar/>
            
            <Container>
 
                <Row >
                    <Col ><Button variant="primary" block><h3>Update Water Info</h3></Button></Col>
                    <Col xs = {4}></Col>
                    <Col></Col>
                </Row>
 
                <br></br>
                
                <Form >
                    <Form.Group as={Row} controlId="formHorizontalUserId">
                        <Form.Label column sm={2} >
                            UserID
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="number" placeholder="UserID" value={this.state.userid} disabled/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalAreaname">
                        <Form.Label column sm={2} >
                        Location
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" placeholder="Location" value={location} onChange={this.handleLocationChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalDuration">
                        <Form.Label column sm={2}>
                        Duration
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="number" placeholder="Duration" value={duration} onChange={this.handleDurationChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalCity">
                        <Form.Label column sm={2}>
                        City
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" placeholder="City" value={city} onChange={this.handleCityChange} />
                        </Col>
                    </Form.Group>

                    
                    <Form.Group as={Row} controlId="formHorizontalWaterDesc">
                        <Form.Label column sm={2}>
                        WaterDesc
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" placeholder="WaterDesc" value={waterdesc} onChange={this.handleWaterDescChange} />
                        </Col>
                    </Form.Group>

                    
                    <Form.Group as={Row} controlId="formHorizontalWaterPres">
                        <Form.Label column sm={2}>
                        WaterPres
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" placeholder="WaterPres" value={waterpres} onChange={this.handleWaterPresChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button className="btn btn-success" onClick={this.submitWaterInfo} type="submit" >Submit</Button>
                        </Col>
                    </Form.Group>

                </Form>

            </Container>
            </div>

  
        );
    }
}

export default UpdateWaterInfo;