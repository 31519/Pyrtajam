import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { gql, ApolloServer } from "apollo-server-micro";

import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";

// const apolloServer = new ApolloServer({ typeDefs, resolvers });
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();


export default async function handler(req, res) {

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}
export const config = {
  api: {
    bodyParser: false,
  },
};


// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default apolloServer.createHandler({ path: "/api/graphql" });







// const typeDefs = gql`
//   type Query {
//     hello: String!
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: (_parent, _args, _context) => {
//       return "Hello";
//     },
//   },
// };

// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
//   playground: true,
//   plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
// });

// const startServer = apolloServer.start();

// export default async function handler(req, res) {

//   await startServer;
//   await apolloServer.createHandler({
//     path: "/api/graphql",
//   })(req, res);
// }
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export const typeDefs = gql`
//   type Posts {
//     id: ID
//     title: String
//     description: String
//   }

//   type Query {
//     getPosts: [Posts]
//     getUser(title: String!): Posts!
//   }
// `;
