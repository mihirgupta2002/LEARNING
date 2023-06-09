let randomNumber1= Math.floor(Math.random()*7);
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
let randomNumber2= Math.floor(Math.random()*7);
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="player1 won";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").textContent="player2 won";
}
else{
    document.querySelector("h1").textContent="draw";
}
