    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas...`
    
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = "manha.png"
        document.querySelector('#headL').innerHTML = 'Bom dia!'
    } else if(hora >=12 && hora < 18){
        //boa tarde
        img.src = "tarde.png"
        document.querySelector('#headL').innerHTML = 'Boa Tarde!'
    } else {
        // boa noite
        img.src = "noite.png"

        document.querySelector('#headL').innerHTML = 'Boa noite!'
    }    