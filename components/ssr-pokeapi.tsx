// Specifying that this will need to be called on every request

// similar to getServerSideProps() in Next 12
const fetchData = () =>
  fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`, {
    cache: "no-store",
  }).then((res) => res.json());

// A component that calls to the API and renders on the server on every request (SSR)
export const SSRPokeApi = async () => {
  const data = (await fetchData()) as {
    name: string;
  };

  return (
    <p>
      Pokeapi Fetch:{" "}
      <span className="text-red-600 font-semibold">{data.name}</span>
    </p>
  );
};
