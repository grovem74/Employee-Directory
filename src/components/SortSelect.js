import React from "react";
import 'materialize-css';
import { Button, Dropdown } from 'react-materialize';

export let sortChoice = 'IT';
export function SortSelect() {


  return (
    <div>
      <Dropdown
        id="sort-drop"
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
        trigger={<Button node="button">SORT</Button>}
        onChange={sortData}
      >
        <a href="#">
          Last Name
  </a>
        <a href="#">
          Title
  </a>
        <a href="#">
          Department
  </a>
      </Dropdown>
    </div>
  );

  function sortData() {
    alert('sorting');
    console.log(`sortChoice.value `, sortChoice.value);


  }
}

export default SortSelect;

