const Sequelize = require("sequelize");
const db = require("../../db-config/sequelize-conn");
const options = {
    created_at: true,
    updated_at: true,
    timestamps: false,
    tableName: "t1000",
};
const T1000Entity = db.define('t1000', {
    userId: {
        field: 'user_id',
        type: Sequelize.STRING,
        primaryKey: true
    },
    userName: {
        field: 'user_name',
        type: Sequelize.STRING,
        unique: true 
    },
    userPass: {
        field: 'password',
        type: Sequelize.STRING
    },
    userStatus: {
        field: 'user_status',
        type: Sequelize.STRING
    },
    userType: {
        field: 'user_type',
        type: Sequelize.STRING
    },
    name: {
        field: 'name',
        type: Sequelize.STRING
    },
    email: {
        field: 'email',
        type: Sequelize.STRING
    },
    phoneNo: {
        field: 'phone_no',
        type: Sequelize.STRING
    },
    permissionId: {
        field: 'permission_id',
        type: Sequelize.STRING
    },
    updatedBy: {
        field: 'updated_by',
        type: Sequelize.STRING
    },
    createdBy: {
        field: 'created_by',
        type: Sequelize.STRING
    },
    createdAt: {
        field: 'created_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        field: 'updated_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    timestamp: {
        field: 'timestamp',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
}, options);

module.exports = T1000Entity;