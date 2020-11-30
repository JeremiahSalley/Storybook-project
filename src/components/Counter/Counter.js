import React, { Component } from 'react';
import { render } from 'react-dom';


export class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: this.props.value
        }
    }
    increase = () => {
        if (this.state.number + this.props.step <= this.props.max) {
            if(this.props.step) {
                let newStep = this.props.step;
                let count = this.state.number + newStep;
                this.setState({number: count })
            }
            else {
                let newCount = this.state.number +1;
                this.setState({ number: newCount })
            }
        }
    }
    decreace = () => {
        if (this.state.number + this.props.step >= this.props.min) {
            if(this.props.step) {
                let newStep = this.props.step;
                let count = this.state.number - newStep;
                this.setState({number: count })
            }
            else {
                let newCount = this.state.number -1;
                this.setState({ number: newCount })
            }
        }
    }
    render(){
        return (
            <div style={CounterStyle}>
                <button style={buttonStyle} onClick={this.decreace}>
                    -
                </button>
                <div>{this.state.number}</div>
                <button style={buttonStyle} onClick={this.increase}>
                    +
                </button>
            </div>
        )
    }

}


export default Counter; 

const CounterStyle = {
    backgroundColor: '#F6F7F8',
    display: 'flex',
    flexDirection: 'row',
    width: '110px',
    height: '48px',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '25px',
    borderRadius: '5px'
}

const buttonStyle = {
    backgroundColor: "#F6F7F8",
    color: "#33A0FF",
    borderColor: '#F6F7F8',
    // height: "46px",
    width: "25px",
    textAlign: "center",
    padding: "0"
}