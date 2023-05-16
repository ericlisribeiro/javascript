var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são extamente ${hora} horas.`)
if (hora >= 5 && hora < 12  ) {
    console.log('bom dia !')
}
else if (hora <= 18) {
    console.log('boa tarde')
}else  if (hora <= 24) {
    console.log('boa noite !')
}
else if (hora >= 1 ) {
    console.log('boa madrugada !')
}

