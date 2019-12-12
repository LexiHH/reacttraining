import React from 'react';

export default class Calculate extends React.Component {
    render() {
        let array = [1,2,3,4]
        let newarray = array.map(function(data){
            let calculated=data*2 
            return <div>{calculated}</div>
        })
        return(
            newarray
        )
    }
}