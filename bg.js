const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintIMG(imgNumber){
    const image = new Image();
    img.src = '/imgs/'
}

function genRandom(){
    const number = Math.floor(Math.random() * 3);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintIMG(randomNumber )
}

init();