const express = require('express');
const cors = require('cors');
const rotas = require('./rotas');

const app = express();

// prepara o servidor para receber JSON ereceber as rotas da api.
app.use(cors(), express.json(), rotas);

if (require.main === module) {
  app.listen(3000, '0.0.0.0', () => {
    console.log('API disponível na porta 3000');
  });
}

module.exports = app;