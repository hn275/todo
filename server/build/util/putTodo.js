"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putTodo = void 0;
const data_json_1 = __importDefault(require("../data.json"));
const writeFile_1 = require("./writeFile");
const putTodo = (req, res, next) => {
    const { id, isComplete } = req.body.data; // requested params
    const todoIndex = data_json_1.default.todoList.findIndex((todo) => todo.id === id); // requested todo index
    // error handling
    if (todoIndex === -1) {
        const error = new Error('No todo found');
        error.status = 404;
        return next(error);
    }
    // update todo
    try {
        // update todo
        const updateTodo = data_json_1.default.todoList[todoIndex];
        if (updateTodo) {
            updateTodo.isComplete = isComplete;
            (0, writeFile_1.writeFile)(data_json_1.default);
            res.status(201).json(data_json_1.default.todoList[todoIndex]);
        }
        else {
            res.status(404).json({});
        }
    }
    catch (serverError) {
        return next(serverError);
    }
};
exports.putTodo = putTodo;
