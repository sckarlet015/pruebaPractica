const { Sequelize, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
    sequelize.define('Usuario', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        segundoNombre: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        segundoApellido: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        alias: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        vialidad: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        exterior: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        interior: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        celular: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        local: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        activo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: true,
        },
        fechaNacimiento: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sitioWeb: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        facebook: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        linkedin: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cargo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        foto: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: true, 
        createdAt: 'fechaCreacion', 
        updatedAt: 'fechaModificacion',
    });
};
