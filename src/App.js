import React from 'react';
import './App.css';
import List from "./components/List";
import FilteredList from "./components/FilteredList";
import SortBtn from "./components/SortBtn";
import FilterBtn from "./components/FilterBtn";

const employees = [
  {
    id: 1,
    firstName: 'Jill',
    lastName: 'Powell',
    title: 'Technician',
    department: 'IT',
    salary: 68000
  },
  {
    id: 2,
    firstName: 'George',
    lastName: 'Harris',
    title: 'Manager',
    department: 'Human Resources',
    salary: 70000
  },
  {
    id: 3,
    firstName: 'Susan',
    lastName: 'Miller',
    title: 'Customer Service Rep',
    department: 'Customer Service',
    salary: 60000
  },
  {
    id: 4,
    firstName: 'Eric',
    lastName: 'Davis',
    title: 'Network Engineer',
    department: 'Network Operations',
    salary: 73500
  }
]




function App() {
  
  return (
    <>
      <List employees={employees} /><br></br>
      <FilteredList employees={employees} /><br></br>
      <FilterBtn employees={employees} /><br></br>
      <SortBtn employees={employees} />
    </>
  )
}

export default App;
