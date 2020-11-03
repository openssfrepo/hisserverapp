const Sequelize = require("sequelize");
module.exports = new Sequelize('freedbtech_openssf_hisdb', 'freedbtech_his_user', 'his_user', {
    host: 'freedb.tech',
    dialect: 'mysql'
  });