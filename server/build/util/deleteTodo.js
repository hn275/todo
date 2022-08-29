"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = void 0;
const data_json_1 = __importDefault(require("../data.json"));
const writeFile_1 = require("./writeFile");
const deleteTodo = (req, res) => {
    const ids = req.body.ids;
    const newList = data_json_1.default.todoList.filter((todo) => {
        return !ids.includes(todo.id);
    });
    data_json_1.default.todoList = newList;
    (0, writeFile_1.writeFile)(data_json_1.default);
    res.json(data_json_1.default);
};
exports.deleteTodo = deleteTodo;
