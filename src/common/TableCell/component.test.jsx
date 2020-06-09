import React from "react";
import { render } from "@testing-library/react";
import { TableCell } from "./component";
import { Table, TableHead, TableRow } from "common";

test("TableCell renders without error", () => {
  render(
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Test</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
});
