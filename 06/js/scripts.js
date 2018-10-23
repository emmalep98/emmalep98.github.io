"use strict";


const messageWrapper = document.getElementById('message');

const name = prompt('What is your name?');
const age = prompt('What is your age?');
const eyes = prompt('What color are your eyes?');
const middle = prompt('What is your middle name?');

let message = 'Hello, ' + name + '!';

message += '\n You are ' + age + ' years old and your eyes are ' + eyes + '!!!!!!\n';

if (age > 18) {
   message += 'Wow! You are so grown up!';
} else if (age < 13) {
   message += 'Should you even be on the internet?????!!!\n';
}


message += 'Your middle name is ' + middle + '!';

console.log('Hello, ' + name + '!');
console.log('You are ' + age + ' years old!');
console.log(message);

messageWrapper.innerText = message;
