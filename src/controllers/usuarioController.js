const { Usuario, Contacto } = require("../db");
const {
    crearContrasenaHash,
    verificarContrasenaHash,
    verificarDuplicado,
    verificarContrasenaValida,
} = require("../actions/usuarioActions");

async function register(usuario) {
    try {
        let duplicado = await verificarDuplicado(usuario.correo);
        if (duplicado) {
            throw new Error("Ya existe un usuario con ese correo");
        }
        let contrasenaValida = verificarContrasenaValida(usuario.contrasena);
        if (!contrasenaValida) {
            throw new Error("Contraseña inválida");
        }
        let nuevoUsuario = {
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
            correo: usuario.correo,
            rol: usuario.rol,
        };

        nuevoUsuario.contrasena = await crearContrasenaHash(usuario.contrasena);

        const usuarioCreado = await Usuario.create(nuevoUsuario);

        if (nuevoUsuario.nombre.length === 0) {
            throw new Error("Ups, hubo un error");
        }

        const respuestaUsuario = {
            id: usuarioCreado.id,
            nombre: usuarioCreado.nombre,
            apellido: usuarioCreado.apellido,
            correo: usuarioCreado.correo,
            celular: usuarioCreado.celular,
            telefono: usuarioCreado.telefono,
            foto: usuarioCreado.foto
        };

        return respuestaUsuario;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

async function sesion(credencial) {
    try {
        let usuario = await Usuario.findOne({
            where: {
                correo: credencial.correo,
            },
        });
        if (!usuario) {
            throw new Error("Usuario no encontrado");
        }

        let contrasenaHashBool = await verificarContrasenaHash(credencial.contrasena, usuario.contrasena);
        if (contrasenaHashBool) {
            const respuestaUsuario = {
                id: usuario.id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                correo: usuario.correo,
                celular: usuario.celular,
                telefono: usuario.telefono,
                foto: usuario.foto
            };

            return respuestaUsuario;
        } else {
            throw new Error("Contraseña incorrecta");
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

const editUser = async (id, data) => {
    try {
        const { contrasena, correo, id: userId, ...actualizacionPermitida } = data;

        await Usuario.update(actualizacionPermitida, {
            where: {
                id: id
            }
        });

        const newUsuario = await Usuario.findByPk(id, {
            attributes: { exclude: ['contrasena'] }
        });

        return newUsuario;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

module.exports = {
    register,
    sesion,
    editUser
};
