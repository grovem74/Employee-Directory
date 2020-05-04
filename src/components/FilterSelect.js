import React from "react";

export let filterChoice = 'IT';
export function FilterSelect() {


  return (
    <div className='container'>
      <div className='row'>
        <div classname='input-field'>
          <select className="browser-default" id="filter" onChange={(event) => this.setState({ value: event.target.value })}>
            {/* <select id="filter" onChange={filterChange}> */}
            <option value="lastName">Last Name</option>
            <option value="title">Title</option>
            <option value="department">Department</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterSelect;

