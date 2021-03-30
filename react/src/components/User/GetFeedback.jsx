import React, { Component } from 'react';
import search from '../../images/search.png';
import del from '../../images/delete.png';

class GetFeedback extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (

            <div className="container">
                
                    <div className="col-6">
                        <h1>Your Feedback</h1>

                    </div>
                    {/* <div className="col-6">
                        <h1>Search Feedback</h1>

                    </div> */}

                
                <div className="row">
                    
                    <div className="col">
                        <div >
                            <label>UserID</label>
                            <input type="email" placeholder="Display" />
                        </div>  

                        <br></br>
                        <div >
                            <input type="text"  placeholder="Display Feedback" />
                        </div>
                        <br></br>

                        <div >
                        <input type="text"  placeholder="Display Feedback" />
                        </div>
                        <br></br>

                        <div >
                        <input type="text"  placeholder="Display Feedback" />
                        </div>

                        

                    </div>


                </div>
            </div>
        
        );
    }
}

export default GetFeedback;
