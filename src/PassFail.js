import React from 'react';

class Results extends React.Component{
    render(){
        let total=this.props.physics + this.props.chemistry + this.props.maths
        let percentage=total *(100/450)
        let remarks=""
        if(percentage>60){
            remarks=<b><font color="green">Passed</font></b>
        }
        else{
            remarks=<b><font color="red">Failed</font></b>
        }
        return(
            <div>
                <h1>Results sheet of {this.props.name}</h1>
                <h2>Physics= {this.props.physics}</h2>
                <h2>Physics= {this.props.chemistry}</h2>
                <h2>Physics= {this.props.maths}</h2>
                <h2>Total= {total}</h2>
                <h2>Percentage= {percentage.toFixed(2)}</h2>
                <h1>You have {remarks}</h1>
            </div>
        )
    }
}

class PassFail extends React.Component{
    render() {
        return(
            <div>
                <Results name="Lexi" physics={100} chemistry={100} maths={100}></Results>
            </div>
        )
    }
}
export default PassFail;