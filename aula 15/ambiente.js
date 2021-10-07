let num = [1,15,35,180]

// caso sort seja chamado sem um parâmetro, os itens serão organizados em ordem alfabética crescente, o que não funciona para valores numéricos, conforme o exemplo abaixo
num.sort()
console.log(num)

//para ordenar valores numéricos de um vetor, é necessário criar uma função de ordenação conforme o exemplo abaixo onde temos a função de ordem crescente
num.sort(function(a,b){return a - b})

console.log(`nosso vetor é o ${num}`)

console.log(num)

// substituindo valor de um dos elementos do vetor
num[3] = 6

console.log(num)

// o método "push" é utilizado para adicionar novos elementos a um array, colocando-os na última posição
num.push(7)

console.log(num)

// a propriedade .length de um vetor guarda o seu comprimento
console.log("o comprimento so vetor num é " +num.length)

// o método sort, quando aplicado a um vetor, organiza os valores contidos em ordem crescente.
num.sort(function(a,b){return a - b})
console.log(num)

// exibir vetor usando estrutura de repetição
for(let pos = 0; pos < num.length; pos ++){
    console.log(`A ${pos+1}ª posição tem o valor ${num[pos]}`)
}

//exibindo vetor usando repetição simplificada, também chamada de percurso
for(let p in num){
    console.log(`A ${p+1}ª posição tem o valor ${num[p]}`)
}

// método de busca de valores dentro do vetor, retorna a posição do valor passado no parâmetro
console.log(num.indexOf(7))

// caso o valor passado não exista no vetor, o retorno deverá ser -1 conforme o exemplo abaixo
console.log(num.indexOf(23))


// DÚVIDAS
/*
    1)pq isso não funciona?
    function sortFn(a,b){return a - b}

    num.sort(sortFn())
    ________

    2)pq 'p' é considerado string?
    for(let p in num){
    console.log(`A ${p+1}ª posição tem o valor ${num[p]}`)}
*/