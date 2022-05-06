"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_json_1 = __importDefault(require("../models/users.json"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(users_json_1.default);
});
router.post('/', (req, res) => {
    try {
        const { id, nombre, apellidos, genero, telefono } = req.body;
        if (users_json_1.default.find(p => p.id === id)) {
            res.status(403).send('User already exists');
        }
        else {
            users_json_1.default.push({ id, nombre, apellidos, genero, telefono });
            res.send('User added successfully');
        }
    }
    catch (e) {
        res.status(400).send();
    }
});
router.put('/', (req, res) => {
    try {
        const { id, nombre, apellidos, genero, telefono } = req.body;
        if (users_json_1.default.find(p => p.id === id)) { // Validate that the user exists
            var index = users_json_1.default.findIndex(obj => obj.id == id); //Find the index of that user
            users_json_1.default[index].nombre = nombre;
            users_json_1.default[index].apellidos = apellidos;
            users_json_1.default[index].genero = genero;
            users_json_1.default[index].telefono = telefono;
            res.send('User modified successfully');
        }
        else {
            users_json_1.default.push({ id, nombre, apellidos, genero, telefono });
            res.status(403).send('User does not exist');
        }
    }
    catch (e) {
        res.status(400).send();
    }
});
router.delete('/', (req, res) => {
    try {
        const { id } = req.body;
        if (users_json_1.default.find(p => p.id === id)) { // Validate that the user exists
            var index = users_json_1.default.findIndex(obj => obj.id == id); //Find the index of that user
            users_json_1.default.splice(index, 1);
            res.send('User deleted successfully');
        }
        else {
            res.status(403).send('User does not exist');
        }
    }
    catch (e) {
        res.status(400).send('An error occurred');
    }
});
exports.default = router;
