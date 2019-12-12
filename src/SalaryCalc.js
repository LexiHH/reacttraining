import React from 'react';

class Salary extends React.Component{
    render(){
        let pay=parseInt(this.props.pay)
        let tax=0
        let name=this.props.name
        if(pay<=500){
            tax=0
        }
        else if(pay>500 && pay<=1000){
            tax=(0.15*pay).toFixed(0)
        }
        else if(pay>1000 && pay<=2000){
            tax=(0.19*pay).toFixed(0)
        }
        else if(pay>2000){
            tax=(0.21*pay).toFixed(0)
        }
        let netsalary=pay-tax
        console.log(pay)
        console.log(tax)
        return(
            <table style={{border:"dashed"}}>
                <tbody>
                    <tr>
                        <th>
                            Employee Name
                        </th>
                        <td>
                            {name}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Salary
                        </th>
                        <td>
                            {pay}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Tax
                        </th>
                        <td>
                            {tax}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Net Salary
                        </th>
                        <td>
                            {netsalary}
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

class SalaryCalc extends React.Component{
    render() {
        return(
            <div>
                <Salary name="Lexi" pay={1750}></Salary>
            </div>
        )
    }
}
export default SalaryCalc;