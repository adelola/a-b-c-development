import React from "react";
import Axios from 'axios';
import { useCreateForm } from "./CreateHooks";

const EditClassroom = (props) => {
  const onEdit = () => {
    const putData = async () => {
        console.log(inputs);
      const result = await Axios.put(`/api/classrooms/${props.id}`, {classroom:{...inputs}});
      console.log(result.data)
      props.cancel()
    };
    putData();
  }

  const { inputs, handleInputChange, handleSubmit } = useCreateForm(onEdit);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={inputs.name || props.inputs}
          required
          autoFocus
        />
      </div>
      <button type="submit">Update</button>
      <button type="cancel" onClick={props.cancel}>Cancel</button>
    </form>
  );
};

export default EditClassroom