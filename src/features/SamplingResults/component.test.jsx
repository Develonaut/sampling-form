import React from "react";
import { render } from "@testing-library/react";
import { SamplingResults } from "./component";

test("SamplingResults renders without error", () => {
  render(<SamplingResults />);
});
