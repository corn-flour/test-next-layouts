// Fake API service, having 1000ms delay
export const getData = async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
    res.json()
  );
};
