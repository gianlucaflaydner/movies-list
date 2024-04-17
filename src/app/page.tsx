"use client";

import HomeComponent from "@/components/home/home";
import client from "@/graphql/apollo-client";
import { ApolloProvider } from "@apollo/client";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <HomeComponent />
    </ApolloProvider>
  );
}
