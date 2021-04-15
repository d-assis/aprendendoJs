function search(){
    var data= new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('#txtano').value
    var res = document.querySelector('#res')
    //var sexo = 

    console.log(`ano atual: ${ano}`)
    console.log(`ano inserido: ${fAno}`)

    if(fAno.length == 0 || fAno > ano){
        window.alert("[ERRO] Ano de nascimento inválido, digite um valor válido e verifique novamente")
    }
    else{
        window.alert("Okay!")
    }

    /*se(sexo == "masculino"){
        se (idade >= 1 && idade < 13){
            colocar fotinho de criança
        }senao se(idade >= 13 && idade < 21){
            colocar fotinho de jovem
        }
    }
    senao{

    }
    */
}