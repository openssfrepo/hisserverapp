const Sequelize = require("sequelize");
const db = require("../../db-config/sequelize-conn");
const options = {
    timestamps: false,
    tableName: "t1000",
  };
const T1000Entity= db.define('t1000',{
    userId:{
        field:'user_id',
        type: Sequelize.STRING,
        primaryKey: true
    },
    userName:{
        field:'user_name',
        type: Sequelize.STRING
    },
    userPass:{
        field:'user_pass',
        type: Sequelize.STRING
    },
    userType:{
        field:'user_type',
        type: Sequelize.STRING
    },
    profileId:{
        field:'profile_id',
        type: Sequelize.STRING
    },
    serviceId:{
        field:'service_id',
        type: Sequelize.STRING
    },
    addressId:{
        field:'address_id',
        type: Sequelize.STRING
    },
    permissionId:{
        field:'permission_id',
        type: Sequelize.STRING
    },
    activeFlg:{
        field:'active_flg',
        type: Sequelize.STRING
    },
    timestamp:{
        field:'timestamp',
        type: Sequelize.STRING
    }
},options);

module.exports = T1000Entity;