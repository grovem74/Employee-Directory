import React from "react";



function SortBtn(props) {
  return (
    <div className='container'>
      <button onClick={sortData}>SORT</button>
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

