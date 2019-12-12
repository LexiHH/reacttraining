import React from 'react';

export default class IncrementState extends React.Component{
    constructor(){
        super()
        this.state={
            data:15
        }
        this.incrementData=this.incrementData.bind(this)
        this.detrementData=this.detrementData.bind(this)
    }
    incrementData(){
        this.setState({
            data:this.state.data+1
        })
    }
    detrementData(){
        this.setState({
            data:this.state.data-1
        })
    }
    render(){
        return(
            <div>
                <div>
                    {this.state.data}
                </div>
                <button onClick={this.incrementData}>++</button>
                <button onClick={this.detrementData}>--</button>
            </div>
        )
    }
}