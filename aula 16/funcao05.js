// Recursividade
// a função abaixo apresenta uma chamada para si mesma dentro do próprio bloco de ações, caracterizando a chamada recursividade
function fatorial(n){
    if(n == 1){
        return 1
    }
    else{
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))

/*
    5! = 5 x 4 x 3 x 2 x 1
    5! = 5 x 4!

    n! = n x (n-1)!
    1! = 1
*/
