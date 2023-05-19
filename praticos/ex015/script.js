function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >=0 && idade < 10 ) {
               //criança
               img.setAttribute('src', 'imagens/bebêmasc.png')
            }else if (idade < 21) {
               // jovem
               img.setAttribute('src', 'imagens/jovemmasc.png')
            }else if (idade < 50) {
               // adulto
               img.setAttribute('src', 'imagens/adultomasc.png')
            }else {
               // idoso
               img.setAttribute('src', 'imagens/idosomasc.png')
            }

        }else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >=0 && idade < 10) {
               // criança
               img.setAttribute('src', 'imagens/bebêfem.png')
            }else if (idade < 21) {
               // jovem
               img.setAttribute('src', 'imagens/jovemfem.png')
            }else if (idade < 50) {
               // adulto
               img.setAttribute('src', 'imagens/adultafem.png')
            } else {
               // idoso
               img.setAttribute('src', 'imagens/idosofem.png')
            }
        }
        res.style.textAlign = 'center'
        img.style.display = 'block'
        img.style.margin = 'auto'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
   }
}