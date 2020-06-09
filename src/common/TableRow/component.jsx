import React from "react";
import { useStyles } from "./styles";
import * as MUI from "@material-ui/core"

export const TableRow = ({ children, ...restProps }) => {
  const classes = useStyles();
  return <MUI.TableRow className={classes.root} {...restProps}>{children}</MUI.TableRow>;
};

