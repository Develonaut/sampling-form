import React from "react";
import * as MUI from "@material-ui/core"

export const TableRow = ({ children, ...restProps }) => {
  return <MUI.TableRow {...restProps}>{children}</MUI.TableRow>;
};

