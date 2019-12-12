import React from 'react';

export default class Message extends React.Component{
    message(){
        alert("Hello my friend")
    }
    render(){
        return(
            <button onClick={this.message}>Click</button>
        )
    }
}