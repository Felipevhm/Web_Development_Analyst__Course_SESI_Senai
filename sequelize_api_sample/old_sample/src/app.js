const express = require('express');
const app = express();
const petRoutes = require('./routes/petRoutes');

app.use(express.json());
app.use('/api', petRoutes);

module.exports = app;
