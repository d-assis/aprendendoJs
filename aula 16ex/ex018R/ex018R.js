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
        // insere entrada do usuário no vetor
        valores.push(Number(num.value))
        // cria novo item visual para notificar o usuário
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        // insere o item criado na estrutura html, tornando-o visível
        lista.appendChild(item)

        //limpa o input do campo
        num.value = ''
        // mantém foco no campo após adicionar um valor
        num.focus()

        // limpa conteúdo da div #res
        res.innerHTML = ''
    } 
    // caso contrário, notifica o usuário sobre entrada inválida
    else {
        window.alert('valor inválido ou já encontrado na lista.')
    }
}

// realiza operações com os valores adicionados ao vetor e devolve feedback visual na página
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de continuar.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        // laço de percurso pelo vetor 
        for(let pos in valores){
            // soma de valores adicionados usando operador de incremento
            soma += valores[pos]
            // condicional para registro dos maiores e menores valores
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        // cálculo da soma
        media = soma/tot
        
        // Adicionando linhas de resultado na tela
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p> somando todos os valores temos ${soma} </p>`
        res.innerHTML += `<p> a média dos valores é ${media} </p>`
    }
}