//1ª FORMA DE FAZER
/*function ProdutoDao(connection) {
    this._conection = connection;
};

ProdutoDao.prototype.lista = function (callback) {
    this._conection.query('SELECT * FROM livros', callback);
};

module.exports = ProdutoDao;
*/

//2ª FORMA DE FAZER
class ProdutoDao {
    constructor(connection) {
        this._conection = connection;
    }
    lista(callback) {
        this._conection.query('SELECT * FROM livros', callback);
    }
}


module.exports = ProdutoDao;
