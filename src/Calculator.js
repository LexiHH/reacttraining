import React from 'react';

class Calculate extends React.Component{
    render(){
        let operation=this.props.operation
        let no1=parseInt(this.props.no1)
        let no2=parseInt(this.props.no2)
        let result=""
        let longoperation=""
        if(operation=="add"){
            result=(no1+no2).toFixed(1)
            longoperation="plus"
        }
        else if(operation=="sub"){
            result=(no1-no2).toFixed(1)
            longoperation="minus"
        }
        else if(operation=="mul"){
            result=(no1*no2).toFixed(1)
            longoperation="multiplied by"
        }
        else if(operation=="div"){
            if(no2==0){
                result="not available as you cannot divide by zero"
                longoperation="divided by"
            }
            else{
                result=(no1/no2).toFixed(1)
                longoperation="divided by"
            }
        }
        return(
            <div>
                <h1>The result of {no1} {longoperation} {no2} is {result}</h1>
            </div>
        )
    }
}

class Calculator extends React.Component{
    render() {
        return(
            <div>
                <Calculate operation="add" no1={12} no2={3}></Calculate>
                <Calculate operation="sub" no1={12} no2={3}></Calculate>
                <Calculate operation="mul" no1={12} no2={3}></Calculate>
                <Calculate operation="div" no1={12} no2={3}></Calculate>
                <Calculate operation="div" no1={12} no2={0}></Calculate>
            </div>
        )
    }
}
export default Calculator;