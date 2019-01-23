import React, { Component } from 'react';
const subjects = ['React','Angular','Nodejs'];

export default class Loop extends Component{
    render(){
        return(
            <div>
                {subjects.map(sub => (<p>{sub}</p>))}
            </div>
        );
    }
}