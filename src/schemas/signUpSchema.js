import * as Yup from "yup";
const signUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Your Username must be at least 2 characters.")
    .max(25, "Your Username cannot be longer than 255 characters.")
    .required("A Username is required."),
  displayName: Yup.string()
    .min(1, "Please enter a Display Name.")
    .max(25, "Your Display Name cannot be greater than 25 characters.")
    .required("A Display name is required."),
  password: Yup.string()
    .min(8, "Your password must be at least 8 characters long.")
    .max(30, "Your password cannot be greater than 30 characters.")
    .required("Please enter a password."),
  passwordConfirm: Yup.string()
    .min(8, "Your password must be at least 8 characters long.")
    .max(30, "Your password cannot be greater than 30 characters.")
    .required("Please enter a password."),
  childcareStatus: Yup.number()
    .min(1, "Please select a childcare worker status.")
    .max(3, "Please select a childcare worker status.")
    .required("Please select a childcare worker status."),
  visitSource: Yup.number()
    .min(1, "Please select where you heard about us from!")
    .max(4, "Please select where you heard about us from!")
    .required("Please select where you heard about us from!"),
});
export default signUpSchema;
