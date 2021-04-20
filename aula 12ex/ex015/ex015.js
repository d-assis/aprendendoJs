function search(){
    var data= new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('#txtano').value
    var res = document.querySelector('#res')

    //console.log(`ano atual: ${ano}`)
    //console.log(`ano inserido: ${fAno}`)

    if(fAno.length == 0 || fAno > ano){
        window.alert("[ERRO] Ano de nascimento inválido, digite um valor válido e verifique novamente")
    }
    else{

        /* vinculando fsex ao objeto html radsex através do método getElementsByName, que consulta e lista todos os elementos com o nome fornecido num vetor. 
        nesse caso, a contraparte masculina de radsex (com id 'masc') ocupa do espaço [0] do vetor, enquanto o feminino (id 'fem') ocupa o espaço [1]
        */
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno
        var foto = document.querySelector('#foto')

        
        if(fsex[0].checked){
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos um homem com ${idade} anos`

            if(idade >= 0 && idade < 13){
                foto.src = 'bebeM.png'
            } else if(idade >= 13 && idade < 25){
                foto.src = 'jovemM.png'
            } else if(idade >= 25 && idade < 60){
                foto.src = 'adultoM.png'
            } else{
                foto.src = 'idosoM.png'
            }
        }
        else{
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos uma mulher com ${idade} anos`

            if(idade >= 0 && idade < 13){
                foto.src = 'bebeF.png'
            } else if(idade >= 13 && idade < 25){
                foto.src = 'jovemF.png'
            } else if(idade >= 25 && idade < 60){
                foto.src = 'adultoF.png'
            } else{
                foto.src = 'idosoF.png'
            }
        }
    }
}