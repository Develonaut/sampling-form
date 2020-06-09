import React from "react";
import { useStyles } from "./styles";
import { TextField, Checkbox, FormActions, Form } from "common";
import { FormikDebugger } from "core";
import { useSampling } from "pages/Sampling";
import shortid from "shortid";
import { getQueryParam } from "../../core/utils/getQueryParam";
import { validationSchema, initialValues, labels } from "./config";

export const requiredLabel = (label) => `${label} *`;

export const SamplingForm = () => {
  const classes = useStyles();
  const { appendSampling } = useSampling();
  const debuggerEnabled = getQueryParam("debugger") === "enabled";

  const handleSubmit = (values, helpers) => {
    appendSampling({ id: shortid.generate(), ...values });
    helpers.resetForm();
  };

  return (
    <Form
      className={classes.root}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <>
          <TextField
            name="sampleSize"
            label={requiredLabel(labels.SAMPLE_SIZE)}
            type="number"
          />
          <TextField
            name="sampleMean"
            label={requiredLabel(labels.SAMPLE_MEAN)}
            type="number"
          />
          <TextField
            name="standardDeviation"
            label={requiredLabel(labels.STANDARD_DEVIATION)}
            type="number"
          />
          <Checkbox
            name="enableHypothesisTest"
            label={labels.PERFORM_HYPOTHESIS_TEST}
          />
          <TextField
            name="hypothesizedMean"
            label={
              values.enableHypothesisTest
                ? requiredLabel(labels.HYPOTHESIZED_MEAN)
                : labels.HYPOTHESIZED_MEAN
            }
            type="number"
            disabled={!values.enableHypothesisTest}
          />
          <FormActions />
          {debuggerEnabled && <FormikDebugger />}
        </>
      )}
    </Form>
  );
};
