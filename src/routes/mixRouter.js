const express = require('express');
const {
    getAllOrganizacion,
    getAllCategorias
} = require("../handlers/mixHandler")

const mixRouter = express.Router();

mixRouter.get("/organizacion", getAllOrganizacion);
mixRouter.get("/categorias", getAllCategorias);

module.exports = mixRouter