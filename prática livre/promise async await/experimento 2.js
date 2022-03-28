// testando ordem de execução das linhas

// importante destacar que as chamadas entendidas como assíncronas, como setTimeout(),
//"abrem" um runtime distinto para sua execução.
// Ao contrário de chamadas síncronas, o conteúdo de tais funções é executado mediante a 
//satisfação de uma condição, geralmente externa ao interpretador do código.
console.log('primeiro');

// o método console.log(), passado como parâmetro de setTimeout, é executado exatamente 
//após a satisfação da condição estipulada, no caso a conclusão do temporizador de 0 milissegundos  
setTimeout(() => {console.log('segundo')},0);

console.log('terceiro');

let p = new Promise(function (resolve,reject){
    resolve('quarto');
    reject('??????')
})

p.then((message) => {console.log(message)})