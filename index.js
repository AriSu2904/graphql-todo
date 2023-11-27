import mongoose from "mongoose";
import {ApolloServer} from "@apollo/server";
import {startStandaloneServer, StartStandaloneServerOptions} from "@apollo/server/standalone";
import typeDefs from "./schema.js";

try {
    await mongoose.connect('mongodb://127.0.0.1:27017/latihan');
}catch (err){
    console.log(err)
}

const server = new ApolloServer({
    typeDefs
})

const {url} = await startStandaloneServer(server, {
    listen: {port: 3000}
})

console.log(`🚀  Server ready at: ${url}`);
