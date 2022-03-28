// programa em formato síncrono

/*
 function sumNumbers(){
     let result = 1 + 1
 
     if(result == 2){
         successCallback()
     } else {
         errorCallback()
     }
 }
 
 function successCallback(){
     console.log('deu certo :D')
 }
 
 function errorCallback(){
     console.log('deu errado :(')
 }
 
 sumNumbers()
*/

// programa em formato assíncrono

//uma promise é um objeto que aceita uma função executora anônima como parâmetro, e essa, por sua vez, aceita as funções nativas "resolve" e "reject" 
p = new Promise((resolve,reject) => {
    let a = 1 + 1
    if(a == 2){
        // resolve aceita qualquer valor como parâmetro, e este será retornado ao resolver a promise e poderá ser utilizado ao encadear o método .then()
        resolve('success')
    } else {
        // reject aceita qualquer valor como parâmetro, e este será retornado quando a promise for rejeitada. 
        // O valor retornado a partir de reject poderá ser utilizado ao encadear o método .catch()
        reject('fail')
    }
})

// invocamos os métodos internos then() e catch() da promise para trabalhar com os valores 
//de retorno da mesma, seja ela resolvida, e trabalhada com then(), ou rejeitada, e tratada com catch()
p.then((message) => {
    console.log(`resultado da promise resolvida e trabalhada com .then(): ${message}`)
}).catch((message) => {
    console.log(`resultado da promise rejeitada com .catch(): ${message}`)
})