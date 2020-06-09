import React from "react";
import { render } from "@testing-library/react";
import { FormActions } from "./component";
import { Form } from "common";

test("FormActions renders without error", () => {
  render(<Form>{() => <FormActions />}</Form>);
});
