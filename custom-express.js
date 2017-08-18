const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


module.exports = function () {
    const app = express();
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());
    app.use(expressValidator());
    
    
    
    load('routes').then('infra').into(app);
    
    app.use(function (req,res,next) {
        console.log('Recurso não encontrado: ' + req.originalUrl);
        res.status(404).render("erros/404");
    });
    
    app.use(function (error, req,res,next) {
        console.error('Erro no midleware');
        console.error(error);
        res.status(500).render("erros/500");
    });
    
    return app;
};
