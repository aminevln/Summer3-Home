let cookie = document.cookie.split(';')
let nick
cookie.forEach(function(ck){
    let parts = ck.split('=')
    if(parts[0].trim()==='nickname'){
        nick = parts[1]
    }
})
function start(){
    let p = document.getElementById('pha')
    p.textContent = "ciao di nuovo "+nick+"!!\n qui ecco il secondo piano!"
    let c = document.getElementById('gr')
    c.textContent = "casa di "+nick
}
function enable(leva){
    let a = document.getElementById('bt1')
    let b = document.getElementById('bt3')
    let c = document.getElementById('ho')
    
    if(leva.classList != 'kuku'){
        leva.classList.add('kuku')
        leva.style.filter = "brightness(2)"
        
    }else{
        leva.classList.remove('kuku')
        leva.style.filter = "brightness(1)"
    }
    if(a.style.filter == "brightness(2)" && b.style.filter == "brightness(2)"){
        c.style.backgroundImage = "url(./img/BOTH.jpg)"
    }else if((a.style.filter == "brightness(1)" || a.style.filter == "") && b.style.filter == "brightness(2)"){
        c.style.backgroundImage = "url(./img/BAGNO.jpg)"
    }else if(a.style.filter == "brightness(2)" && (b.style.filter == "brightness(1)" || b.style.filter == "") ){
        c.style.backgroundImage = "url(./img/SALOTTO.jpg)"
    }else if((a.style.filter == "brightness(1)" || a.style.filter == "") && (b.style.filter == "brightness(1)" || b.style.filter == "")){
        c.style.backgroundImage = "url(./img/BUIO.jpg)"
    }
}