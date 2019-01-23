import React, { Component } from 'react';
import Word from './Word';
import Form from './Form';
import Filter from './Filter';
import {connect} from 'react-redux';
import axios from 'axios';
import * as actionCreatetors from '../redux/reducer/actionCreators';

class List extends Component{
    componentDidMount(){
        const URL = 'http://localhost:4000/word'
        axios.get(URL)
        .then(response => this.props.setWord(response.data.words));
    }
    get FilterWord(){
        return(
        this.props.words.filter(w => {
            if(this.props.filterMode === 'Show_Memoried' && !w.isMemorized) return false; 
            if(this.props.filterMode === 'Show_Forgot' && w.isMemorized) return false;
            return true;    
        }));
       
    }
    render(){
        return(
            <div>
                    <Form />
                <br/>
                    <Filter />
                {this.FilterWord.map(word => 
                    <Word 
                        word={word}
                        key={word._id}/>)}
            </div>
        );
    }
}

const mapState = state => ({words : state.words ,filterMode : state.filterMode}); 
export default connect(mapState,actionCreatetors)(List);