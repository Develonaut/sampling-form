import * as Yup from "yup";

export const labels = {
  SAMPLE_SIZE: "Sample Size",
  SAMPLE_MEAN: "Sample Mean",
  STANDARD_DEVIATION: "Standard Deviation",
  HYPOTHESIZED_MEAN: "Hypothesized Mean",
  PERFORM_HYPOTHESIS_TEST: "Perform Hypothesis Test",
};

export const initialValues = {
  sampleSize: "",
  sampleMean: "",
  standardDeviation: "",
  enableHypothesisTest: false,
  hypothesizedMean: "",
};

export const validationSchema = Yup.object().shape({
  sampleSize: Yup.number()
    .integer(`${labels.SAMPLE_SIZE} must be a whole number`)
    .min(2)
    .required()
    .label(labels.SAMPLE_SIZE),
  sampleMean: Yup.number().required().label(labels.SAMPLE_MEAN),
  standardDeviation: Yup.number()
    .required()
    .min(1, `${labels.STANDARD_DEVIATION} must be greater than 0`)
    .label(labels.STANDARD_DEVIATION),
  enableHypothesisTest: Yup.boolean(),
  hypothesizedMean: Yup.number().when("enableHypothesisTest", {
    is: (thing) => thing,
    then: Yup.number().required().label(labels.HYPOTHESIZED_MEAN),
  }),
});
