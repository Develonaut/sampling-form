import React from "react";
import { useStyles } from "./styles";
import * as MUI from "@material-ui/core"

export const Table = ({ children, ...restProps }) => {
  const classes = useStyles();
  return <MUI.Table className={classes.root} {...restProps}>{children}</MUI.Table>;
};

