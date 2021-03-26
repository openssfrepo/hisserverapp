const Sequelize = require("sequelize");
module.exports = new Sequelize('hisdb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });