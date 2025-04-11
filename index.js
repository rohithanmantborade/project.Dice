var randomNumber1=Math.floor(Math.random()*6)+1;
var DiceImageSrc="images/"+ "dice" + randomNumber1 +".png";
var one=document.getElementById("first");
one.setAttribute("src",DiceImageSrc);


var randomNumber2=Math.floor(Math.random()*6)+1;
var DiceImageSrc2="images/"+ "dice" + randomNumber2 +".png";
var two=document.getElementById("second");
two.setAttribute("src",DiceImageSrc2);
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 2 WIN";
}else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WIN";

}else{
    document.querySelector("h1").innerHTML="TIE!!";
}
