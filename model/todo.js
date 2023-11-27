import mongoose from "mongoose";

const {Schema} = mongoose;

const TodoSchema = new Schema({
    title: String,
    description: String,
}, {timestamps: true});

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo