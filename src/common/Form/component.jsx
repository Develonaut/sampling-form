import React from "react";
import { Formik, Form as FormikForm } from "formik";

export const Form = ({
  children = () => undefined,
  initialValues = {},
  validationSchema = {},
  onSubmit = () => undefined,
  className,
  ...restProps
}) => {
  return (
    <Formik
      className={restProps.className}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      {...restProps}
    >
      {(formikProps) => (
        <FormikForm className={className}>{children(formikProps)}</FormikForm>
      )}
    </Formik>
  );
};
