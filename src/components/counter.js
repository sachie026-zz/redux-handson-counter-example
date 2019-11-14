import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux-store/actions';

class Counter extends Component {
    increment = () => {
        this.props.increment();
    } 

    decrement = () => {
        this.props.decrement();
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

  const mapDispatchToProps = {
    increment,
    decrement
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Counter); 
