import React, { useState } from "react";
import { isUserForm, resetStore } from "-/src/apollo/fetchPolicy/fetchPolicy";
import { useStepState } from "-/src/hooks/useStepState";
import { useReactiveVar } from "@apollo/client";
import styles from './Contact.module.scss'
import { useRouter } from "next/router";



export const FinalStep = () => {
  const userForm = useReactiveVar(isUserForm);
  const [send, setSend] = useState(false)
  const { decrement } = useStepState()
  const router = useRouter()

  const cleanStates = () => {
    setSend(true)
    setTimeout(() => {
      router.push('/')
      resetStore()
    }, 5000)
  }


  const { firstName, lastName, insurance, city, gender, address } = userForm
  return (
    <>
      {send ?
        <div>
          Your information has been sent!
        </div>
        :
        <form className={styles.Container}>
          <h1>Resume</h1>
          <label>Name</label>
          <h2>{firstName} {lastName}</h2>

          <label>Gender</label>
          <h2>{gender}</h2>

          <label>City</label>
          <h2>{city}</h2>

          <label>Address</label>
          <h2>{address}</h2>

          {insurance &&
            <div>
              <label>Insurance</label>
              <h2>{insurance}</h2>
            </div>
          }

          <div className={styles.ButtonsContainer}>
            <button className={styles.BackButton} onClick={decrement} >
              Back
            </button>
            <button className={styles.NextButton} onClick={cleanStates} >
              Send
            </button>
          </div>
        </form>
      }
    </>
  );
}