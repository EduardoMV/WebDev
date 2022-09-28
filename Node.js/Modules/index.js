const superheroes = require('superheroes');
const supervillains = require('supervillains');

b = supervillains.random();
a = superheroes.random();

myArray = [a,b];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

console.log("Your super hero is: " + a + "\nYour super villian is: " + b + "\nThe winner is: " + randomItem);