import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count : 0
    }


    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    } 

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    } 

    render() {
        return (
            <div>
                <h3>Counter</h3>
                <br/><br/>
                <div className = "button" onClick={this.increment}>
                    +
                </div>
                <span>
                    {this.state.count}
                </span>
                <div className = "button" onClick={this.decrement}>
                    -
                </div>
            </div>
        )
    }
}
