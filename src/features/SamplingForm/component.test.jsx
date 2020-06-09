import React from "react";
import { render } from "@testing-library/react";
import { SamplingForm } from "./component";

test("SamplingForm renders without error", () => {
  render(<SamplingForm />);
});
