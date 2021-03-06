import React, { useState } from "react";
import 'materialize-css';
import { Button, Dropdown } from 'react-materialize';

export function FilterSelect() {

  const [filterChoice, setFilterChoice] = useState({
    filterChoice: 'IT'
  })

  return (
    <div>
      <Dropdown
        id="filter-drop"
        options={{
          alignment: 'left',
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: false,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250
        }}
        trigger={<Button node="button">FILTER</Button>}
        onChange={()=>setFilterChoice(filterChoice)}
      >
        <a href="#">
          Title
  </a>
        <a href="#">
          Department
  </a>
      </Dropdown>
    </div>
  );

  function filterData() {
    alert('filtering');
    // filterEmployees()
    console.log(`filterChoice = `, filterChoice);


  }
}

export default FilterSelect;

