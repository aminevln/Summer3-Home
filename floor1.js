let cookie = document.cookie.split(';')
let nick
cookie.forEach(function(ck){
    let parts = ck.split('=')
    if(parts[0].trim()==='nickname'){
        nick = parts[1]
    }
})
function goTo(){
    document.cookie = "nickname="+nick
}
function start(){
    let p = document.getElementById('pha')
    let c = document.getElementById('gr')
    p.textContent = "rieccoti "+nick+"!!\n qui potrai monitorare le luci di casa tua tramite le leve qui a destra. occhio alle bollette"
    c.textContent = "casa di "+nick
}
function enable(leva){
    if(leva.classList != 'kuku'){
        let a = leva.id.split('t')[1]
        let id = 'op'+a
        let light = document.getElementById(id)
        leva.classList.add('kuku')
        light.style.opacity = "0"
        leva.style.filter = "brightness(2)"
    }else{
        let a = leva.id.split('t')[1]
        let id = 'op'+a
        let light = document.getElementById(id)
        leva.classList.remove('kuku')
        light.style.opacity = ".5"
        leva.style.filter = "brightness(1)"
    }
    
}