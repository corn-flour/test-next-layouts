// Specifying that this will need to be called on every request

import { getBaseUrl } from "../utils/get-base-url";

// similar to getServerSideProps() in Next 12
const fetchData = async () =>
  fetch(`${getBaseUrl()}/api/hello`, {
    cache: "no-store",
  }).then((res) => res.json());

// A component that calls to the API and renders on the server on every request (SSR)
export const ServerFetchOnReq = async () => {
  const data = (await fetchData()) as {
    name: string;
  };

  return (
    <p>
      SSR Fetch: <span className="text-red-600 font-semibold">{data.name}</span>
    </p>
  );
};
