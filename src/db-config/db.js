var mysql = require('mysql');
const con = {
    host: 'freedb.tech',
    user: 'freedbtech_his_user',
    password: 'his_user',
    database: 'freedbtech_openssf_hisdb'
}
function execute(sql) {

    var promise = new Promise(function (resolve, reject) {
        var connection = mysql.createConnection(con);
        connection.connect()
        connection.query(sql, function (error, results, fields) {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
        connection.end()
    })
    return promise
}
module.exports.execute = execute;


