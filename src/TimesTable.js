import React from 'react';

class Calculate extends React.Component {
    render() {
        let table = parseInt(this.props.table)
        let start = parseInt(this.props.start)
        let end = parseInt(this.props.end)
        let result = []
        for (let i = start; i <= end; i++) {
            result.push(<h2>{i}*{table}={(i * table)}</h2>)
        }
        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    <h1>Times table of {table} from {start} to {end}</h1>
                </div>
                <div>
                    {result}
                </div>

                {/* <div>
                    {result.map(mine => {
                        return (
                        <div>
                            <div>{mine}</div><br/>
                        </div>
                        );
                    })}
                </div> */}

            </div>
        )
    }
}

class TimesTable extends React.Component {
    render() {
        return (
            <div>
                <Calculate table={2} start={3} end={6}></Calculate>
            </div>
        )
    }
}
export default TimesTable;