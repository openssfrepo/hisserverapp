module.exports = app => {
  // Add Controller path here
  const JWT = require("../auth/AuthJWT");
  const sample_controller = require('../controllers/sample');
  const sequelize_controller = require('../controllers/sequelizeSample');
  const login_controller = require('../controllers/loginController');
  const prayer_controller = require('../controllers/prayertimeController');
  const user_controller = require('../controllers/userController') 

  // Add Api List here ***** custom query api example ******
  app.get("/sample", sample_controller.findAll);
  app.get("/sample/:sampleId", sample_controller.findOneById);

  // Add api from here ***** sequelize api example ****** without Authentication 
  app.get("/test", sequelize_controller.findAllTest);
  app.get("/user", sequelize_controller.findAllUser);
  app.get("/createuser", user_controller.createUser);

  // get data with authentication
  app.post("/authLogin", login_controller.getUserInfo);
  app.get("/authTest",JWT.authenticateJWT,login_controller.getAuthTest)
  
  app.post("/prayerCreate", prayer_controller.create);
  app.post("/prayerSelectAll", prayer_controller.selectAll);
  app.post("/prayerSelectOne", prayer_controller.selectOne);

}
