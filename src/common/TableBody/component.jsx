import React from "react";
import { useStyles } from "./styles";
import * as MUI from "@material-ui/core"

export const TableBody = ({ children, ...restProps }) => {
  const classes = useStyles();
  return <MUI.TableBody className={classes.root} {...restProps}>{children}</MUI.TableBody>;
};

