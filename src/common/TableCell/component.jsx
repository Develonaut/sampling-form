import React from "react";
import { useStyles } from "./styles";
import * as MUI from "@material-ui/core"

export const TableCell = ({ children, ...restProps }) => {
  const classes = useStyles();
  return <MUI.TableCell className={classes.root} {...restProps}>{children}</MUI.TableCell>;
};

