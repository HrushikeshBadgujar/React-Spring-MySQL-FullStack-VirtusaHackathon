import React, { Component } from 'react';
import search from '../../images/search.png';
import del from '../../images/delete.png';

class GetFeedbackId extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <label>UserID</label>
                        <input type="email" placeholder="Display" />
                    </div>
                    <div class="col-sm-5 ">
                    </div>
                    <div class="col-sm-2 ">
                        <h3>Search User</h3>
                    </div>
                    <div class="col-sm-1 ">
                        <img src={search} alt="search" />
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                        <input type="text"  placeholder="Display Feedback" />
                    </div>
                    <div class="col-sm-4">
                        <img src={del} alt="delete" />
                    </div>

                </div>
             
            </div>

        
        );
    }
}

export default GetFeedbackId;
