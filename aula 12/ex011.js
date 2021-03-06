var idade = 16
console.log(`você tem ${idade} anos.`)
if (idade < 16){
    console.log('não vota')
} else if(idade < 18 || idade >= 67){
        console.log('voto facultativo')
    }else{
        console.log('voto obrigatório')
    }