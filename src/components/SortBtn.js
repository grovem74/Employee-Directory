import React from "react";



function SortBtn(props) {
  return (
    <button onClick={sortData}>SORT</button>
  )

  function sortEmployees(data) {
    return console.log(data.sort());
    // return console.log("hi");
  }

  function sortData() {
    alert('sorting');
    sortEmployees(props.employees[1].lastName)
  }

}

export default SortBtn;

