require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_URL } = process.env;

const sequelize = new Sequelize("postgres://agenda_e5su_user:IaYhXvVi3ztXn70eFWKOg9BJb6irqbxt@dpg-clkgdr4jtl8s73e4hh40-a/agenda_e5su",
   {
      logging: false,
      native: false,
   }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Usuario, Organizacion, Categoria, Contacto } = sequelize.models;

Contacto.belongsToMany(Organizacion, { through: 'contacto_organizacion' });
Organizacion.belongsToMany(Contacto, { through: 'contacto_organizacion' });

Contacto.belongsToMany(Categoria, { through: 'contacto_categoria' });
Categoria.belongsToMany(Contacto, { through: 'contacto_categoria' });

Usuario.belongsToMany(Contacto, { through: 'agenda' });
Contacto.belongsToMany(Usuario, { through: 'agenda' });





module.exports = {
   ...sequelize.models, 
   conn: sequelize, 
};
