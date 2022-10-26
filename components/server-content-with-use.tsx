import { use } from "react";
import { getData } from "../service/api";

// This is also a server component, but it uses the use() hook to fetch data instead of async/await
// In theory, I don't think this should work? But it seems to be working fine (better than the async/await even)
export const ServerContentWithUse = () => {
  const data = use(getData()) as {
    name: string;
  };

  return (
    <p>
      Server component with use():{" "}
      <span className="text-red-600 font-semibold">{data.name}</span>
    </p>
  );
};
