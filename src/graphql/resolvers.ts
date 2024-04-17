const urlToFetch = process.env.NEXT_PUBLIC_URL_LOCAL_MOVIES as string;

const resolvers = {
  Query: {
    getMovies: async () => {
      try {
        const response = await fetch(urlToFetch, {
          method: "GET",
        });
        const data = await response.json();

        return data;
      } catch (error) {
        throw new Error("Something went wrong");
      }
    },
  },
};

export default resolvers;
