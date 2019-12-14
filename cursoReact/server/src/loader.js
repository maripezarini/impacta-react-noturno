const s = require('./config/server')
require('./config/db')
require('./config/routes')(s)

//programação orientada a objetos: - a calsse é a característica, que vai ter diferentes objetos