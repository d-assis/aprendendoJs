let n = document.querySelector('#num').value
let t = document.querySelector('#tab')
let r = document.querySelector('#res')
let v = []

function coletar(){
    if(n.length == 0){
        window.alert('insira um valor e tente novamente')
    }else if(Number(n) < 1 || Number(n) > 100){
        window.alert('valor inválido, insira um número dentro da faixa especificada e tente novamente')
    }else{
        v.push(Number(n))
        let item = document.createElement('option')
        item.innerHTML = `valor ${Number(n)} adicionado`
        t.appendChild(item)
    }
}

function analisar(){

}