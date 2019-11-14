import React, { Component } from 'react';
import {reset} from "../redux-store/reset-actions"
import {connect} from "react-redux";

class Reset extends Component {

    resetCounter = () => {
        return this.props.reset();
    }

    render() {
        console.log("reset render()");

        return (
            <div className = "button" onClick={this.resetCounter}>
                Reset  {this.props.count}
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log("reset map state :", state);

    return {
      count: state.resetReducer.count
    };
  }

  const mapDispatchToProps = {
    reset  
};

  export default connect(mapStateToProps, mapDispatchToProps)(Reset); 

