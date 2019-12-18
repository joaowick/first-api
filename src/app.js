const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// App
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Database
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

// Load models
const Contatos = require('./models/contatos');

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);
const contatosRoutes = require('./routes/contatos-routes');
app.use('/contatos', contatosRoutes);

module.exports = app;