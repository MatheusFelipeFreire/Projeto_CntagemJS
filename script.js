function verificar(){
var ini = document.getElementById('ini')
var end = document.getElementById('end')
var pas = document.getElementById('pas')
var res = document.getElementById('res')
if(ini.value.length == 0 || end.value.length == 0 || pas.value.length == 0){
    window.alert('[ERRO] Verifique seus Dados.')
} else {
    res.innerHTML = 'Contando....'
    var i =  Number(ini.value)
    var f = Number(end.value)
    var p = Number(pas.value)

    for(var c = i; c <= f; c += p){
        res.innerHTML += ` ${c}`
    }
}
}