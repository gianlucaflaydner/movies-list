"use client";

import MoviesList from "@/components/movies-list/movies-list";
import SectionTitle from "@/components/section-title/section-title";
import client from "@/graphql/apollo-client";
import { ApolloProvider } from "@apollo/client";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className="flex min-h-screen flex-col items-center justify-between xl:p-24 p-12">
        <SectionTitle title="Movies List" />
        <MoviesList />
      </main>
    </ApolloProvider>
  );
}
