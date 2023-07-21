import * as Yup from "yup";
const trackerDataSchema = Yup.object().shape({
  isFormula: Yup.boolean().required("Please choose an option."),
  calsPerScoop: Yup.number().required("Please enter the calories per serving."),
  scoops: Yup.number().required(
    "Please enter the number of scoops for this feeding."
  ),
  ouncesOfWater: Yup.number()
    .min(1, "Please select a childcare worker status.")
    .max(3, "Please select a childcare worker status.")
    .required("Please select a childcare worker status."),
  ouncesOfBMilk: Yup.number()
    .min(1, "Please select where you heard about us from!")
    .max(4, "Please select where you heard about us from!")
    .required("Please select where you heard about us from!"),
});
export default trackerDataSchema;
