var mysql = require('mysql');
var databaseName = 'casadocodigo';

if(process.env.NODE_ENV == 'test') {
    databaseName = 'casadocodigo_teste';
}

const pool = mysql.createPool({
    host: 'localhost',
    user : 'root',
    password : '',
    database: databaseName
});

function createConnection(callback) {
   
    return pool;//.getConnection(callback);
};

module.exports = function() {
    return createConnection;
}
