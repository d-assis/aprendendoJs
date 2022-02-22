let card = {
    cor: "azul",
    nome:"counterspell",
    cmc: 2,
    conjurar: function(alvo){
        return `A magia ${alvo} foi anulada`
    }
};
console.log(card.conjurar('kozilek'));

let cardInfo = {
    ruleText: "counter target spell",
    tipo:"mágica instantânea"
};

// o método Object.assign() recebe dois ou mais objetos como parâmetros sendo que o primeiro receberá as 
//propriedades e métodos do segundo em diante.
// uma boa prática é sempre usar um objeto vazio como primeiro parâmetro e ao mesmo tempo atribuir o 
//valor de retorno da função a uma nova variável.

let counterspell = Object.assign({},card,cardInfo);
console.log(counterspell);

// De forma alternativa, podemos unir objetos usando a sintaxe "spread" denotada pelo sinal "..."
// Usando o recurso spread, trazemos o conteúdo de outros objetos já declarados para a raiz do novo objeto

let contramagica = {
    ...card,
    ...cardInfo,
};

console.log(contramagica);