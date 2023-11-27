import Todo from "./model/todo.js";
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
        },
        updateTodo: async (_, args) => Todo.findByIdAndUpdate(args.id, args, {new: true}),
        deleteTodo: async (_, args) => {
            const deletedTodo = await Todo.findByIdAndDelete(args.id)
            return !!deletedTodo
        },
    }
}

export {resolvers};