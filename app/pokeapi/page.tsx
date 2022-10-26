import { SSRPokeApi } from "../../components/ssr-pokeapi";

const SSRPage = () => {
  return (
    <main>
      <h1 className="text-4xl font-bold">SSR with Pokeapi</h1>
      {/**
       * @ts-ignore */}
      <SSRPokeApi />
    </main>
  );
};

export default SSRPage;
