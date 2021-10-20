let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

// identifica se a entrada do usuário está na faixa de 1 a 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n,l){
    // o método vetor.indexOf() retorna a posição de um determinado valor no vetor,
    // caso o valor não exista dentro desse vetor, então a função retorna -1 
    // nesse caso utilizamos o retorno de indexOf() para identificar valores repetidos num vetor
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    // adiciona novos valores apenas se os mesmos estiverem na faixa de valor especificada e se não estiverem na lista
    if(isNumero(num.value) && !inLista(num.value, valores)){

    } 
    // caso contrário, notifica o usuário sobre entrada inválida
    else {
        window.alert('valor inválido ou já encontrado na lista.')
    }
}