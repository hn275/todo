"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodo = void 0;
const data_json_1 = __importDefault(require("../data.json"));
const getTodo = (req, res) => {
    try {
        if (data_json_1.default)
            res.json(data_json_1.default);
    }
    catch (error) {
        res.status(404).json({ todoList: [] });
    }
};
exports.getTodo = getTodo;
