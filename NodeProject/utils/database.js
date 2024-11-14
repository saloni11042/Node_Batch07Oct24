const mysql = require('mysql2')

var connection = mysql.createPool(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'nodeComplete'
    }
)

module.exports = connection.promise()