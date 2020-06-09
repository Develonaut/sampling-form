import React from "react";
import { render } from "@testing-library/react";
import { TableHead } from "./component";
import { TableRow, TableCell, Table } from "common";

test("TableHead renders without error", () => {
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
