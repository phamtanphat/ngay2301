import React, { Component } from 'react';
import {connect} from 'react-redux';

class Child extends Component {
    render(){
        const {dispatch } = this.props;
        return(
            <div>
                <button 
                    className="btn btn-success"
                    onClick={() =>dispatch({type : 'INCREASE'})}>
                    Increase
                </button>
                <button 
                    className="btn btn-danger"
                    onClick={() =>dispatch({type : 'DESCREASE'})}>
                    Decrease    
                </button>
                <button 
                    className="btn btn-warning"
                    onClick={() =>dispatch({type : 'RESET'})}>
                    Reset
                </button>
            </div>
        );
    }
}
export default connect()(Child);