window.onload = function(){
    let ord = ["cykling", "løb", "tennis", "arbejde"]
    document.body.innerText = ord[randomInteger(ord.length)]
}

function randomInteger(max){
    return Math.floor(Math.random()*max)
}