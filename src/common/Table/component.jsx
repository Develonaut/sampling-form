import React from "react";
import * as MUI from "@material-ui/core"

export const Table = ({ children, ...restProps }) => {
  return <MUI.Table {...restProps}>{children}</MUI.Table>;
};

