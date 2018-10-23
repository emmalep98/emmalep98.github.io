"use strict";

const messageWrapper = document.getElementById('message');

const nOne = prompt('Enter first number');
const nTwo = prompt('Enter second number');
const nThree = prompt('Enter third number');
const nFour = prompt('Enter fourth number');

let message = 'Your answer is ' + (nOne + nTwo - nThree) * nFour + '!';

messageWrapper.innerText = message;