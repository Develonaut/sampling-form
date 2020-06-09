import React from "react";
import { render } from "@testing-library/react";
import { TableRow } from "./component";
import { Table, TableHead } from "common";

test("TableRow renders without error", () => {
  render(
    <Table>
      <TableHead>
        <TableRow />
      </TableHead>
    </Table>
  );
});
