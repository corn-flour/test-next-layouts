// Fake API service, having 1000ms delay
export const getData = async () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          name: "Hello from fake server",
        }),
      1000
    );
  });
};
