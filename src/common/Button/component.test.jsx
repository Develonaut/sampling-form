import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./component";

test("Button renders without error", () => {
  render(<Button>Test</Button>);
});
