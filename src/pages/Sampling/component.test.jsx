import React from "react";
import { render } from "@testing-library/react";
import Home from "./component";

test("Home renders without error", () => {
  render(<Home />);
});
