import React from "react";
import { useStyles } from "./styles";
import * as MUI from "@material-ui/core";
import { useField } from "formik";

export const Checkbox = ({
  children,
  name,
  color = "primary",
  label,
  labelPlacement = "end",
  ...restProps
}) => {
  const classes = useStyles();
  const [field] = useField(name);

  return (
    <MUI.FormControlLabel
      className={classes.root}
      control={<MUI.Checkbox checked={field.value} color={color} />}
      label={label}
      labelPlacement={labelPlacement}
      {...field}
      {...restProps}
    />
  );
};
