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
  
  //******************Application api start from here ********** */
  app.post("/createuser", user_controller.createUser);
  app.get("/getalluser", user_controller.findAllUser);
  app.get("/getuser", user_controller.findUser);
  app.post("/updateuser", user_controller.updateUser);
  app.get("/deleteuser", user_controller.deleteUser);

  // get data with authentication
  app.post("/authLogin", login_controller.getUserInfo);
  app.get("/authTest",JWT.authenticateJWT,login_controller.getAuthTest)
  
  app.post("/prayercreate", prayer_controller.create);
  app.get("/prayertimeall", prayer_controller.selectAll);
  app.post("/prayertimeone", prayer_controller.selectOne);
  app.post("/prayerupdate", prayer_controller.update);
  app.get("/getuuid", sample_controller.getUUID)
}
