import React, { useState } from 'react';
import styles from './../../stylesheets/components/usedropdown.module.scss';

const useDropdown = ( label, defaultId, options ) => {
  const [state, setState] = useState(defaultId);
  const id = `use-dropdown-${label.replace(" ", " ").toLowerCase()}`;

  const Dropdown = () => ( 
    <label htmlFor ={label} className={styles.label}>
        {label}
      <br/>
      <select
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled = {options.length === 0}
        className={styles.select}
      >
        <option>Select a {label} </option>
        {options.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState]
 };

export default useDropdown;