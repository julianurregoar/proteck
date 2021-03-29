import { useReactiveVar } from "@apollo/client";
import { isStepForm } from "../apollo/fetchPolicy/fetchPolicy";

export const useStepState = () => {
  const currentStep = useReactiveVar(isStepForm);
  const decrement = () => isStepForm(currentStep - 1);
  const increment = () => isStepForm(currentStep + 1);
  return { count: currentStep, decrement, increment };
};