// map() é um método interno de qualquer objeto do tipo array, 
//e serve para fazer operações com cada item do mesmo.
// O método map() aceita uma função com 3 parâmetros, como registrado abaixo:

let arr = ["a","b","c","d"]

// v é o valor do item atual que está sendo percorrido pelo método map
// i  é o índice do item atual que está sendo percorrido pelo método map
// a é o próprio array percorrido pelo método map

console.log('v1');

// assim temos: "para cada item do vetor arr, exiba na tela seu valor"
arr.map((v,i,a) => {
    console.log(v)
})

console.log('v2');

// o mesmo ocorre caso seja declarado dessa forma
arr.map((v,i,a) => {
    console.log(a[i])
})