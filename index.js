
var ran1 = Math.floor(Math.random() * 6) + 1;
var ran2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + ran1 + ".png"; 
var randomImageSource2 = "images/dice" + ran2 + ".png"; 

// var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

document.querySelector(".img1").setAttribute('src', randomImageSource1);
document.querySelector(".img2").setAttribute('src', randomImageSource2);

if(ran1 > ran2){
    document.querySelector("h1").textContent = "player 1 Wins";
}
else if (ran1 === ran2 ){
    document.querySelector("h1").textContent = "Draw";
}
else{
    document.querySelector("h1").textContent = "player 2 Wins";
}