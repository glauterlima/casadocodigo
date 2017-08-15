//const connectionFactory = require('../infra/connectionFactory');
//const ProdutoDao = require('../infra/ProdutoDao');

module.exports = function (app) {
    app.get('/produtos', (req, res) => {

        const connection = app.infra.connectionFactory((err, connection) => {

            const produtoDao = new app.infra.ProdutoDao(connection);
            produtoDao.lista((err, results, fields) => {
                res.render('produtos/lista', {
                    lista: results
                });
            });

            connection.release();
        });



    });
}
