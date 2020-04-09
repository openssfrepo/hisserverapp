function getData(sql) {

    var promise = new Promise(function (resolve, reject) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'admin',
            database: 'testdb'
        });
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
module.exports.getData = getData;


