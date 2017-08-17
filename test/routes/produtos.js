var express = require('../../custom-express')();
var request = require('supertest')(express);

describe('#ProdutosController', function () {
    it('listagem de produtos json', function(done) {
        request.get('/produtos').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200, done)
    });
    
    it('listagem de produtos html', function(done) {
        request.get('/produtos').expect('Content-Type', /html/).expect(200,done)
    });
    
    it('Cadastro livro válido', function(done) {
        request.post('/produtos').send({titulo:'Cangaceiro JS', preco:29}).expect('Location', '/produtos').expect(302,done)
    });
    
    it('Cadastro livro inválido', function(done) {
        request.post('/produtos').send({preco:29}).expect(400,done)
    });

});