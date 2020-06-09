import { createContext, useContext, useState, useCallback } from "react";

/**
 * Initial values for Sampling Context.
 */
const initialValues = {
  samplings: [],
  appendSampling: () => undefined,
  clearSamplings: () => undefined,
}

/**
 * Creates the initial Sampling context with initial values using React's
 * createContext method. 
 * @returns {SamplingContext} React Context Object
 */
export const SamplingContext = createContext(initialValues);

/**
 * Hook to use the Sampling context.
 * @returns {SamplingContext}
 */
export const useSampling = () => useContext(SamplingContext);
  
/**
 * Hook to use onMount to initialize the Sampling Context with getters and setters
 * to manipulate context state.
 * @returns {SamplingContext}
 */
export const useInitSampling = () => {
  const [samplings, setSamplings] = useState([]);
  const handleClearSamplings = useCallback(() => setSamplings([]), []);
  const handleAppendSampling = useCallback(
    (values) => setSamplings([...samplings, values]),
    [samplings]
  );

  return {
      samplings,
      appendSampling: handleAppendSampling,
      clearSamplings: handleClearSamplings
  }
}
  