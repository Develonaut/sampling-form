import React from "react";
import { render } from "@testing-library/react";
import { Checkbox } from "./component";
import { Form } from "common";

test("Checkbox renders without error", () => {
  render(<Form>{() => <Checkbox name="test" />}</Form>);
});
