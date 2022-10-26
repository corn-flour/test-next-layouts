// Fake API service, having 1000ms delay
export const getData = async () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          name: "Hello from server",
        }),
      1000
    );
  });
};
