import React from "react";
import { useStyles } from "./styles";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "common";
import { useSampling } from "pages/Sampling";
import { Button } from "common";
import { Typography } from "../../common/Typography/component";

export const SamplingResults = () => {
  const classes = useStyles();
  const { samplings, clearSamplings } = useSampling();

  return (
    <>
      <Button disabled={!samplings.length} onClick={() => clearSamplings()}>
        Clear
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sample Size</TableCell>
              <TableCell align="right">Sample Mean</TableCell>
              <TableCell align="right">Standard Deviation</TableCell>
              <TableCell align="right">Hypothesized Mean</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {samplings.map((sampling) => (
              <TableRow key={sampling.id}>
                <TableCell component="th" scope="row">
                  {sampling.sampleSize}
                </TableCell>
                <TableCell align="right">{sampling.sampleMean}</TableCell>
                <TableCell align="right">
                  {sampling.standardDeviation}
                </TableCell>
                <TableCell align="right">
                  {sampling.hypothesizedMean || "N/A"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {!samplings.length && (
          <Typography className={classes.noResults}>
            No Samplings Results
          </Typography>
        )}
      </TableContainer>
    </>
  );
};
