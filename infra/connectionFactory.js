var mysql = require('mysql');

function createPool() {
    const pool = mysql.createPool({
        host: 'localhost',
        user : 'root',
        password : '',
        database: 'casadocodigo'
    });
    return pool;
};

module.exports = createPool;