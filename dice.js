// For 1st Dice
var randomNumber1 = Math.floor( Math.random() * 6) + 1; //1-6
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource); 

// For 2nd Dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" +randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//Logic who will or who will loose
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
    document.querySelector("h1").style.fontSize = "5rem";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    document.querySelector("h1").style.fontSize = "5rem";
}
else
{
    document.querySelector("h1").innerHTML = "DRAW";
    document.querySelector("h1").style.fontSize = "5rem";
}