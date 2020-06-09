import React from "react";
import { render } from "@testing-library/react";
import { Table } from "./component";
import { TableHead, TableBody, TableRow, TableCell } from "common";

test("Table renders without error", () => {
  render(
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Test</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      <TableRow>
          <TableCell>Test</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
});
