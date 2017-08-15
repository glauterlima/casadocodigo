const connectionFactory = require('../infra/connectionFactory');
const ProdutoDao = require('../infra/ProdutoDao');

module.exports = function (app) {
    app.get('/produtos', (req, res) => {

        const connection = connectionFactory();
        const produtoDao = new ProdutoDao(connection);

        produtoDao.lista((err, results) => {
            res.render('produtos/lista', {
                lista: results
            });
        });

    });
}
