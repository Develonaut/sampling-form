import React from "react";
import * as MUI from "@material-ui/core"

export const TableHead = ({ children, ...restProps }) => {
  return <MUI.TableHead {...restProps}>{children}</MUI.TableHead>;
};

