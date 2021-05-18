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
        /*
            a função createElement('tipo de tag') cria em tempo real um novo elemento HTML na página, porém, sem especificar a localização ou atributos desse elemento, o mesmo permanece invisível
        */
        var foto = document.createElement('img')

        // a função setAttribute('nome do atributo', 'valor do atributo') cria e adiciona um novo atributo a um elemento específico, nesse caso o objeto foto
        foto.setAttribute('id', 'foto')

        
        if(fsex[0].checked){
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos um homem com ${idade} anos`

            if(idade >= 0 && idade < 13){
                foto.setAttribute('src', 'bebeM.png')
            } else if(idade >= 13 && idade < 25){
                foto.setAttribute('src', 'jovemM.png')
            } else if(idade >= 25 && idade < 60){
                foto.setAttribute('src', 'adultoM.png')
            } else{
                foto.setAttribute('src', 'idosoM.png')
            }
        }
        else{
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos uma mulher com ${idade} anos`

            if(idade >= 0 && idade < 13){
                foto.setAttribute('src', 'bebeF.png')
            } else if(idade >= 13 && idade < 25){
                foto.setAttribute('src', 'jovemF.png')
            } else if(idade >= 25 && idade < 60){
                foto.setAttribute('src', 'adultoF.png')
            } else{
                foto.setAttribute('src', 'idosoF.png')
            }

        }

        /* 
            aqui especificamos a localização do objeto foto que deve ser posicionado dentro de res, que por sua vez é um objeto HTML do tipo <div>. 
            isso é feito através do método appendChild('elemento')
        */
        res.appendChild(foto)
    }
}