const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  telefone: {type: Number, required: true, trim: true},
  nacionalidade: {type: String, required: true}
});

module.exports = mongoose.model('Contatos', schema);