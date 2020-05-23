import React from "react";
import { useCreateForm } from "./CreateHooks";
import Axios from 'axios';

const CreateClassroom = React.forwardRef((props, ref) => {
  const onCreate = () => {
    const postData = async () => {
      const result = await Axios.post('/api/classrooms', {classroom:{...inputs}});
      console.log(`Creation ${result.data.response}: ${inputs.name} `);
      props.action();  //triggers re-render of parent because in useEffect hook
    };
    postData();
  };

  const { inputs, handleInputChange, handleSubmit } = useCreateForm(onCreate);

  return (
    <form onSubmit={handleSubmit} ref={ref}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={inputs.name || ""}
          required
        />
      <button type="submit">&#10003;</button>
      <button type="button" onClick={props.cancel}>&#120;</button>
    </form>
  );
});
export default CreateClassroom;