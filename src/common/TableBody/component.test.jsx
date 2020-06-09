import React from "react";
import { render } from "@testing-library/react";
import { TableBody } from "./component";
import { Table, TableCell, TableRow } from "common";

test("TableBody renders without error", () => {
  render(
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Test</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
});
