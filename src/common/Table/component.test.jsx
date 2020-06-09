import React from "react";
import { render } from "@testing-library/react";
import Table from "./component";

test("Table renders without error", () => {
  render(<Table />);
});
