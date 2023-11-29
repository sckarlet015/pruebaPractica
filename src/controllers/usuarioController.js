const { Usuario } = require("../db");
const { Op } = require('sequelize');

const create = async (data) => {
    const { correo, celular } = data;

    try {
        const existingUser = await Usuario.findOne({
            where: {
                [Op.or]: [{ correo: correo }, { celular: celular }]
            }
        });

        if (existingUser) {
            throw new Error("Ya existe un usuario con el mismo correo o celular");
        }

        const nuevoUsuario = await Usuario.create(data);

        return nuevoUsuario;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};

const getAllContacts = async() => {
    try {
        const contacts = await Usuario.findAll({
            attributes: ['id', 'nombre', 'apellido', 'alias', 'celular', 'correo', 'foto']
        });
        return contacts;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

const contacDetails = async(id) => {
    try {
        const contact = await Usuario.findByPk(id);
        return contact;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

const editContact = async(id, data) => {
    try {
        await Usuario.update(data, {
            where: {
                id: id
            }
        });
        const newContac = await Usuario.findByPk(id)
        return newContac;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

const deleteContact = async(id) => {
    try {
        await Usuario.destroy({
            where: {
                id: id
            }
        });
        return true;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

module.exports = {
    create,
    getAllContacts,
    contacDetails,
    editContact,
    deleteContact
};
