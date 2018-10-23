"use strict";

const messageWrapper = document.getElementById('message');

const nOne = (parseInt(prompt('Enter first number'));
const nTwo = (parseInt(prompt('Enter second number'));
const nThree = (parseInt(prompt('Enter third number'));
const nFour = (parseInt(prompt('Enter fourth number'));

let message = 'Your answer is ' + (nOne + nTwo - nThree) * nFour + '!';

messageWrapper.innerText = message;