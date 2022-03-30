// a função a seguir é chamada ao clicar no botão criado no html
// nesse exemplo utilizamos a palavra async na declaração da função para 
//"preparar o terreno" para chamadas assíncronas realizadas dentro da função mãe 
async function rolaDados (){
    //aqui declaramos algumas váriáveis para melhor organização
    let d = 20
    let cd = 10
    let roller = `http://roll.diceapi.com/json/d${d}`
    
    //e mapeamos pontos de interesse na página html
    let txt = document.querySelector('#txt')
    let res = document.querySelector('#output')
    txt.innerHTML = `classe de dificuldade: ${cd}`
    
    /*
    fetch(roller)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        return data.dice[0].value
    })
    .then((diceRes) => {
        if(diceRes >= cd && diceRes != d){
            res.innerHTML = `rolou ${diceRes} e passou no teste!`
        } else if(diceRes == 1){
            res.innerHTML = `rolou ${diceRes}! FALHA CRÍTICA!`
        } else if(diceRes == d){
            res.innerHTML = `rolou ${diceRes}! ACERTO CRÍTICO!`
        } else {
            res.innerHTML = `rolou ${diceRes} e falhou no teste...`
        }
    })
    .catch((err) => console.log(`oops! ${err}`))
    */

    // Na notação async/await, tratamos os valores de resolve e reject de uma promise de forma diferente.
    // abrimos um bloco try{} para invocar a chamada assíncrona e realizar processos com o valor de retorno no caso de sucesso, 
    //e abrimos um bloco catch (err){} para tratar casos de falha na resolução da promise 
    try{
        // aqui começamos a ver a diferença no modo de tratamento do async/await.
        // Ao invés de encadear métodos then() que recebem o retorno da promise resolvida,
        //e aplicam o mesmo em uma série de processos, utilizamos a palavra await 
        //precedendo a chamada para uma função assíncrona.
        // A chamada utilizada nesse exemplo seria fetch
        const response = await fetch(roller)
        
        // a palavra await precedendo uma chamada assíncrona ou processo 
        //envolvendo promises, permite que a execução do script só siga seu curso uma vez que
        //a promisse tenha sido resolvida ou rejeitada.
        // Na linha abaixo, caso removessemos await, o método console.log() seria executado antes 
        //que fetch fosse resolvido, resultando no registro de uma promessa pendente no nosso console.
        // Métodos e processos diretamente dependentes do valor da promise resolvida 
        //também apresentariam comportamento irregular.
        const data = await response.json()
        
        // Aqui registramos no console o valor de retorno de fetch() formatado em json.
        console.log(data)

        // Aqui extraímos o valor da rolagem de dados, presente numa propriedade do json de retorno, 
        //e armazenamos na variável diceRes
        let diceRes = data.dice[0].value

        // Por fim, usamos um desvio condicional composto para determinar a exibição do resultado na tela
        if(diceRes >= cd && diceRes != d){
            res.innerHTML = `rolou ${diceRes} e passou no teste!`
        } else if(diceRes == 1){
            res.innerHTML = `rolou ${diceRes}! FALHA CRÍTICA!`
        } else if(diceRes == d){
            res.innerHTML = `rolou ${diceRes}! ACERTO CRÍTICO!`
        } else {
            res.innerHTML = `rolou ${diceRes} e falhou no teste...`
        }
    } catch (err) {
        // Aqui trazemos um tratamento para um possível erro com a chamada assíncrona realizada no bloco try{}
        res.innerHTML = `Algo deu errado...${err}`
    }
    
}
