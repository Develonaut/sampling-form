import React from "react";
import * as MUI from "@material-ui/core";

export const Container = ({ children, ...restProps }) => {
  return (
    <MUI.Container {...restProps}>
      {children}
    </MUI.Container>
  );
};
