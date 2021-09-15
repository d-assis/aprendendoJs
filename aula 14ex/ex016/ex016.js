function contar(){
    let ini = Number(document.querySelector('#inicio').value)
    let fim = Number(document.querySelector('#fim').value) 
    let passo = Number(document.querySelector('#passo').value)
    let cont = document.querySelector('#cont')

    console.log(ini)
    console.log(fim)
    console.log(passo)

    let i = ini
    while( i <= fim ){
        cont.innerHTML = `${i} >`
        i = i + passo
    }
}