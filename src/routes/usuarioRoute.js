const express = require('express');
const {createNewUser, login, editDataUser} = require("../handlers/usuarioHandler")

const usuarioRouter = express.Router();

usuarioRouter.post('/newUser', createNewUser);
usuarioRouter.post('/login', login);
usuarioRouter.put('/edit/:id', editDataUser);

module.exports = usuarioRouter