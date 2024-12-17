const express = require('express');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuarioRoutes');
const questionarioRoutes = require('./routes/questionarioRoutes');
const app = express();

app.use(bodyParser.json());

app.use('/api', usuarioRoutes);
app.use('/api', questionarioRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

module.exports = app;
