import React from 'react';

export default class UsingState extends React.Component{
    constructor(){
        super()
        this.state={
            data:15
        }
        this.changeData=this.changeData.bind(this)
    }
    changeData(){
        this.setState({
            data:76
        })
    }
    render(){
        return(
            <div>
                <div>
                    {this.state.data}
                </div>
                <button onClick={this.changeData}>Change</button>
            </div>
        )
    }
}