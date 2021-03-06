import React, { Component } from 'react';
import edit from '../../images/edit_small.png';
import search from '../../images/search_small.png';


import UserServices from '../../Services/UserServices'

import Navbar from '../NavBar';

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

        this.state = {

            userid: this.props.match.params.id,

            areaname: '',
            duration: '',
            city: '',
            waterdesc: '',
            waterpres: ''            
        }

        this.handleAreanameChange = this.handleAreanameChange.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleWaterDescChange = this.handleWaterDescChange.bind(this);
        this.handleWaterPresChange = this.handleWaterPresChange.bind(this);
        this.UpdateWaterInfo = this.UpdateWaterInfo.bind(this);        

    }

    componentDidMount(){
        UserServices.getWaterInfoById(this.state.userid).then( (res) =>{
            let WaterTable = res.data;
            this.setState({
                areaname : WaterTable.areaname,
                duration : WaterTable.duration,
                city : WaterTable.city,
                waterdesc : WaterTable.waterdesc,
                waterpres : WaterTable.waterpres,
               userid : WaterTable.userid, 
            });
        });
    }

    handleUserIdChange = (event) => {
        this.setState({
            userid: event.target.value
        })
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

    UpdateWaterInfo = (e) => {
        e.preventDefault();
        let WaterTable = {userid:this.state.userid,areaname:this.state.areaname, duration: this.state.duration, city: this.state.city, waterdesc: this.state.waterdesc, waterpres:this.state.waterpres};
        console.log('WaterTable => ' + JSON.stringify(WaterTable));

        
        UserServices.UpdateWaterInfo(WaterTable).then(res =>{
//          this.props.history.push('/employees');
        });

    }


    render() {
        const {userid, areaname, duration, city, waterdesc, waterpres } = this.state

        return (
            <div>
                <Navbar/>
            
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
                        </tr>
                            <th>Area Lists</th>
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

                <Form.Group as={Row} controlId="formHorizontalUserID">
                    <Form.Label column sm={2} >
                    UserID
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="userid" placeholder="UserID" value={userid} onChange={this.handleUserIdChange}/>
                    </Col>
                </Form.Group>

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
                    <Form.Control type="city" placeholder="City" value={city} onChange={this.handleCityChange}/>
                    </Col>
                </Form.Group>

                
                <Form.Group as={Row} controlId="formHorizontalWaterDesc">
                    <Form.Label column sm={2}>
                    WaterDesc
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="waterdesc" placeholder="WaterDesc"  value={waterdesc} onChange={this.handleWaterDescChange}/>
                    </Col>
                </Form.Group>

                
                <Form.Group as={Row} controlId="formHorizontalWaterPres">
                    <Form.Label column sm={2}>
                    WaterPres
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="waterpres" placeholder="WaterPres"  value={waterpres} onChange={this.handleWaterPresChange}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button  onClick={this.submitWaterInfo} type="update" >Update</Button>
                    
                    </Col>
                </Form.Group>
            </Form>
            </Col>
            </Row>
         </Container>
         </div>
        );
    }
}

export default GetWaterInfo;
