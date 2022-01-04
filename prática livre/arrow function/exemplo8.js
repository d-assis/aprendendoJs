// IIFE em formato padrão
(function (){
    console.log("olá mundo!")
    console.log("Alternativa A")
})();

// IIFE alternativa
(function (){
    console.log("olá mundo!")
    console.log("Alternativa B")
}());

// IIFE usando arrow functions
// seguimos o formato padrão, excluindo a palavra reservada "function" e introduzindo a seta entre os parâmetros e bloco de código
(() => {
    console.log("olá mundo!")
    console.log("Alternativa C")
})();