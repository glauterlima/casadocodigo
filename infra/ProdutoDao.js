function ProdutoDao(connection) {
    this._conection = connection;
};

ProdutoDao.prototype.lista = function (callback) {
    this._conection.query('SELECT * FROM livros', callback);
};

module.exports = ProdutoDao;