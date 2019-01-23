import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../redux/reducer/actionCreators'
class Filter extends Component {
    render() {
        return (
            <select
                className="word"
                value={this.props.filterMode}
                onChange={evt => this.props.setFiltermode(evt.target.value)}>
                <option value="Show_All">Show All</option>
                <option value="Show_Memoried">Show Memoried</option>
                <option value="Show_Forgot">Show Forgot</option>
            </select>
        );
    }
}

const mapState = state => ({filterMode : state.filterMode});
export default connect(mapState,actionCreators)(Filter);
