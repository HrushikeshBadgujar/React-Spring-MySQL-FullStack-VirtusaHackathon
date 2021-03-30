import React, { Component } from 'react';
import search from '../../images/search.png';

class GetAllFeedback extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div class="container">
            <div class="row">
                <div class="col-sm-4 ">
                    <h1>All Feedback </h1>
                </div>
                <div class="col-sm-4 ">
                </div>
                <div class="col-sm-3 ">
                    <h3>Search Feedback</h3>
                </div>
                <div class="col-sm-1 ">
                    <img src={search} alt="search" />
                </div>
            </div>

            <div >
                <div >
                    <label>UserID</label>
                    <input type="email" placeholder="Display" />
                </div>  

                    <br></br>
                    <div >
                        <input type="text"  placeholder="Display Feedback" />
                    </div>
            </div>

             
        </div>
        );
    }
}

export default GetAllFeedback;
