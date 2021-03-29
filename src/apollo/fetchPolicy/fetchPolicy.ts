import { makeVar, TypePolicies } from '@apollo/client';


export type TForm = {
  firstName: string,
  lastName: string,
  gender: string,
  city: string,
  address: string,
  insurance: string,
  receiveNotication: false
}

export const isUserForm = makeVar<TForm>({
  firstName: "",
  lastName: "",
  gender: "",
  city: "",
  address: "",
  insurance: "",
  receiveNotication: false
});

export const isStepForm = makeVar<number>(1)

export const resetStore = () => {
  isUserForm({
    firstName: "",
    lastName: "",
    gender: "",
    city: "",
    address: "",
    insurance: "",
    receiveNotication: false
  })
  isStepForm(1)
}

export const typePolicies: TypePolicies = {
  Query: {
    fields: {
      userForm: {
        read() {
          return isUserForm();
        },
      },
      stepForm: {
        read() {
          return isStepForm();
        },
      },
    },
  },
};