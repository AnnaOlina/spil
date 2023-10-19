window.onload = function(){
    document.body.innerText = ord[randomInteger(ord.length)]
}

function randomInteger(max){
    return Math.floor(Math.random()*max)
}