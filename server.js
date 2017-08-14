const ce = require('./custom-express');
const app = ce();

app.listen(3000, () => {
    console.log('Servidor Rodando');
});