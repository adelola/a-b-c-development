import React from 'react';
import Axios from 'axios';
import { useCreateForm } from './CreateHooks';
import styles from './../../stylesheets/components/classroomshow.module.scss';
import AcceptIcon from '../../images/noun_Check_2066982.svg';
import CancelIcon from '../../images/noun_cancel_808437.svg';

const EditClassroom = (props) => {
  const onEdit = () => {
    const putData = async () => {
      const result = await Axios.put(`/api/classrooms/${props.id}`, {classroom:{...inputs}});
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
   
      <button type="cancel" onClick={props.cancel} className={styles.editCancel}>
        <CancelIcon height={38} width={38}/>
      </button>
      <button type="submit" className={styles.editAccept}>
        <AcceptIcon height={49} width={49}/>
      </button>
    </form>
  );
};

export default EditClassroom