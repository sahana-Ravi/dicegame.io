function randomGen(){
x = document.querySelector("h1");

randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
 x.textContent = "Player 1 Wins!!";
}
if (randomNumber2 > randomNumber1) {
 x.textContent = "Player 2 Wins!!";
}
if (randomNumber1 === randomNumber2) {
 x.textContent = "Draw!";
}
}
