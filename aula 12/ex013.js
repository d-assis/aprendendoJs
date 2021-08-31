// "agora" recebe o retorno de Date() tornando-se um objeto
var agora = new Date()

// sendo um objeto podemos navegar por seus métodos públicos, no caso, estamos interessados em getDay()
// o retorno de getDay() é armazenado na variável diaSem
var diaSem = agora.getDay()

// o comando break é obrigatório para a utilização da estrutura switchcase
switch (diaSem){
    case 0:
        console.log('hoje é domingo')
    break;

    case 1:
        console.log('hoje é 2a')
    break;

    case 2:
        console.log('hoje é 3a')
    break;

    case 3:
        console.log('hoje é 4a')
    break;

    case 4:
        console.log('hoje é 5a')
    break;

    case 5:
        console.log('hoje é 6a')
    break;

    case 6:
        console.log('hoje é sábado')
    break;

    default:
        console.log('[ERRO] dia inválido')
    break;
}