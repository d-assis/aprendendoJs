console.log('iniciando...')

// estrutura de repetição com teste no início
let i = 1

while(i <= 10){
    console.log(`${i}a repetição`)
    
    if(i == 10){
        console.log('FIM')
    }
    
    i++
}

// estrutura de repetição com teste no fim
i = 1

do{
    console.log(`${i}a repetição`)
    
    if(i == 10){
        console.log('FIM')
    }
    
    i++
}while(i <= 10)

// estrutura de repetição com variável de controle
for(let c = 1; c <= 10; c++){
    console.log(`${c}a repetição`)
    
    if(c == 10){
        console.log('FIM')
    }
}