function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manhar.png'
        document.body.style.background = '#A89E3A'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.setyle.background = '#C67B24'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#212C2F'
    }
   
}