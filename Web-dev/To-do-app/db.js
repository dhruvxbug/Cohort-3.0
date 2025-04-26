const mongoose = require('mongoose');

//creating schema 
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// creating User/ Todo 
const User = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
});

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

// model to the mongoDB path 
const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('to-do',Todo);

//export
module.exports = {
    UserModel,
    TodoModel
}