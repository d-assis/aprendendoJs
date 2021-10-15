// pq usar a linha abaixo não funciona??? 
//num = document.querySelector('#num').value
let num = document.querySelector('#num')
let t = document.querySelector('#tab')
let r = document.querySelector('#res')
let v = []

// valida o tipo do dado inserido no input. 
// caso seja diferente do tipo número, retorna false
function isNum(n){
    let isn = true
    if(typeof(n) != 'number'){
        isn = false
    }
    return isn
}

// valida se o número adicionado já foi inserido na lista
// caso já exista, retorna true
function listed(n, l){
    let li = false
    for(let i = 0; i < l.length; i++){
        if(l[i] == n){
            li = true
        }
    }
    return li
}

function coletar(){
    let n = Number(num.value)
    if(isNum(n) == false || listed(n,v) == true){
        window.alert('valor inválido ou já encontrado na lista')
    } else if(n < 1 || n > 100){
        window.alert('valor inválido, insira um número dentro da faixa especificada e tente novamente')
    }else{
        v.push(n)
        let item = document.createElement('option')
        item.innerHTML = `valor ${n} adicionado`
        t.appendChild(item)
        
        // limpa o campo de input
        num.value = ''
        // coloca o foco no campo de input
        num.focus()
    }
}

// soma os valores adicionados ao vetor
function somar(){
    let sm = 0
    for(let i = 0; i < v.length; i++){       
        sm += v[i]
    }
    return sm
}

// calcula a média dos valores adicionados
function media(){
    let med = somar()/v.length
    return med
}

// compara e retorna o maior valor do vetor
function maior(){
    let mai = 0
    for(let i = 0; i < v.length; i++){
        if(v[i] > mai){
            mai = v[i]
        }
    }
    return mai
}

// compara e retorna o menor valor do vetor
function menor(){
    let men = v[0]
    for(let i = 0; i < v.length; i++){
        if(men > v[i]){
            men = v[i]
        }
    }
    return men
}

// exibe analises na tela
function analisar(){
    if(v.length == 0){
        window.alert('Adicione pelo menos um valor antes de finalizar')
    } else{
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
                    info.innerHTML = `O maior valor informado foi ${maior()}`
                    r.appendChild(info)
                break;
                
                // exibir menor número adicionado
                case 2:
                    info.innerHTML = `O menor valor informado foi ${menor()}`
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
}