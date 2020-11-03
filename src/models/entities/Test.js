const Sequelize = require("sequelize");
const db = require("../../db-config/sequelize-conn");
const options = {
  timestamps: false,
  tableName: "test",
};
const Test = db.define(
  "test",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    info: {
      type: Sequelize.STRING,
    },
  },
  options
);

module.exports = Test;
