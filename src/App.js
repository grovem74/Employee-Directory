import React from 'react';
import './App.css';
import List from "./components/List";
import FilteredList from "./components/FilteredList";
import FilterSelect from "./components/FilterSelect";
import SortSelect from "./components/SortSelect";
import 'materialize-css';
import { Container, Button, Card, Row, Col } from 'react-materialize';

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
      <Container>
        <Row>
          <Col m={3}></Col>
          <Col m={6} className='blue'>
            <List employees={employees} /><br></br>
            <FilteredList employees={employees} /><br></br>
          </Col>
          <Col m={3}></Col>
        </Row>
        <Row>
          <Col m={3}></Col>
          <Col m={1}>
            <SortSelect employees={employees} />
          </Col>
          <Col m={1}>
            <FilterSelect employees={employees} />
          </Col>
          <Col m={5}></Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
