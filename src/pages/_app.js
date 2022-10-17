import "../../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider , HttpLink, from, } from "@apollo/client";



const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  // uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
