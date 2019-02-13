var randomnum1=Math.floor(Math.random()*6)+1

var randomnum2=Math.floor(Math.random()*6)+1

var imagesrc1="images/dice"+randomnum1+".png";

var imagesrc2="images/dice"+randomnum2+".png";

var changedice1=document.querySelectorAll("img")[0].setAttribute("src",imagesrc1);

var changedice2=document.querySelectorAll("img")[1].setAttribute("src",imagesrc2);

if(randomnum1 > randomnum2){
    document.querySelector("h1").innerHTML="player-1 win!"
}
 else if(randomnum2>randomnum1){
    document.querySelector("h1").innerHTML="player-2 win!"
 }

 else{
    document.querySelector("h1").innerHTML="DRAW!"
 }

