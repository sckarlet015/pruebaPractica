const {
    register,
    sesion,
    editUser
} = require("../controllers/usuarioController")

const createNewUser = async (req, res) => {
    const data = req.body
    try {
        const result = await register(data)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
const login = async (req, res) => {
    const data = req.body
    try {
        const result = await sesion(data)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const editDataUser = async (req, res) => {
    const {id} = req.params
    const data = req.body
    try {
        const result = await editUser(id, data)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    createNewUser,
    login,
    editDataUser
}