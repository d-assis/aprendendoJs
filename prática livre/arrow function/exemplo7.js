// Retornando JSON sem omitir a palavra reservada
let p1 = () => {
    return {nome: "fulano",
        idade: 18,
        nacionalidade: "brasileiro"
    }
};

// Retornando JSON omitindo a palavra reservada
let p2 = () => ({
    nome: "beltrano",
    idade: 25,
    nacionalidade:"francês"
});

console.log(p1());

console.log(p2());