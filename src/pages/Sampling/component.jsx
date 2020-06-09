import React, { useState, createContext, useCallback, useContext } from "react";
import { Container } from "common";
import { SamplingForm, SamplingResults } from "features";

const SamplingContext = createContext({
  samplings: [],
  appendSampling: () => undefined,
  clearSamplings: () => undefined,
});

export const useSampling = () => useContext(SamplingContext);

export const Sampling = ({ children, ...restProps }) => {
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
    <Container {...restProps}>
      <SamplingContext.Provider value={contextValues}>
        <SamplingForm />
        <SamplingResults />
      </SamplingContext.Provider>
    </Container>
  );
};
