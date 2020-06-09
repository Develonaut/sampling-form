import React from "react";
import { useStyles } from "./styles";
import * as MUI from "@material-ui/core";

export const Button = ({ children, ...restProps }) => {
  const classes = useStyles();
  return (
    <MUI.Button className={classes.root} {...restProps}>
      {children}
    </MUI.Button>
  );
};
