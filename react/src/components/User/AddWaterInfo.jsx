import React, { Component } from 'react';
import image from '../../images/water.jfif'
import addman from '../../images/addman.jfif'
import tap from '../../images/tap.jfif'

class AddWaterInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            areaname: '',
            duration: '',
            city: ''
        }
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


    render() {
        const { areaname, duration, city } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-7">

                        <div className="rows" >
                            

                           <div class="cols"> <img src={addman} alt="add" /></div>
                           <div class="cols"><h2> WaterInfo </h2></div>
                           <div class="cols"><img src={tap} alt="tap" /></div>
                            
                        </div>
                        <div className="form-group">
                            <label >Areaname : </label>
                            <input type="text" className="form-control" value={areaname} onChange={this.handleAreanameChange} />
                        </div>

                        <div className="form-group">
                            <label >Duration : </label>
                            <input type="time" className="form-control" value={duration} onChange={this.handleDurationChange} />
                        </div>
                        <div className="form-group">
                            <label> City :    </label>
                            <input type="text" className="form-control" value={city} onChange={this.handleCityChange} />
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

export default AddWaterInfo;