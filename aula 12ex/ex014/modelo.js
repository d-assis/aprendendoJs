function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new.Date()
    var hora = data.getHours

    msg.innerHTML = `Agora são ${hora} horas...`

    if(hora >= 0 && hora < 12){
        //bom dia
    } else if(hora >=12 && hora < 18){
        //boa tarde
    } else {
        // boa noite
    }

}

    