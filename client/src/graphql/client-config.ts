import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const uri = process.env.REACT_APP_API_URL;
const link = createHttpLink({ uri });

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
