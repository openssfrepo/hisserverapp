var mysql = require('mysql');
const con = {
    host: 'localhost',
    user: 'root',
    password: 'root',
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


