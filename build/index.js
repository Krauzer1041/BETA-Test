"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESmodules
const users_1 = __importDefault(require("./controller/users"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middleware que transforma la req.body a un json
const PORT = 3000; //puerto en el que se levanta el servidor
app.use('/api/users', users_1.default);
app.listen(PORT, () => {
    console.log(`Listen on ${PORT}`);
});
