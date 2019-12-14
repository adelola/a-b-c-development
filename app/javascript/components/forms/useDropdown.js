import React, { useState } from 'react';

const useDropdown = ( label, defaultId, options ) => {
  
  const defaultItem = defaultId ? (options.find(x => x.id === defaultId)).name : "";

  const [state, setState] = useState(defaultItem);
  const id = `use-dropdown-${label.replace(" ", " ").toLowerCase()}`;
  
  const Dropdown = () => (
    <label htmlFor ={label} >
        {label}
      <select
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled = {options.length === 0}
      >
        <option>Select a {label} </option>
        {options.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </select>
    </label>
  );
  ;

  return [state, Dropdown, setState]
 };

export default useDropdown;