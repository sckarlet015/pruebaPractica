const { Contacto, Usuario, Organizacion, Categoria } = require("../db");
const { Op } = require('sequelize');

const create = async (data) => {
    const { usuarioId } = data;
    console.log(data);
    try {
        const usuario = await Usuario.findByPk(usuarioId, {
            include: Contacto,
        });

        const contactoExistente = usuario.Contactos.find(
            (contacto) => contacto.celular === data.celular || contacto.correo === data.correo
        );

        if (contactoExistente) {
            throw new Error("Ya existe un contacto con el mismo correo o celular");
        }

        const nuevoContacto = await Contacto.create(data);

        if (data.organizacion !== undefined) {
            const organizacionExistente = await Organizacion.findOne({
                where: { nombre: { [Op.iLike]: `%${data.organizacion}%` } },
            });

            if (!organizacionExistente) {
                const nuevaOrganizacion = await Organizacion.create(data.organizacion)
                await nuevoContacto.addOrganizacion(nuevaOrganizacion);
            }
            await nuevoContacto.addOrganizacion(organizacionExistente);
        } else{
            const nuevaOrganizacion = await Organizacion.create({nombre: 'Sin organizacion'})
            await nuevoContacto.addOrganizacion(nuevaOrganizacion);
        }

        if (data.categoria !== undefined || data.categoria !== null) {
            const categoriaExistente = await Categoria.findOne({
                where: { nombre: { [Op.iLike]: `%${data.categoria}%` } },
            });

            if (!categoriaExistente) {
                const nuevaCategoria = await Categoria.create(data.categoria)
                await nuevoContacto.addCategoria(nuevaCategoria);
            }
            await nuevoContacto.addCategoria(categoriaExistente);
        } else{
            const nuevaCategoria = await Categoria.create({nombre: 'Sin categoria'})
            await nuevoContacto.addCategoria(nuevaCategoria);
        }

        await usuario.addContacto(nuevoContacto);

        const respuestaContacto = {
            id: nuevoContacto.id,
            nombre: nuevoContacto.nombre,
            apellido: nuevoContacto.apellido,
            alias: nuevoContacto.alias,
            celular: nuevoContacto.celular,
            correo: nuevoContacto.correo,
            foto: nuevoContacto.foto,
        };

        return respuestaContacto;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

const getAllContacts = async (id) => {
    try {
        const usuario = await Usuario.findByPk(id, {
            include: {
                model: Contacto,
                attributes: ['id', 'nombre', 'apellido', 'alias', 'celular', 'correo', 'foto'],
            },
        });
        const contacts = usuario.Contactos.map((contacto) => ({
            id: contacto.id,
            nombre: contacto.nombre,
            apellido: contacto.apellido,
            alias: contacto.alias,
            celular: contacto.celular,
            correo: contacto.correo,
            foto: contacto.foto,
            fechaModificacion: contacto.fechaModificacion
        }));

        return contacts;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};


const contacDetails = async(id) => {
    try {
        const contact = await Contacto.findByPk(id, {
            include: [{
                model: Organizacion,
                attributes: ['id', 'nombre'],
            },
             {
                model: Categoria,
                attributes: ['id', 'nombre'],
            }]
        });
        return contact;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

const editContact = async (id, data) => {
    try {
        const contactoExistente = await Contacto.findByPk(id);

        if (data.organizacion !== undefined) {

            const organizacionExistente = await Organizacion.findOne({
                where: { nombre: { [Op.iLike]: `%${data.organizacion}%` } },
            });

            const organizacion = await Organizacion.findByPk(data.organizacionId)

            if (!organizacionExistente) {
                await contactoExistente.removeOrganizacion(organizacion);
                const nuevaOrganizacion = await Organizacion.create({nombre: data.organizacion});
                await contactoExistente.addOrganizacion(nuevaOrganizacion);
            }
        }

        if (data.categoria !== undefined) {
            const categoriaExistente = await Categoria.findOne({
                where: { nombre: { [Op.iLike]: `%${data.categoria}%` } },
            });

            const categoria = await Categoria.findByPk(data.categoriaId)

            if (!categoriaExistente) {
                await contactoExistente.removeCategoria(categoria);
                const nuevaCategoria = await Categoria.create({nombre: data.categoria});
                await contactoExistente.addCategoria(nuevaCategoria);
            }
        }

        await Contacto.update(data, {
            where: { id: id },
        });

        const newContac = await Contacto.findByPk(id,  {
            include: [{
                model: Organizacion,
                attributes: ['id', 'nombre'],
            },
             {
                model: Categoria,
                attributes: ['id', 'nombre'],
            }]
        });
        return newContac;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};


const deleteContact = async(id) => {
    try {
        await Contacto.destroy({
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
