import React, { Component } from 'react';
import edit from '../../images/edit_small.png';
import del from '../../images/delete_small.png';
import search from '../../images/search_small.png';

import AdminServices from '../../Services/AdminServices';

import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

class GetAllWaterInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {

            userid: this.props.match.params.id,
            mobileno : '',
            areaname: '',
            duration: '',
            city: ''
                        
        }

    }


    componentDidMount(){
        AdminServices.getAllWaterInfo(this.state.userid).then( (res) =>{
            let WaterTable = res.data;
            this.setState({
            
                userid : WaterTable.userid, 
                mobileno : WaterTable.mobileno,
                areaname : WaterTable.areaname,
                duration : WaterTable.duration,
                city : WaterTable.city,
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

    handleMobileChange = (event) => {
        this.setState({
            mobileno: event.target.value
        })
    }


    EditWaterInfo = (e) => {
        e.preventDefault();
        let WaterTable = { userid:this.state.userid, areaname:this.state.areaname, duration: this.state.duration, city: this.state.city, mobileno:this.state.mobileno};
        console.log('WaterTable => ' + JSON.stringify(WaterTable));

        
        AdminServices.updateWaterInfo(WaterTable).then(res =>{
//          path(/employees) => same page     
//          this.props.history.push('/employees');
        });

    }

    DeleteWaterInfo = (e) => {
        e.preventDefault();
        let WaterTable = { userid:this.state.userid,areaname:this.state.areaname, duration: this.state.duration, city: this.state.city, mobileno:this.state.mobileno};
        console.log('WaterTable => ' + JSON.stringify(WaterTable));

        
        AdminServices.deleteWaterInfo(WaterTable).then(res =>{
//          path(/employees) => same page     
//          this.props.history.push('/employees');
        });

    }

    
    UpdateWaterInfo = (e) => {
        e.preventDefault();
        let WaterTable = {mobileno:this.state.mobileno, userid:this.state.userid,areaname:this.state.areaname, duration: this.state.duration, city: this.state.city};
        console.log('WaterTable => ' + JSON.stringify(WaterTable));

        
        AdminServices.updateWaterInfo(WaterTable).then(res =>{
//          path(/employees) => same page     
//          this.props.history.push('/employees');
        });
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
                        <td href="#"><Button variant="danger" onClick={this.DeleteWaterInfo}><img src={del} alt="delete" /></Button></td>
                        <td href="#"><Button variant="warning" onClick={this.EditWaterInfo}><img src={edit} alt="edit" /></Button></td>
                        </tr>
                    </tbody>
                </Table>
                <Form>
                <Form.Group as={Row}>
                    <Col >
                    <Button  onClick={this.UpdateWaterInfo} type="update" >Update</Button>
                    </Col>
                </Form.Group>
                </Form>
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
