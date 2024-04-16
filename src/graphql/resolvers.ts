const resolvers = {
  Query: {
    getMovies: async () => {
      try {
        const response = await fetch("http://localhost:3000/api/movies", {
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
