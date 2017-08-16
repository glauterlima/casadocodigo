var mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user : 'root',
    password : '',
    database: 'casadocodigo'
});

function createConnection(callback) {
   
    return pool;//.getConnection(callback);
};

module.exports = function() {
    return createConnection;
}
