const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// Conectado
db.on('connected', () => {
  console.log('Mongoose está aberto!');
});

// Error
db.on('error', err => {
  console.log(`Mongoose deu pau!\n${err}`);
});

// Desconectado
db.on('disconnect', () => {
  console.log('Mongoose está fechado!');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose fechou de verdade!');
    process.exit(0);
  });
});

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

module.exports = app;