const T1000Entity = require("../models/entities/T1000Entity");
module.exports = app => {
  // Add Controller path here
  const sample_controller = require('../controllers/sample');
  const sequelize_controller = require('../controllers/sequelizeSample');


  // Add Api List here ***** custom api example ******
  app.get("/sample", sample_controller.findAll);
  app.get("/sample/:sampleId", sample_controller.findOneById);

  // Add api from here ***** sequelize api example ******
  app.get("/test", sequelize_controller.findAllTest);
  app.get("/user", sequelize_controller.findAllUser);
}
