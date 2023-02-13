export const fetcher = (url: RequestInfo | string, options?: RequestInit) =>
  fetch(url, options)
    .then(handleErrors)
    .then((res) => res.json());

function handleErrors(response: Response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}
