import React from "react";
import * as MUI from "@material-ui/core"

export const TableCell = ({ children, ...restProps }) => {
  return <MUI.TableCell {...restProps}>{children}</MUI.TableCell>;
};

