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
    return app;
};
