import React, { Component } from 'react';
import {reset} from "../redux-store/reset-actions"
import {connect} from "react-redux";

class Reset extends Component {

    resetCounter = () => {
        return this.props.reset();
    }

    render() {
        return (
            <div className = "button" onClick={this.resetCounter}>
                Reset  {this.props.count}
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log("reset map state :");

    return {
      count: state.count
    };
  }

  const mapDispatchToProps = {
    reset  
};

  export default connect(mapStateToProps, mapDispatchToProps)(Reset); 

