import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql_schema/resolvers";

const server = new GraphQLServer({
    typeDefs : "graphql_schema/schema.graphql",
    resolvers
});

server.start(() => console.log("graphql server running"));