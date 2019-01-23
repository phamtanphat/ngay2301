import React , {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/reducer/actionCreators'
import axios from 'axios';
//stateless component
//functional component
// export function Word(){
//     return(
//         <div>
//             <h3>One</h3>
//             <p3>Mot</p3>
//         </div>
//     );
// }
// const Word = (props) =>{
//     return(
//         <div>
//             <h3 style={{color : props.wordinfo.isMemorized ? 'green' : 'red'}}>
//                 {props.wordinfo.en}
//             </h3>
//             <p3>Mot</p3>
//         </div>
//     );
// }
// export default Word;

class Word extends Component{
    constructor(props){
        super(props);
        this.removeWord = this.removeWord.bind(this);
    }
    removeWord(){
        const {word , removeWord} = this.props;
        const URL = 'http://localhost:4000/word/' + word._id;
        axios.delete(URL)
        .then(() => removeWord(word._id));
    }
    render(){
        const { word , toggleWord} = this.props
        const {en , vn , isMemorized} = word;
        return(
        <div className="word">
            <div className="word-container">
            <h3 className="text-success">{en}</h3>
            <h3 className="text-danger">
                {isMemorized ? '----' : vn}
            </h3>
            </div>
            <div className="btn-container">
            <button
                className={isMemorized ? "btn btn-success" : "btn btn-danger"}
                onClick={() => toggleWord(word.id)}>
                {isMemorized ? 'Forgot' : 'isMemorized'}
            </button>
            <button 
                className="btn btn-warning"
                onClick={this.removeWord}>
                Remove
            </button>
            </div>
        </div>
        );
    }
}
export default connect(null,actionCreators)(Word);
