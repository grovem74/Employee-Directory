import React from "react";
import FilterSelect from "./FilterSelect";
import FilterChoice from "./FilterSelect";

function FilterBtn() {
  return (
    <div>
      <FilterSelect />
      <button onClick={filterData}>FILTER</button> 
    </div>
  )

  function filterData() {
    alert('filtering');
    // filterEmployees()
    console.log(FilterChoice.value);


  }

}

export default FilterBtn;

