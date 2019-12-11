const port = 3200

const bodyParser = require('body-parser')
const express = require('express')

const server = express()

server.use(bodyParser.urlencoded({extended : true}))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`Servidor está no ar :) ele está na porta ${port}`)
})