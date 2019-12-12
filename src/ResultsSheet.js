import React from 'react';

class Results extends React.Component{
    render(){
        let total=this.props.physics + this.props.chemistry + this.props.maths
        let percentage=total *(100/450)

        return(
            <div>
                <h1>Results sheet of {this.props.name}</h1>
                <h2>Physics= {this.props.physics}</h2>
                <h2>Physics= {this.props.chemistry}</h2>
                <h2>Physics= {this.props.maths}</h2>
                <h2>Total= {total}</h2>
                <h2>Percentage= {percentage.toFixed(2)}</h2>
            </div>
        )
    }
}

class ResultsSheet extends React.Component{
    render() {
        return(
            <div>
                <Results name="Lexi" physics={100} chemistry={100} maths={100}></Results>
            </div>
        )
    }
}
export default ResultsSheet;