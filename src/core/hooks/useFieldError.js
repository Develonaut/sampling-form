export function useFieldError({ touched, error }) {
  const isError = touched && !!error;
  const helperText = isError && error;
  return [isError, helperText];
}
