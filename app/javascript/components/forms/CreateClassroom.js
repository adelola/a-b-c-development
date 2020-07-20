import React from "react";
import { useCreateForm } from "./CreateHooks";
import Axios from 'axios';
import Check from '../../images/check.svg';
import Cancel from '../../images/cancel.svg';

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
        <label>Name </label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={inputs.name || ""}
          required
        />
      <button type="button" onClick={props.cancel}>
        <Cancel width={30} height={30} />
      </button>
      <button type="submit">
        <Check width={25} height={25} />
      </button>
    </form>
  );
});
export default CreateClassroom;