import React from "react";
import * as MUI from "@material-ui/core"

export const Paper = ({ children, ...restProps }) => {
  return <MUI.Paper {...restProps}>{children}</MUI.Paper>;
};

