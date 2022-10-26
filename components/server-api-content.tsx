import { getData } from "../service/api";

// This is a server component that fetched data directly on the server then render to the client using async/await
export const ServerAPIContent = async () => {
  const { name } = (await getData()) as {
    name: string;
  };
  return (
    <p>
      Server component response:{" "}
      <span className="text-red-600 font-semibold">{name}</span>
    </p>
  );
};
