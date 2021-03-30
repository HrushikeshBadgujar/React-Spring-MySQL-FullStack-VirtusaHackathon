import React, { Component } from 'react';
import image from '../../images/water.jfif'
import feed from '../../images/feedback.png'

import tap from '../../images/tap.jfif'

class AddFeedback extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userid: '',
            feedback: '',
        }
    }

    handleUseridChange = (event) => {
        this.setState({
            userid: event.target.value
        })
    }

    handleFeedbackChange = (event) => {
        this.setState({
            feedback: event.target.value
        })
    }


    render() {
        const { userid,feedback } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-7">

                        <div className="rows" >
                            

                           <div class="cols"> <img src={feed} alt="add" /></div>
                           <div class="cols"><h2> AddFeedback </h2></div>
                           <div class="cols"><img src={tap} alt="tap" /></div>
                            
                        </div>
                        <div className="form-group">
                            <label >User Id : </label>
                            <input type="text" className="form-control" value={userid} onChange={this.handleUseridChange} />
                        </div>

                        <div className="form-group">
                            <label> Feedback :    </label>
                            <input type="text" className="form-control" value={feedback} onChange={this.handleFeedbackChange} />
                        </div>




                    </div>

                    <div className="col-5">
                        <img src={image} alt="imagehand" />

                    </div>

                </div>
            </div>
        );
    }
}

export default AddFeedback;