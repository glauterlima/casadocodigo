//const connectionFactory = require('../infra/connectionFactory');
//const ProdutoDao = require('../infra/ProdutoDao');

module.exports = function (app) {
    app.get('/produtos', (req, res) => {

        const connection = app.infra.connectionFactory();//(err, connection) => {

            const produtoDao = new app.infra.ProdutoDao(connection);
            produtoDao.lista((err, results, fields) => {
                res.render('produtos/lista', {
                    lista: results
                });
            });

            //connection.release();
       // });



    });

    app.get('/produtos/form', (req, res) => {
        res.render('produtos/form');
    });

    app.post('/produtos', (req, res) => {
        var produto = req.body;
        const connection = app.infra.connectionFactory();
        const produtoDao = new app.infra.ProdutoDao(connection);

        produtoDao.salva(produto, (err, results) => {
            res.render('produtos/salvo');
        });
    });
}
