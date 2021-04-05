import React, { Component } from 'react';
import edit from '../../images/edit_small.png';
import del from '../../images/delete_small.png';
import search from '../../images/search_small.png';

import AdminServices from '../../Services/AdminServices';
import Navbar from '../NavBar';


import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

class GetAllWaterInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            WaterTable : []
        }

    }


    componentDidMount(){
        AdminServices.getAllWaterInfo().then( (res) =>{
            this.setState({ WaterTable: res.data});
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

    handleMobileChange = (event) => {
        this.setState({
            mobileno: event.target.value
        })
    }

    deleteWaterInfo(id){
        AdminServices.deleteWaterInfo(id).then(res => {
            this.props.history.push('/admin')
        });
    }

    updateWaterInfo(id){
        console.log("userid: in updatewaterinfomethod: "+ id);
        this.props.history.push(`/admin/${id}`)
    }

    render() {
        return (
            <div>
                <Navbar/>
            
            <Container>
                <Row >
                    <Col ><Button variant="primary" block><h3>All Water Information</h3></Button></Col>
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
                        {
                            this.state.WaterTable.map(
                                WaterTable =>
                                <tr key = {WaterTable.userid}>
                                    <td>{WaterTable.mobileno}</td>
                                    <td>{WaterTable.userid}</td>
                                    <td>{WaterTable.location}</td>
                                    <td>{WaterTable.duration}</td>
                                    <td>{WaterTable.city}</td>
                                    
                                    <td ><Button variant="danger" onClick={() => this.deleteWaterInfo(WaterTable.userid)}><img src={del} alt="delete" /></Button></td>
                                    <td ><Button variant="warning" onClick={() =>this.updateWaterInfo(WaterTable.userid)}><img src={edit} alt="edit" /></Button></td>
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

export default GetAllWaterInfo;
