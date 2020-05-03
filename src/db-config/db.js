var mysql = require('mysql');
const con = {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'hisdb'
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


