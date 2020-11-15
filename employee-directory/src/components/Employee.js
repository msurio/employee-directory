import React from "react";
import EmployeeRow from "./EmployeeRow.js";
import compareNames from "./utils/compareNames"

function Employee(props){
    let employeesRecord = props.employees.slice(0);

    employeesRecord.sort(compareNames(1))
    return(
        <table>
            <thead>
                <tr>
                  <th>Full Name</th>  
                </tr>
            </thead>
            <tbody>
                {
                props.employees
                .map(employeeRecord => 
                    (<EmployeeRow employeeRecord={employeeRecord} key={employeeRecord.id.value}/>)
                }

            </tbody>
        </table>
    )
}

export default Employee;