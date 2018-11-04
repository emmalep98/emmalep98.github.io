"use strict";

let keyCodePressed;
let coordinateWrapper = document.getElementById('coordinates');

document.onkeyup = function (event) {
   keyCodePressed = event.keyCode;
   document.getElementById('message').innerHTML = keyCodePressed;

   if (keyCodePressed === 13) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      console.log(x, y);
      const coordinates = 'x: ' + x + ', y: ' + y;
      coordinateWrapper.innerHTML = coordinates;
      coordinateWrapper.appendChild(document.createElement('div'));
   }

}


