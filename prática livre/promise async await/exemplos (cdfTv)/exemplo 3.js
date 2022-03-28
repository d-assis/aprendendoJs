// associa o elemento ul com ID users a constante ul
const ul = document.querySelector('#users')

// atribui a string em forma de endereço da web à constante url
const url = 'https://jsonplaceholder.typicode.com/users'

// método assíncrono que faz uma requisição http ao endereço informado no parâmetro
// retorna uma Promise
fetch(url)
    // a linha abaixo não funciona, mas pq???????
    //.then((response) => {response.json()})
    // resposta: a linha em questão não funciona pois ao utilizar chaves no bloco de código de uma 
    //arrowfn, é necessário especificar o valor de retorno da função usando a palavra reservada return.
    // Caso as chaves fossem suprimidas, o interpretador assumiria que o valor escrito após o sinal => é
    //o valor de retorno da função.
    
    // usamos then() para tratar o retorno resolvido de fetch()
    // na linha abaixo convertemos a resposta http para o formato json
    .then(response => response.json())
    // em seguida, com outro then(), tratamos o retorno resolvido do primeiro then, chamando-o de data
    .then((data) => {
        // registramos o conteúdo de data no console
        console.log(data)
        
        // aplicamos o método map() em data, que é um vetor, fornecendo como parâmetro a função a seguir
        return data.map((user) => {
            // cria um novo elemento html e armazena na variável li
            let li = document.createElement('li');
            // altera o valor da propriedade innerHTML de li utilizando propriedades
            //do próprio data, nomeado como user no escopo dessa função
            li.innerHTML = `${user.name} (${user.username})`;
            // vincula li ao nó html previamente especificado 
            ul.appendChild(li)
        })
        
    })
    // adiciona uma resposta de erro para a cadeia de tratamentos vinculados ao fetch()
    // registra o caso de erro no console concatenando com a string
    .catch((error) => {console.log(`Ooops! ${error}`)})
