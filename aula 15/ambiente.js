let num = [10,15,35,180]

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
num.sort()
console.log(num)
