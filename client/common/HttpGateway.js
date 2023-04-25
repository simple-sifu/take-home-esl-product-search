export const HttpGateway = () => {
  return {
    get: async (path) => {
      const response = await fetch(path);
      if (!response.ok) {
        const message = `An error has occurred: ${response.status}: ${response.statusText}, for fetch request: GET ${response.url}`;
        throw new Error(message);
      }
      const dto = response.json();
      return dto;
    },

    post: async (path, requestDto) => {
      const response = await fetch(path, {
        method: "POST",
        body: JSON.stringify(requestDto),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const message = `An error has occurred: ${response.status}: ${response.statusText}, for fetch request: POST ${response.url}`;
        throw new Error(message);
      }
      const responseDto = response.json();
      return responseDto;
    },
  };
};
