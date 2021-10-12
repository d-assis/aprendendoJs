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

function analisar(){
    for(let i = 0; i < 5; i++){
        let info = document.createElement('p')
        info.setAttribute('id',`info${i}`)
        switch(i){
            case 0:
                info.innerHTML = `Ao todo temos ${v.length} números cadastrados`
                r.appendChild(info)
            break;
            
            case 1:
            break;
            
            case 2:
            break;
            
            case 3:
            break;

            case 4:
            break;
        }
    }
}