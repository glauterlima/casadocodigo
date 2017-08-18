/*const ce = require('./custom-express');
const app = ce();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('io',io);

app.listen(3000, () => {
    console.log('Servidor Rodando');
});
*/
var app = require('./custom-express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io',io);

var server = http.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Servidor executando em http://%s:%s', host, port);
});