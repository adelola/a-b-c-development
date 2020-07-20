import React from "react";
import Axios from 'axios';
import { useCreateForm } from "./CreateHooks";
import styles from './../../stylesheets/components/studentshow.module.scss';
import Check from '../../images/check.svg';
import Cancel from '../../images/cancel.svg';

const EditStudent = (props) => {
  const onEdit = () => {
    const putData = async () => {
      const result = await Axios.put(`/api/classrooms/${props.classID}/students/${props.id}`, {student:{...inputs}});
      console.log(result.data)
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
      <div className={styles.editButtons}>
        <button type="button" onClick={props.cancel} className={styles.editCancel}>
          <Cancel width={38} height={38} />
        </button>
        <button type="submit" className={styles.editAccept}>
          <Check width={22} height={22} />
        </button> 
      </div> 
    </form>
  );
};

export default EditStudent