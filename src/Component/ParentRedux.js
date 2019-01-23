import React, { Component } from 'react';
import { connect } from 'react-redux';
import Child from './Child';
class ParentRedux extends Component{
    constructor(props){
        super(props);
        this.state = {count : 1}
    }
    render(){
        return(
            <div>
                <h3>{`Value = ${this.props.count}`}</h3>
                <Child />
            </div>
        );
    }
}

export default connect(state => ({count : state.count}))(ParentRedux);
