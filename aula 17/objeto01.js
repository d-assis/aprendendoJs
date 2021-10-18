let migo = []
console.log(typeof migo)

let amigo = {
    nome: 'Lauro',
    sexo:'M',
    peso: 80,
    engordar(p = 0){
        console.log('engordou')
        this.peso += p
    }
}
console.log(amigo)
amigo.engordar(2.54)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)