// pq usar a linha abaixo não funciona??? 
//num = document.querySelector('#num').value
let num = document.querySelector('#num')
let t = document.querySelector('#tab')
let r = document.querySelector('#res')
let v = []

function coletar(){
    let n = Number(num.value)
    if(n < 1 || n > 100){
        window.alert('valor inválido, insira um número dentro da faixa especificada e tente novamente')
        console.log(n)
    }else{
        v.push(n)
        let item = document.createElement('option')
        item.innerHTML = `valor ${n} adicionado`
        t.appendChild(item)
        console.log(n)
    }
}

// soma os valores adicionados ao vetor
function somar(){
    
}

// calcula a média dos valores adicionados
function media(){

}

// compara e retorna o maior valor do vetor
function maior(){

}

// compara e retorna o menor valor do vetor
function menor(){

}

// exibe analises na tela
function analisar(){
    for(let i = 0; i < 5; i++){
        let info = document.createElement('p')
        info.setAttribute('id',`info${i}`)
        switch(i){
            // exibir comprimento do vetor
            case 0:
                info.innerHTML = `Ao todo temos ${v.length} números cadastrados`
                r.appendChild(info)
            break;
            
            // exibir maior número adicionado
            case 1:
                info.innerHTML = `O maior valor informado foi ${v}`
                r.appendChild(info)
            break;
            
            // exibir menor número adicionado
            case 2:
                info.innerHTML = `O menor valor informado foi ${v}`
                r.appendChild(info)
            break;
            
            // exibir soma de todos os números adicionados
            case 3:
                info.innerHTML = `Somando todos os valores, temos ${somar()}`
                r.appendChild(info)
            break;

            // exibir média dos números
            case 4:
                info.innerHTML = `A média dos valores informados é ${media()}`
                r.appendChild(info)
            break;
        }
    }
}