import React, { useState, createContext, useCallback, useContext } from "react";
import { useStyles } from "./styles";
import { Container } from "common";
import { SamplingForm, SamplingResults } from "features";

const SamplingContext = createContext({
  samplings: [],
  appendSampling: () => undefined,
  clearSamplings: () => undefined,
});

export const useSampling = () => useContext(SamplingContext);

export const Sampling = ({ children, ...restProps }) => {
  const classes = useStyles();
  const [samplings, setSamplings] = useState([]);
  const handleClearSamplings = useCallback(() => setSamplings([]), []);
  const handleAppendSampling = useCallback(
    (values) => setSamplings([...samplings, values]),
    [samplings]
  );

  const contextValues = {
    samplings,
    appendSampling: handleAppendSampling,
    clearSamplings: handleClearSamplings,
  };

  return (
    <Container className={classes.root} {...restProps}>
      <SamplingContext.Provider value={contextValues}>
        <SamplingForm />
        <SamplingResults />
      </SamplingContext.Provider>
    </Container>
  );
};
