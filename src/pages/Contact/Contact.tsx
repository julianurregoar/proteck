import React from "react";
import { useStepState } from "-/src/hooks/useStepState";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { FinalStep } from "./FinalStep";

import styles from './Contact.module.scss'

export const Contact = () => {
  const { count } = useStepState()

  return (
    <div className={styles.Container}>
      <h1>Step {count}</h1>
      {count === 1 && <StepOne />}
      {count === 2 && <StepTwo />}
      {count === 3 && <FinalStep />}
    </div>
  );
}