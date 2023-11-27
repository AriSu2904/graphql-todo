import Todo from "./model/todo.js";
import {GraphQLScalarType, Kind} from "graphql";
import custom from "./scalarCustom.js";

const resolvers = {
    Date: custom.Date,

    Query: {
        getAll: async () => {
            return Todo.find();
        }
    },
    Mutation: {
        addTodo: async (_, args) => {
            const newTodo = new Todo(args);
            await newTodo.save()
            return newTodo;
        }
    }
}

export {resolvers};