import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import typeDefs from "@/graphql/schemas";
import resolvers from "@/graphql/resolvers";
import allowCors from "@/utils/cors";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  //It was displaying a typescript error that wasn't making sense
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground() as any],
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res }),
});

export default allowCors(handler);
