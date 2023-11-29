const { Organizacion, Categoria } = require("../db");

const allOrganizacion = async() => {
    try {
        const organizacion = await Organizacion.findAll();
        return organizacion;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

const allCategorias = async() => {
    try {
        const categorias = await Categoria.findAll();
        return categorias;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

module.exports = {
    allOrganizacion,
    allCategorias
}