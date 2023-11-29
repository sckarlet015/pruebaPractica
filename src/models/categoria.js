const {
    Sequelize,
    DataTypes
} = require('sequelize');
const {
    v4: uuidv4
} = require('uuid');
module.exports = (sequelize) => {
  sequelize.define('Categoria', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false
  });
};