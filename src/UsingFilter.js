import React from 'react';

export default class UsingFilter extends React.Component {
    render() {
        let array = [10,20,30,40]
        let newarray = array.filter(function(data){
            let calculated=data*2 
            if(calculated<=50){
                return true
            }
            else{
                return false
            }
        })
        return(
            <div>
                {newarray.map(function(each){
                    return (
                        <div>{each}</div>
                    )
                })}
            </div>
        )
    }
}