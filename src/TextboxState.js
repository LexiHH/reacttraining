import React from 'react';

export default class TextboxState extends React.Component{
    constructor(){
        super()
        this.state={
            data:""
        }
        this.changeTextbox=this.changeTextbox.bind(this)
    }
    changeTextbox(e){
        let string=""
        for(let i=0;i<e.target.value.length;i++){
            let sub=e.target.value.substring(i,i+1)
            if(sub>='A' && sub<='Z'){
                string+=sub.toLowerCase()
            } 
            else if(sub>='a' && sub<='z'){
                string+=sub.toUpperCase()
            }
            // else if(sub>=0 && sub<=9){
            //     string+=(parseInt(sub)*2)
            // }
            else if(Number.isInteger(parseInt(sub))){
                string+=(parseInt(sub)*2)
            }
            else{
                string+=sub
            }
        }
        this.setState({
            data:string
        })
    }
    render(){
        return(
            <div>
                <input onChange={this.changeTextbox}/>
                <input value={this.state.data}/>
            </div>
        )
    }
}