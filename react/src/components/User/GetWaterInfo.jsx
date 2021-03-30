import React, { Component } from 'react';
import edit from '../../images/edit.png';

class GetWaterInfo extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row m-5 p-5 bg-warning">
                   <div className="float-left">Area Lists</div>
                    <div className="float-right">
                    <img src={edit} alt="edit" />
                    </div> 
                    
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="row mx-5 my-3 px-5 py-3 bg-primary">Area 1</div>
                        <div className="row mx-5 my-3 px-5 py-3 bg-primary">Area 2</div>
                        <div className="row mx-5 my-3 px-5 py-3 bg-primary">Area 3</div>
                        <div className="row mx-5 my-3 px-5 py-3 bg-primary">Area 4</div>
                        <div className="row mx-5 my-3 px-5 py-3 bg-primary">Area </div>
                    </div>
                    <div className="col-9">


                        <form>
                            <div className="row">
                                <div className= "col-6">
                                <div className="px-3 py-3 mx-3 my-3" >
                                    <label>UserID</label>
                                    <input type="email" className="px-2 py-2 mx-3 my-3"  placeholder="Display" />
                                </div>
                                <div className="px-3 py-3 mx-3 my-3">
                                    <label>Areaname</label>
                                    <input type="text" className="px-2 py-2 mx-3 my-3" placeholder="Display" />
                                </div>
                                <div className="px-3 py-3 mx-3 my-3">
                                    <label>Duration</label>
                                    <input type="time" className="px-2 py-2 mx-3 my-3" placeholder="Display" />
                                </div>
                                
                                
                                </div>
                                <div className= "col-6">
                                <div className="px-3 py-3 mx-3 my-3" >
                                    <label>City</label>
                                    <input type="text" className="px-2 py-2 mx-3 my-3"  placeholder="Display" />
                                </div>
                                <div className="px-3 py-3 mx-3 my-3">
                                    <label>WaterDesc</label>
                                    <input type="text" className="px-2 py-2 mx-3 my-3" placeholder="Display" />
                                </div>
                                <div className="px-3 py-3 mx-3 my-3">
                                    <label>WaterPressure</label>
                                    <input type="text" className="px-2 py-2 mx-3 my-3 " placeholder="Display" />
                                </div>
                                </div>
                            </div>
                        </form>

                    </div>


                    <div className="col-2">three</div>
                    <div className="col-2">four</div>
                    <div className="col-2">five</div>

                </div>
            </div>
        );
    }
}

export default GetWaterInfo;
