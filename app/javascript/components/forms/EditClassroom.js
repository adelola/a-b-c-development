import React from "react";
import Axios from 'axios';
import { useCreateForm } from "./CreateHooks";
import styles from './../../stylesheets/components/classroomshow';
import AcceptIcon from '../../images/noun_Check_2066982.svg';
import CancelIcon from '../../images/noun_cancel_808437.svg';

const EditClassroom = (props) => {
  const onEdit = () => {
    const putData = async () => {
        // console.log(inputs);
      const result = await Axios.put(`/api/classrooms/${props.id}`, {classroom:{...inputs}});
      // console.log(result.data)
      props.cancel()
    };
    putData();
  }

  const { inputs, handleInputChange, handleSubmit } = useCreateForm(onEdit);

  return (
    <form onSubmit={handleSubmit} className={styles.editForm}>
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
      <button type="submit" className={styles.editAccept}>
        <AcceptIcon height={50} width={50}/>
      </button>
      <button type="cancel" onClick={props.cancel} className={styles.editCancel}>
        <CancelIcon height={50} width={50}/>
      </button>
    </form>
  );
};

export default EditClassroom