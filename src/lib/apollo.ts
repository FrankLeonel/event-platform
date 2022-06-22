import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oba31c1q9401xi7mdvdesy/master",
  cache: new InMemoryCache()
})