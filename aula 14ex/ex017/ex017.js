function tabuada(){
    // vinculando nós html a variáveis
    let n1 = Number(document.querySelector('#n1').value) 
    let tab = document.querySelector('#tabela')
    
    // criando repetição para preencher a tabela
    for(let c = 0; c <= 10; c++){
        let linha = document.createElement('option')
        linha.setAttribute('id',`linha ${c}`)
        linha.innerText = `${n1} x ${c} = ${n1*c}`
        tab.appendChild(linha)
    }
}