"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTodo = void 0;
const uuid_1 = require("uuid");
const writeFile_1 = require("./writeFile");
const data_json_1 = __importDefault(require("../data.json"));
const postTodo = (req, res, next) => {
    const { content } = req.body.data;
    // error handling
    if (!content) {
        const error = new Error('bad request, request body needs to have { "content": "todo task" }');
        error.status = 400;
        return next(error);
    }
    // add new todo to json
    const newTodo = {
        id: (0, uuid_1.v4)(),
        content: content,
        isComplete: false,
    };
    data_json_1.default.todoList.push(newTodo);
    (0, writeFile_1.writeFile)(data_json_1.default);
    res.status(201).json(newTodo);
};
exports.postTodo = postTodo;
