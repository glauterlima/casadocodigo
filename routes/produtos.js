//const connectionFactory = require('../infra/connectionFactory');
//const ProdutoDao = require('../infra/ProdutoDao');

module.exports = function (app) {
    app.get('/produtos', (req, res) => {

        const connection = app.infra.connectionFactory(); //(err, connection) => {

        const produtoDao = new app.infra.ProdutoDao(connection);
        produtoDao.lista((err, results, fields) => {
            res.format({
                html: function () {
                    res.render('produtos/lista', {
                        lista: results
                    });
                },
                
                json: function() {
                    res.json(results);
                },
                
                default: function() {
                    res.status(406).send('Inaceitável');
                }
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
        
        req.assert('titulo', 'Título deve ser preenchido').notEmpty();
        req.assert('preco', 'Preço deve ser um número').isFloat();
        
        var errors = req.validationErrors();
        
        if (errors) {
            console.log('há erros de validação!');
            res.format( {
                html: function() {
                    res.status(400).render('produtos/form', {validationErrors: errors});
                },
                json: function() {
                    res.status(400).send(errors);
                }
            });
            return;
        }
        
        const connection = app.infra.connectionFactory();
        const produtoDao = new app.infra.ProdutoDao(connection);

        produtoDao.salva(produto, (err, results) => {
            res.redirect('/produtos');
        });
    });
}
