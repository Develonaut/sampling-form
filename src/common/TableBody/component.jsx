import React from "react";
import * as MUI from "@material-ui/core"

export const TableBody = ({ children, ...restProps }) => {
  return <MUI.TableBody {...restProps}>{children}</MUI.TableBody>;
};

