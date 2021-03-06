var agora = new Date()
var diaSem = agora.getDay()

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