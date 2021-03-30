import React, { Component } from 'react';
import edit from '../../images/edit.png';
import del from '../../images/delete.png';
import tap from '../../images/tap.jfif';
import search from '../../images/search.png';

class GetAllWaterInfo extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (

            <div class="container">
                <div class="row">
                    <div class="col-sm-4 ">
                        <h1>Update Water Info </h1>
                    </div>
                    <div class="col-sm-2 ">
                        <img src={tap} alt="tap" />
                    </div>
                    <div class="col-sm-4 ">
                    </div>
                    <div class="col-sm-1 ">
                        <h3>Search</h3>
                    </div>
                    <div class="col-sm-1 ">
                        <img src={search} alt="search" />
                    </div>

                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-2 bg-success">
                    <h3>Mobileno</h3>
                    </div>
                    <div class="col-sm-2 bg-warning">
                    <h3>UserID</h3>
                    </div>
                    <div class="col-sm-2 bg-success">
                    <h3>Areaname</h3>
                    </div>
                    <div class="col-sm-2 bg-warning">
                    <h3>Duration</h3>
                    </div>
                    <div class="col-sm-2 bg-success">
                    <h3>City</h3>
                    </div>
                    <div class="col-sm-1 bg-warning">
                    </div>
                    <div class="col-sm-1 bg-success">
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-2 ">
                    <input type="text" className="full"placeholder="Display" />
                    </div>
                    <div class="col-sm-2 ">
                    <input type="text" className="full"placeholder="Display" />
                    </div>
                    <div class="col-sm-2 ">
                    <input type="text" className="full"placeholder="Display" />
                    </div>
                    <div class="col-sm-2 ">
                    <input type="text" className="full"placeholder="Display" />
                    </div>
                    <div class="col-sm-2 ">
                    <input type="text" className="full"placeholder="Display" />
                    </div>
                    <div class="col-sm-1 ">
                       <img src={del} alt="delete" />
                    </div>
                    <div class="col-sm-1 ">
                        <img src={edit} alt="edit" />
                    </div>
                </div>
            </div>

        );
    }
}

export default GetAllWaterInfo;
