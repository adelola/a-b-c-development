import React from 'react';

const StudentItem = (props) => {
    
    const name = props.name;
    const handleDelete = props.handleDelete;

    return (
      <React.Fragment>
        {name}
        <button type="button" onClick={handleDelete}>Delete Student</button>
      </React.Fragment>
    )
  
}

export default StudentItem