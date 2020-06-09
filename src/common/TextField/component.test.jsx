import React from "react";
import { render } from "@testing-library/react";
import { TextField } from "./component";
import { Form } from "common";

test("TextField renders without error", () => {
  render(<Form>{() => <TextField name="test" />}</Form>);
});
