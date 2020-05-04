import React from "react";
import './List.css';

function List(props) {
  return (
    <div>
      Employees
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Title</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
          {props.employees.map(employee => (

            <tr key={employee.id}>
              <td >{employee.firstName}</td>
              <td >{employee.lastName}</td>
              <td >{employee.title}</td>
              <td >{employee.department}</td>
              <td >{employee.salary}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;