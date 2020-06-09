import React from "react";
import { useStyles } from "./styles";
import * as MUI from "@material-ui/core";

export const Typography = ({ children, ...restProps }) => {
  const classes = useStyles();
  return (
    <MUI.Typography className={classes.root} {...restProps}>
      {children}
    </MUI.Typography>
  );
};
