import React from "react";
import { useStyles } from "./styles";
import * as MUI from "@material-ui/core"

export const TableHead = ({ children, ...restProps }) => {
  const classes = useStyles();
  return <MUI.TableHead className={classes.root} {...restProps}>{children}</MUI.TableHead>;
};

