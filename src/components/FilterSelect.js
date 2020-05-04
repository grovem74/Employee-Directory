import React from "react";

export let filterChoice = 'IT';
export function FilterSelect() {


  return (
    <div>
      {/* <select id="filter" onChange={(event) => this.setState({ value: event.target.value })}> */}
      <select id="filter" onChange={console.log('filter option changed')}>
        <option value="lastName">Last Name</option>
        <option value="title">Title</option>
        <option value="department">Department</option>
      </select>
    </div>
  );
}

export default FilterSelect;

