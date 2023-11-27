import Todo from "./model/todo.js";

export const resolvers = {
    Query: {
        getAll: () => {
            return Todo.find()
        }
    }
}