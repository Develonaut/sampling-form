import React from "react";
import { useStyles } from "./styles";
import * as MUI from "@material-ui/core";

export const Container = ({ children, ...restProps }) => {
  const classes = useStyles();
  return (
    <MUI.Container className={classes.root} {...restProps}>
      {children}
    </MUI.Container>
  );
};
