import React from "react";
import { Container } from "common";
import { SamplingForm, SamplingResults } from "features";
import { SamplingContext, useInitSampling } from "./context";

export const Sampling = ({ children, ...restProps }) => {
  const context = useInitSampling();

  return (
    <Container {...restProps}>
      <SamplingContext.Provider value={context}>
        <SamplingForm />
        <SamplingResults />
      </SamplingContext.Provider>
    </Container>
  );
};
