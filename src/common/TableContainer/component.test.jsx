import React from "react";
import { render } from "@testing-library/react";
import { TableContainer } from "./component";

test("TableContainer renders without error", () => {
  render(<TableContainer />);
});
