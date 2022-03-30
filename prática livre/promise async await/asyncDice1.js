let d = 20
let cd = 10

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

function testar(dado,dificuldade){
    let n = roll(dado)
    
    if(n >= dificuldade && n != dado){
        console.log(`rolou ${n} e passou no teste!`)
    } else if(n == 1){
        console.log(`rolou ${n}! FALHA CRÍTICA!`)
    } else if(n == dado){
        console.log(`rolou ${n}! ACERTO CRÍTICO!`)
    } else {
        console.log(`rolou ${n} e falhou no teste...`)
    }
}

setTimeout(() => console.log(`teste com d${d} e dificuldade ${cd}... Rolando!`),0)

setTimeout(() => console.log('.'),1000)

setTimeout(() => console.log('..'),2000)

setTimeout(() => console.log('...'),3000)

setTimeout(() => testar(d,cd),4000)
