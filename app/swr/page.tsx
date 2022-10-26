"use client";

import useSWR from "swr";

const fetchData = (url: string) => fetch(url).then((res) => res.json());

const SWRPage = () => {
  const { data } = useSWR(`/api/hello`, fetchData);

  if (!data) return <div>SWR loading...</div>;
  return (
    <div>
      <h1 className="text-4xl font-bold">SWR fetching</h1>
      <p>
        data: <span className="text-red-600 font-semibold">{data.name}</span>
      </p>
    </div>
  );
};

export default SWRPage;
