function contar(){
    let ini = Number(document.querySelector('#inicio').value)
    let fim = Number(document.querySelector('#fim').value) 
    let passo = Number(document.querySelector('#passo').value)
    let cont = document.querySelector('#cont')

    console.log(ini)
    console.log(fim)
    console.log(passo)

    cont.innerHTML = 'Contando: '

    let i = ini
    while( i <= fim ){
        let ctg = document.createElement('strong')
        ctg.setAttribute('id',`ctg${i}`)
        ctg.innerHTML = `${i} &#x1F449;`
        cont.appendChild(ctg)
        i = i + passo
    }
}