"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const getTodo_1 = require("./util/getTodo");
const postTodo_1 = require("./util/postTodo");
const putTodo_1 = require("./util/putTodo");
const deleteTodo_1 = require("./util/deleteTodo");
const errorHandler_1 = require("./util/errorHandler");
const PORT = process.env.PORT || 4000; // port
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'https://todobyhal.netlify.app/',
}));
app.use(express_1.default.json());
// Handling requests
app.get('/', getTodo_1.getTodo);
app.post('/', postTodo_1.postTodo);
app.delete('/', deleteTodo_1.deleteTodo);
// app.param('id', paramHandler); // handle params
app.put('/', putTodo_1.putTodo);
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
