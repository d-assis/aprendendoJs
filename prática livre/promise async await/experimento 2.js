// testando ordem de execução das linhas

console.log('primeiro');

setTimeout(() => {console.log('segundo')},0);

console.log('terceiro');

let p = new Promise(function (resolve,reject){
    resolve('quarto');
    reject('??????')
})

p.then((message) => {console.log(message)})