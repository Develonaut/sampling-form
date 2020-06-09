import React from "react";
import { useStyles } from "./styles";
import { Container } from "common";
import { Sampling } from "pages";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "core/config/theme";

export const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={createTheme()}>
      <Container maxWidth="md" className={classes.root}>
        <Sampling />
      </Container>
    </ThemeProvider>
  );
};
