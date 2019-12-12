const mongoose = require('mongoose');
const Contatos = mongoose.model('Contatos');

// Create
exports.createContato = async(req, res) => {
  try {
    const contato = new Contatos({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      telefone: req.body.telefone,
      nacionalidade: req.body.nacionalidade
    });
    console.log(contato);
    await contato.save();
    res.status(201).send({message: 'Contato cadastrado com sucesso!'});
  } catch(e) {
    res.status(500).send({message: 'Falha ao cadastrar o contato'});
  }
}

// Read
exports.listContato = async(req, res) => {
  try {
    const data = await Contatos.find({});
    res.status(200).send(data);
  } catch(e) {
    res.status(500).send({message: 'Falha ao carregar o contato'});
  }
}
