import React from 'react';

export default class Records extends React.Component{
    constructor() {
        super();
        this.state={
            allrecords:[
                {Regno:1,
                Name:'Lexi',
                Marks:80},
                {Regno:2,
                Name:'Alex',
                Marks:90}
            ]
        };
    }
    filterBy(){
        this.setState({
            allrecords:this.state.allrecords.filter(record =>{
                if(!record.Name.search(document.getElementById("filter").value)){
                    return true
                }
            })
        })
    }
    deleteRecord(reg){
        this.setState({
            allrecords:this.state.allrecords.filter(record =>{
                if(record.Regno!==reg){
                    return true
                }
            })
        })
    }
    addRecord(){
        let reg = parseInt(document.getElementById("reg").value)
        let name = document.getElementById("name").value
        let marks = parseInt(document.getElementById("marks").value)
        this.state.allrecords.push({
            Regno:reg,
            Name:name,
            Marks:marks
        })
        document.getElementById("reg").value=""
        document.getElementById("name").value=""
        document.getElementById("marks").value=""
        this.setState({
            allrecords: this.state.allrecords
        })
        
    }
    showGrade(data) {
        let Perc = data / 150 * 100;
        let Grade = "";

        if (Perc < 60) {
            Grade = "Fail";
        }
        else if (Perc >= 60 && Perc < 70) {
            Grade = "C";
        }
        else if (Perc >= 70 && Perc < 80) {
            Grade = "B";
        }
        else if (Perc >= 80 && Perc < 90) {
            Grade = "A";
        }
        else if (Perc >= 90 && Perc <= 100) {
            Grade = "A+";
        }
        return Grade;
    }
    render(){
        return(
            <div>
                <div>
                    <div>
                        <input placeholder="Regno" id="reg"></input>
                    </div>
                    <div>
                        <input placeholder="Name" id="name"></input>
                    </div>
                    <div>
                        <input placeholder="Marks" id="marks"></input>
                    </div>
                    <div>
                        <button type="button" onClick={() => this.addRecord()}>Add New</button>
                    </div>                    
                </div>
                <div>
                    <br></br>
                    <input placeholder="Filter By Name" id="filter" onChange={() => this.filterBy()}></input>
                </div>
                <table style={{textAlign:'center'}}>
                    <tbody>
                        <tr>
                            <th>
                                Regno
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Marks
                            </th>
                            <th>
                                Grade
                            </th>
                        </tr>
                        {this.state.allrecords.map(each => {
                            return (
                                <tr>
                                    <td style={{margin:'5px'}}>{each.Regno}</td>
                                    <td style={{margin:'5px'}}>{each.Name}</td>
                                    <td>{each.Marks}</td>
                                    <td>{this.showGrade(each.Marks)}</td>
                                    <td><button type="button" onClick={() => this.deleteRecord(each.Regno)}>
                                        Delete
                                    </button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}