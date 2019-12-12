import React from 'react';

class Information extends React.Component{
    render(){
        return(
            <h1>{this.props.name} lives in {this.props.address}</h1>
        )
    }
}

class UsingProps extends React.Component{
    render() {
        return(
            <div>
                <Information name="Lexi" address="Swindon"/>
                <Information name="Keiran" address="Cricklade"/>
            </div>
        )
    }
}
export default UsingProps;