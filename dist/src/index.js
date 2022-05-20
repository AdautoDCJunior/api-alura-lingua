const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/teste', (req, res) => {
  res.status(200).json({ mensagem: 'Boas-vindas à API' });
});

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;
