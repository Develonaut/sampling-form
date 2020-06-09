import React from "react";
import { render } from "@testing-library/react";
import { Sampling } from "./component";

test("Sampling renders without error", () => {
  render(<Sampling />);
});
