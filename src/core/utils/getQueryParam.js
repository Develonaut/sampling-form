// If I was using react router I would just use the hook,
// but in the case of this take home it's a bit simpler to use,
// this small util function.
export const getQueryParam = (key) => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return params.get(key);
};
