import React, { Component } from 'react';
import image from '../../images/water.jfif'
import addman from '../../images/newUser.png'
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
            <div className="container bg-warning"> 
            <div className="row"> 
                <div className="col-sm-8 bg-success">
                    <div className="row"> 
                        <div className="col-sm-2"></div>
                        <div className="col-sm-1"><img src={addman} alt="add" /></div>
                        <div className="col-sm-4"><h2> WaterInfo </h2></div>
                        <div className="col-sm-2"><img src={tap} alt="tap" /></div>                            
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
                <div className="col-sm-4"> 

                </div>
            </div> 
        </div>        );
    }
}

export default AddWaterInfo;