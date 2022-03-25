// programa em formato síncrono
/*
let melhor =  "truta"

function oMelhor(callback,errCallback){
    if(melhor == 'fulano' || melhor == 'cicrano'){
        callback({
            nome: melhor,
            mensagem: 'sim, é o melhor'
        })

    } else{
        errCallback({
            nome: 'algo está errado',
            mensagem: `${melhor}, sério?`
        })
    }
};

oMelhor((resultado) => {
    console.log(`${resultado.nome}, yeah! ${resultado.mensagem}`)
}, (err) => {
    console.log(`${err.nome} ${err.mensagem}`)
})

*/

// programa em formato assíncrono

// em suma, para traduzir o programa acima, síncrono usando callbacks, para o formato abaixo,
//assíncrono com promises, basta incluir, no corpo da função, um retorno com a estrutura de uma promise.
// Dessa forma, invocamos a função criada e encadeamos os métodos then() e catch() para tratar 
//os retornos de sucesso e falha respectivamente.
let melhor = 'ugauga'

function oMelhor(){
    
    return new Promise((resolve,reject) => {
        if(melhor == 'fulano' || melhor == 'cicrano'){
            resolve({
                nome: melhor,
                mensagem: 'esse(a), é o(a) melhor'
            })
    
        } else{
            reject({
                nome: 'algo está errado...',
                mensagem: `${melhor}, sério?`
            })
        }
    })
    
    
};

oMelhor().then((resultado) => {
    console.log(`${resultado.nome}, isso! ${resultado.mensagem}`)
}).catch((err) => {
    console.log(`${err.nome} ${err.mensagem}`)
})
