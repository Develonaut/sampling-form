import React from "react";
import * as MUI from "@material-ui/core";

export const Button = ({ children, ...restProps }) => {
  return (
    <MUI.Button {...restProps}>
      {children}
    </MUI.Button>
  );
};
