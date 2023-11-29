const {
    Sequelize,
    DataTypes
} = require('sequelize');
const {
    v4: uuidv4
} = require('uuid');
module.exports = (sequelize) => {
  sequelize.define('Nota', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    contenido: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false
  });
};