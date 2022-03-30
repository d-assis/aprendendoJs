function rolaDados (){
    let d = 20
    let cd = 10
    let roller = `http://roll.diceapi.com/json/d${d}`
    let txt = document.querySelector('#txt')

    txt.innerHTML = `classe de dificuldade: ${cd}`
    fetch(roller)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.dice[0].value)
        return data.dice[0].value
    })
    .then((diceRes) => {
        if(diceRes >= cd && diceRes != d){
            console.log(`rolou ${diceRes} e passou no teste!`)
        } else if(diceRes == 1){
            console.log(`rolou ${diceRes}! FALHA CRÍTICA!`)
        } else if(diceRes == d){
            console.log(`rolou ${diceRes}! ACERTO CRÍTICO!`)
        } else {
            console.log(`rolou ${diceRes} e falhou no teste...`)
        }
    })
    .catch((err) => console.log(`oops! ${err}`))

}
