import React from "react";
import { Button } from 'react-materialize';



function SortBtn(props) {
  return (
    <div>
      <Button onClick={sortData}>SORT</Button>
    </div>

  )

  function sortEmployees(data) {
    return console.log(data.sort());
  }

  function sortData() {
    alert('sorting');
    sortEmployees(props.employees[1].lastName)
  }

}

export default SortBtn;

