const http = require('http')
const requisicao = function(request, response) {
    response.writeHead(200, {"Content-Type":"text/html"})
    response.write('<h1>Texto a ser exibido no browser</h1>')
    response.end()
}

const server = http.createServer(requisicao)

const resultado = function(){
    console.log('Servidor em funcionamento')
}

server.listen(3000, resultado)

    //requisições que voltam 200 deram sucesso. 400 é erro da programadora. 500 é erro de que requisitou (user).

    