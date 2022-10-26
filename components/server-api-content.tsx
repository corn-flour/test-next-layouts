import { getData } from "../service/api";

// This is a server component that fetched data directly on the server then render to the client using async/await
export const ServerAPIContent = async () => {
  const { title } = (await getData()) as {
    title: string;
  };
  return (
    <p>
      Server component response:{" "}
      <span className="text-red-600 font-semibold">{title}</span>
    </p>
  );
};
