import React from 'react';

class Address extends React.Component{
    render(){
        return(
            <div>
                Manchester
            </div>
        )
    }
}

class NestedRender extends React.Component{
    render() {
        return(
            <div>
                <h1>Information</h1>
                <Address/>
                <Address/>
            </div>
        )
    }
}
export default NestedRender;
