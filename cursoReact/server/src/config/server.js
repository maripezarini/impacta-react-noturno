const port = 3500 //constante para guardar a porta, ela pode ser 

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('./cors')

const server = express()//antes dessa linha o servidor não existia

server.use(bodyParser.urlencoded({extended : true}))
server.use(bodyParser.json())
server.use(cors)

//o use serve para plugar midwares no servidor - ele é uma função exclusiva do express.
//o express coloca o servidor no ar - com os use ele tem as regras de negócio
//cors serve para identificar de quais urls você vai receber requisições

server.listen(port, function(){
    console.log(`Servidor está no ar :) ele está na porta ${port}`)
})

module.exports = server