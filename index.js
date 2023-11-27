import mongoose from "mongoose";
import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import typeDefs from "./schema.js";
import {resolvers} from "./resolvers.js";

try {
    await mongoose.connect(`mongodb://${host}:${port}/${db}`);
}catch (err){
    console.log(err)
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} = await startStandaloneServer(server, {
    listen: {port: 3000}
})

console.log(`🚀  Server ready at: ${url}`);
