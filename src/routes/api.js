module.exports = app => {
  // Add Controller path here
  const sample_controller = require('../controllers/sample');


  // Add Api List here
  app.get("/sample", sample_controller.findAll);
  app.get("/sample/:sampleId", sample_controller.findOneById);

  // Add api from here

}



