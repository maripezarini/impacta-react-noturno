//criando o schema
const restful = require('node-restful');
const Schema = restful.mongoose.Schema

//definindo o schema contato
const contatoSchema = new Schema({
 data: { type: Date, required: true },
 nome: { type: String, required: true },
 email: {type: String, required: true},
 telefone: {type: Number, required: true},
 assunto: { type: String, required: true}
});

module.exports = restful.model('contato', contatoSchema);

//se eu estou criando um modelo (model), estou criando um banco