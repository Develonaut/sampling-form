import React from "react";
import { useStyles } from "./styles";
import { useField } from "formik";
import { useFieldError } from "core/hooks";
import * as MUI from "@material-ui/core";

export const TextField = ({ children, name, ...restProps }) => {
  const classes = useStyles();
  const [field, meta] = useField(name);
  const [error, helperText] = useFieldError(meta);
  return (
    <MUI.TextField
      {...field}
      {...restProps}
      size="small"
      variant="outlined"
      error={error}
      helperText={helperText}
      className={classes.root}
    />
  );
};
