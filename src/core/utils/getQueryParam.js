
/**
 * Utility function to get query string values from the url.
 * If I was using react router I would use the built in hooks, but
 * for this example since it doesn't require router I felt this small utility
 * would be appropriate.
 * @param {string} key - The key of the query paramter
 * @returns {string | undefined} - Returns the associated query  key value or undefined if no value if found. 
 */
export const getQueryParam = (key) => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return params.get(key);
};
