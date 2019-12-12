const mongoose = require("mongoose")

mongoose.Promise = global.Promise //todas as promises do mongoose e as globais (do servidor node)
module.exports = mongoose.connect('mongodb://localhost:27017/cursos', { useNewUrlParser: true, useUnifiedTopology: true }
) //a porta 27017 é a porta usual do MongoDB

