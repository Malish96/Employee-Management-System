import React from 'react';
import Delete from "../DeleteComponent/Delete";
import Edit from "../EditComponent/Edit";
import "./Table.css";

const Table = ({data}) => {


    return (
        <div>
            <div className="wrap-table100">
                <div className="table100">
                    <table>
                        <thead>
                        <tr className="table100-head">
                            <th className="column1">Employee id</th>
                            <th className="column2">First name</th>
                            <th className="column3">Last name</th>
                            <th className="column4">Department</th>
                            <th className="column5">Designation</th>
                            <th className="column7">Edit</th>
                            <th className="column8">Delete</th>
                        </tr>
                        </thead>

                        <tbody>
                        {data.map((employee) => <tr key={employee.employeeId}>
                            <td className="column1">{employee.employeeId}</td>
                            <td className="column2">{employee.firstName}</td>
                            <td className="column3">{employee.lastName}</td>
                            <td className="column4">{employee.department}</td>
                            <td className="column5">{employee.designation}</td>
                            <td className="column7"><Edit/></td>
                            <td className="column8"><Delete/></td>
                        </tr>)


                        }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Table;
