import Todo from "./model/todo.js";
import {GraphQLScalarType, Kind} from "graphql";

const resolvers = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        serialize(value) {
            if (value instanceof Date) {
                return value.toLocaleString();
            }
            throw Error('GraphQL Date Scalar serializer expected a `Date` object');
        },
        parseValue(value) {
            if (typeof value === 'number') {
                return new Date(value);
            }
            throw new Error('GraphQL Date Scalar parser expected a `number`');
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return new Date(parseInt(ast.value, 10));
            }
            return null;
        },
    }),

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