import React from "react";
import { isUserForm, TForm } from "-/src/apollo/fetchPolicy/fetchPolicy";
import { useStepState } from "-/src/hooks/useStepState";
import { useReactiveVar } from "@apollo/client";
import { useForm } from "react-hook-form";
import styles from './Contact.module.scss'


export const StepTwo = () => {
  const { register, handleSubmit, errors } = useForm<Pick<TForm, 'city' | 'address' | 'insurance'>>();
  const userForm = useReactiveVar(isUserForm);
  const { increment, decrement } = useStepState()
  const onSubmit = (data: Pick<TForm, 'city' | 'address' | 'insurance'>) => {
    const { city, address, insurance } = data
    isUserForm({
      ...userForm,
      city,
      address,
      insurance
    })
    increment()
  };

  console.log("Step 1", userForm)

  return (
    <form className={styles.Container} onSubmit={handleSubmit(onSubmit)}>
      <label>City</label>
      <input name="city" ref={register({ required: true })} defaultValue={userForm.city} />
      <label>Address</label>
      <input name="address" ref={register({ required: true })} defaultValue={userForm.address} />
      <label>Insurance</label>
      <input name="insurance" ref={register} defaultValue={userForm.insurance} />
      {Object.keys(errors).length !== 0 &&
        <h4 className={styles.Error}>City and address are required</h4>
      }
      <div className={styles.ButtonsContainer}>
        <button className={styles.BackButton} onClick={decrement} >
          Back
      </button>
        <button className={styles.NextButton} type="submit" >
          Next
      </button>
      </div>
    </form>
  );
}