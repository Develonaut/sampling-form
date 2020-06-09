import React from "react";
import { useStyles } from "./styles";
import * as MUI from "@material-ui/core"

export const TableContainer = ({ children, ...restProps }) => {
  const classes = useStyles();
  return <MUI.TableContainer className={classes.root} {...restProps}>{children}</MUI.TableContainer>;
};

