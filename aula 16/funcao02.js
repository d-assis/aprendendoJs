// ao declarar uma função, é possível definir valores padrão para os parâmetros
// dessa forma, caso o parâmetro não seja preenchido numa chamada, o valor padrão será assumido
// para atribuir valores padrão, basta utilizar (param = 'valorPadrao') conforme o exemplo abaixo
function soma(a = 0,b = 0){
    return a+b
}

console.log(soma(2,5))