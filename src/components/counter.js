import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    // state = {
    //     count : 0
    // }


    increment = () => {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.props.dispatch({ type: "INCREMENT" });
    } 

    decrement = () => {
        // this.setState({
        //     count: this.state.count - 1
        // })
        this.props.dispatch({ type: "DECREMENT" });
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
                    {this.props.count}
                </span>
                <div className = "button" onClick={this.decrement}>
                    -
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }


  export default connect(mapStateToProps)(Counter); 
