import React from "react";
import { useStyles } from "./styles";
import { Container } from "common";
import { Sampling } from "pages";

export const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Sampling />
    </Container>
  );
};
