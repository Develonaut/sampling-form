import React from "react";
import { useStyles } from "./styles";
import { Button, Container } from "common";
import { useFormikContext } from "formik";

export const FormActions = () => {
  const classes = useStyles();
  const { resetForm } = useFormikContext();
  const handleReset = () => resetForm({});

  return (
    <Container className={classes.root}>
      <Button
        className={classes.button}
        type="submit"
        variant="contained"
        color="primary"
      >
        Ok
      </Button>
      <Button
        className={classes.button}
        onClick={handleReset}
        variant="outlined"
      >
        Reset
      </Button>
    </Container>
  );
};
