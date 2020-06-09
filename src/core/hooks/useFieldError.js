

/**
 * Hook that uses the touched and error values from Formiks "useField" hook
 * to determine if a text field has an error or helper text to display.
 * 
 * @param {touched} boolean - If the user has interacted with the field.
 * @param {error} string - The error string to display to the user.  
 * @returns [isError, helperText] - The isError flag, and the text to display.
 */
export function useFieldError({ touched, error }) {
  const isError = touched && !!error;
  const helperText = isError && error;
  return [isError, helperText];
}
