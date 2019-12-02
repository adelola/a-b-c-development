import React from "react";
import { useCreateForm } from "./CreateHooks";
import Axios from 'axios';

const CreateStudent = (props) => {

  const onCreate = () => {
    const postData = async () => {
      const result = await Axios.post(`/api/classrooms/${props.classroom}/students`, {student:{...inputs} });
      console.log(`Creation ${result.data.response}: ${inputs.name} `);
      props.action();  //triggers re-render of parent because in useEffect hook
    };
    postData();
  };

  const { inputs, handleInputChange, handleSubmit } = useCreateForm(onCreate);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={inputs.name || ""}
          required
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};
export default CreateStudent;