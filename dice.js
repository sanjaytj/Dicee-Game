//Dice 1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
console.log(randomNumber1);
const randomNumber1Image = './images/dice'+randomNumber1+'.png';

document.querySelectorAll("img")[0].setAttribute('src', randomNumber1Image);
//Dice 2
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
console.log(randomNumber2);
const randomNumber2Image = './images/dice'+randomNumber2+'.png';

document.querySelectorAll("img")[1].setAttribute('src', randomNumber2Image);
// Select Winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = 'Player 1 Wins';
} else{
    document.querySelector("h2").innerHTML = 'Player 2 Wins';
}