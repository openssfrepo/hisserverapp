const Sequelize = require("sequelize");
const db = require("../../db-config/sequelize-conn");
const options = {
    timestamps: true,
    tableName: "t5000",
  };
const T5000Entity= db.define('t5000',{
    prayerId:{
        field:'prayer_id',
        type: Sequelize.STRING,
        primaryKey: true
    },
    prayerDate:{
        field:'prayer_date',
        type: Sequelize.STRING
    },
    shehriStart:{
        field:'shehri_start',
        type: Sequelize.STRING
    },
    shehriFinish:{
        field:'shehri_finish',
        type: Sequelize.STRING
    },
    fajrAzan:{
        field:'fajr_azan',
        type: Sequelize.STRING
    },
    fajrIqamah:{
        field:'fajr_iqamah',
        type: Sequelize.STRING
    },
    sunrise:{
        field:'sunrise',
        type: Sequelize.STRING
    },
    dhuhrAzan:{
        field:'dhuhr_azan',
        type: Sequelize.STRING
    },
    dhuhrIqamah:{
        field:'dhuhr_iqamah',
        type: Sequelize.STRING
    },
    asrAzan:{
        field:'asr_azan',
        type: Sequelize.STRING
    },
    asrIqamah:{
        field:'asr_iqamah',
        type: Sequelize.STRING
    },
    sunset:{
        field:'sunset',
        type: Sequelize.STRING
    },
    iftarStart:{
        field:'iftar_start',
        type: Sequelize.STRING
    },
    iftarFinish:{
        field:'iftar_finish',
        type: Sequelize.STRING
    },
    magribAzan:{
        field:'magrib_azan',
        type: Sequelize.STRING
    },
    magribIqamah:{
        field:'magrib_iqamah',
        type: Sequelize.STRING
    },
    ishaAzan:{
        field:'isha_azan',
        type: Sequelize.STRING
    },
    ishaIqamah:{
        field:'isha_iqamah',
        type: Sequelize.STRING
    },
    jummahFlg:{
        field:'jummah_flg',
        type: Sequelize.STRING
    },
    jummahAzan:{
        field:'jummah_azan',
        type: Sequelize.STRING
    },
    jummahKhuthbha:{
        field:'jummah_khuthba',
        type: Sequelize.STRING
    },
    jummahIqamah:{
        field:'jummah_iqamah',
        type: Sequelize.STRING
    },
    updatedBy:{
        field:'updated_by',
        type: Sequelize.STRING
    },
    createdBy:{
        field:'created_by',
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
    timestamp:{
        field:'timestamp',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
},options);

module.exports = T5000Entity;