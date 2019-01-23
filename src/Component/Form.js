import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../redux/reducer/actionCreators'
import axios from 'axios';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEn: '',
            txtVn: ''
        }
        this.addword = this.addword.bind(this);
    }
    addword(){
        const { txtEn, txtVn } = this.state;
        const { addWord } = this.props;
        const URL = 'http://localhost:4000/word';
        axios.post(URL , {en : txtEn , vn : txtVn})
        .then(response =>{
            const { success , word} = response.data;
            if(!success) return alert('Can not add word');
            addWord(word);           
        });
        this.setState({txtEn : '' , txtVn : ''});
    }
    render() {
        const { txtEn, txtVn } = this.state;
        const { shouldShowForm , toggleForm} = this.props;
        if (!shouldShowForm) return (
            <button
                className="btn btn-success"
                style={{ width: 200, margin: 10 }}
                onClick={toggleForm}>
                +
            </button>
        );
        return (
            <div className="form-group word-from" >
                <input
                    placeholder="English"
                    className="form-control"
                    value={txtEn}
                    onChange={evt => this.setState({txtEn : evt.target.value})}/>
                <br />
                <input
                    placeholder="Vietnamese"
                    className="form-control"
                    value={txtVn}
                    onChange={evt => this.setState({txtVn : evt.target.value})}/>
                <br />
                <div className="btn-container">
                    <button
                        className="btn btn-success"
                        onClick={this.addword}>
                        Add word
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={toggleForm}>
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
}

const mapState = state => ({shouldShowForm : state.shouldShowForm});
export default connect(mapState,actionCreators)(Form);