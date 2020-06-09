import React from "react";
import * as MUI from "@material-ui/core"

export const TableContainer = ({ children, ...restProps }) => {
  return <MUI.TableContainer {...restProps}>{children}</MUI.TableContainer>;
};

