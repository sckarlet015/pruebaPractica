const {create, getAllContacts, contacDetails, editContact, deleteContact} = require("../controllers/contactoController")

const newContact = async (req, res) => {
    const {body} = req
   try {
    const result = await create(body)
    res.status(201).json(result)
   } catch (error) {
    res.status(400).json({message: error.message})
   }
}

const allContacts = async (req, res) => {
    const {id} = req.params
    try {
        const result = await getAllContacts(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const contacDetailsId = async (req, res) => {
    const {id} = req.params
    try {
        const result = await contacDetails(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
const updateContatc = async (req, res) => {
    const {id} = req.params
    const {body} = req
    try {
        const result = await editContact(id, body)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const destroyContac = async (req, res) => {
    const {id} = req.params
    try {
        const result = await deleteContact(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


module.exports = {
    newContact,
    allContacts,
    contacDetailsId,
    updateContatc,
    destroyContac
}