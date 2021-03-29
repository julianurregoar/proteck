import React from "react";
import { isUserForm } from "-/src/apollo/fetchPolicy/fetchPolicy";
import { useRouter } from 'next/router'
import { useStepState } from "-/src/hooks/useStepState";
import { useReactiveVar } from "@apollo/client";
import { useForm } from "react-hook-form";
import styles from './Contact.module.scss'

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other"
}

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
  lastName: string
}


export const StepOne = () => {
  const { register, handleSubmit, errors } = useForm<IFormInput>();
  const userForm = useReactiveVar(isUserForm);
  const { increment } = useStepState()

  const router = useRouter()
  const onSubmit = (data: IFormInput) => {
    const { firstName, gender, lastName } = data
    isUserForm({
      ...userForm,
      firstName,
      gender,
      lastName
    })
    increment()
  };

  return (
    <div>
      <form >
        <label>First Name</label>
        <input name="firstName" ref={register({ required: true })} defaultValue={userForm.firstName} />
        <label>Last Name</label>
        <input name="lastName" ref={register({ required: true })} defaultValue={userForm.lastName} />
        {Object.keys(errors).length !== 0 &&
          <h4 className={styles.Error}>First name and last name are required</h4>
        }
        <label>Gender Selection</label>
        <select name="gender" ref={register} defaultValue={userForm.gender}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </form>
      <div className={styles.ButtonsContainer}>
        <button className={styles.BackButton} onClick={() => router.back()} >
          Back
      </button>
        <button className={styles.NextButton} onClick={handleSubmit(onSubmit)} >
          Next
      </button>
      </div>
    </div>

  );
}