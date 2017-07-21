/**
 * Created by sxj on 2017/6/30.
 */
import BoilingVerdict from './BoilingVerdict'
import React, { Component } from 'react'
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature:''};
    }
    handleChange(e){
        this.setState({temperature: e.target.value});

    }
    render(){
        const temperature =  this.state.temperature;
        return (
            <fieldset>
                <legend> Enter temperature in Celsius</legend>
                <input value={temperature}
                       onChange={this.handleChange}/>
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}
export default Calculator