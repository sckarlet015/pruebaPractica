const {
    allOrganizacion,
    allCategorias
} = require("../controllers/mixController")

const getAllOrganizacion = async(req, res) => {
    try {
        const data = await allOrganizacion()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getAllCategorias = async(req, res) => {
    try {
        const data = await allCategorias()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllOrganizacion,
    getAllCategorias
}