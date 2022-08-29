"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = __importStar(require("firebase-functions"));
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
exports.app = functions.https.onRequest(app);
