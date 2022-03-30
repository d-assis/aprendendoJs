/*
function roll(d){
    if(d < 2){
        d = 2
        console.log('Dado mínimo de 2 lados. Rolando menor dado.')
    } else if(d > 100) {
        d = 100
        console.log('Dado máximo de 100 lados. Rolando maior dado.')
    }
    let max = Math.floor(d)

    return Math.floor(Math.random() * max + 1)
}
*/

function roll(d){
    return new Promise((resolve,reject) => {
        if(d < 2 || d > 100){
            reject('Dado deve ter no mínimo de 2 lados e no máximo 100, use outro valor.')
        } else {
            let max = Math.floor(d)
            resolve(Math.floor(Math.random() * max + 1))
        }
    }) 
}

function testar(dado,dificuldade){
    roll(dado)
    .then((n) => {
        if(n >= dificuldade && n != dado){
            console.log(`rolou ${n} e passou no teste!`)
        } else if(n == 1){
            console.log(`rolou ${n}! FALHA CRÍTICA!`)
        } else if(n == dado){
            console.log(`rolou ${n}! ACERTO CRÍTICO!`)
        } else {
            console.log(`rolou ${n} e falhou no teste...`)
        }
    })
    .catch((err) => {console.log(`${err}`)})
}

testar(20,10)