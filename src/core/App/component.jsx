import React from "react";
import { Container } from "common";
import { Sampling } from "pages";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "core/config/theme";

export const App = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <Container maxWidth="md">
        <Sampling />
      </Container>
    </ThemeProvider>
  );
};
