const module1 = require('./mod1.js')
//const module2 = require('./mod2.js')

const {message} = require('./mod2.js')

//dá pra chamar o objeto direto, em vez de chamar primeiro o arquivo e dpeois o objeto

//diferenças entre var, let e const -- var e let podem ser reatribuidos e vão ser sobrescrevidas sem que dê nenhum erro no código. Quando você usa a const (constante), pois o erro é dito logo na compilação - o que super melhora o código.

//SEMPRE use const; se necessário, muda pra let; se necessário, muda pra var -- mas nunca use variéveis com o mesmo nome - não é boa prática.

module1('Carregando uma única função modular')
message('carregando objetos com funções modulares')
