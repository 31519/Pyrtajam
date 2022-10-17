// import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { gql, ApolloServer } from "apollo-server-micro";



export  const  typeDefs  =  gql`
    type  Posts {
        id: ID
        title: String
        description: String,
        image: String
    }

    type  Query {
        getPosts: [Posts]
        getPost(title: String!): Posts!
    }`