import React from "react";
import * as MUI from "@material-ui/core";

export const Typography = ({ children, ...restProps }) => {
  return (
    <MUI.Typography {...restProps}>
      {children}
    </MUI.Typography>
  );
};
