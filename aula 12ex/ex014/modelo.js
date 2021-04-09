function carregar (){
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas...`
    
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = "manha.png"
        document.querySelector('#headL').innerHTML = 'Bom dia!'
        document.body.style.backgroundColor = '#e3c13b'
        document.querySelector('#headL').style.color = '#3a3957'
        document.querySelector('#foot').style.color = '#3a3957'
    } else if(hora >=12 && hora < 18){
        //boa tarde
        img.src = "tarde.png"
        document.querySelector('#headL').innerHTML = 'Boa Tarde!'
        document.body.style.backgroundColor = '#e05164'
    } else {
        // boa noite
        img.src = "noite.png"
        document.querySelector('#headL').innerHTML = 'Boa noite!'
        document.body.style.backgroundColor = "#3e2973"
    }    
}