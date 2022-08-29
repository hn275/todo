"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const writeFile = (data) => {
    const dataPath = path_1.default.join(__dirname, '..', 'data.json');
    const dataJson = JSON.stringify(data, null, 2);
    fs_1.default.writeFile(dataPath, dataJson, (err) => {
        if (err)
            console.log(err);
    });
};
exports.writeFile = writeFile;
