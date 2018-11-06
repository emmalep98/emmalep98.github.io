
(function () {
   let counter = 0;

   const originalHTML = document.body.innerHTML;
   let messageWrapper = document.getElementById('message');



   document.onclick = function (event) {
      event.preventDefault();
      document.body.innerHTML = originalHTML;
      messageWrapper = document.getElementById('message');
   }

   document.onkeydown = function (event) {
      if (event.keyCode === 32) {
         event.preventDefault();
      }

   }

   document.onkeyup = function (event) {
      const keyCodePressed = event.keyCode;
      const coordinates = helpers.generateCoordinates();
      messageWrapper.innerText = keyCodePressed + ':' + event.key;

      if (keyCodePressed === 87) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const watermelon = document.createElement('img');
         watermelon.className = 'watermelon';
         watermelon.src = `img/watermelon.png`;
         watermelon.style.left = `${coordinates.x}px`;
         watermelon.style.top = `${coordinates.y}px`;
         watermelon.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(watermelon);

      }

      if (keyCodePressed === 65) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const alligator = document.createElement('img');
         alligator.className = 'alligator';
         alligator.src = `img/alligator.png`;
         alligator.style.left = `${coordinates.x}px`;
         alligator.style.top = `${coordinates.y}px`;
         alligator.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(alligator);

      }

      if (keyCodePressed === 66) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const button = document.createElement('img');
         button.className = 'button';
         button.src = `img/button.png`;
         button.style.left = `${coordinates.x}px`;
         button.style.top = `${coordinates.y}px`;
         button.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(button);

      }


      if (keyCodePressed === 67) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const car = document.createElement('img');
         car.className = 'car';
         car.src = `img/car.png`;
         car.style.left = `${coordinates.x}px`;
         car.style.top = `${coordinates.y}px`;
         car.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(car);

      }

      if (keyCodePressed === 68) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const donut = document.createElement('img');
         donut.className = 'donut';
         donut.src = `img/donut.png`;
         donut.style.left = `${coordinates.x}px`;
         donut.style.top = `${coordinates.y}px`;
         donut.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(donut);

      }


      if (keyCodePressed === 69) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const eye = document.createElement('img');
         eye.className = 'eye';
         eye.src = `img/eye.png`;
         eye.style.left = `${coordinates.x}px`;
         eye.style.top = `${coordinates.y}px`;
         eye.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(eye);

      }



      if (keyCodePressed === 70) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const fork = document.createElement('img');
         fork.className = 'fork';
         fork.src = `img/fork.png`;
         fork.style.left = `${coordinates.x}px`;
         fork.style.top = `${coordinates.y}px`;
         fork.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(fork);

      }


      if (keyCodePressed === 71) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const glasses = document.createElement('img');
         glasses.className = 'glasses';
         glasses.src = `img/glasses.png`;
         glasses.style.left = `${coordinates.x}px`;
         glasses.style.top = `${coordinates.y}px`;
         glasses.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(glasses);

      }


      if (keyCodePressed === 72) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const hippo = document.createElement('img');
         hippo.className = 'hippo';
         hippo.src = `img/hippo.png`;
         hippo.style.left = `${coordinates.x}px`;
         hippo.style.top = `${coordinates.y}px`;
         hippo.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(hippo);

      }

      if (keyCodePressed === 73) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const icecream = document.createElement('img');
         icecream.className = 'icecream';
         icecream.src = `img/icecream.png`;
         icecream.style.left = `${coordinates.x}px`;
         icecream.style.top = `${coordinates.y}px`;
         icecream.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(icecream);

      }

      if (keyCodePressed === 74) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const juice = document.createElement('img');
         juice.className = 'juice';
         juice.src = `img/juice.png`;
         juice.style.left = `${coordinates.x}px`;
         juice.style.top = `${coordinates.y}px`;
         juice.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(juice);

      }

      if (keyCodePressed === 75) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const key = document.createElement('img');
         key.className = 'key';
         key.src = `img/key.png`;
         key.style.left = `${coordinates.x}px`;
         key.style.top = `${coordinates.y}px`;
         key.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(key);

      }

      if (keyCodePressed === 76) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const lemon = document.createElement('img');
         lemon.className = 'lemon';
         lemon.src = `img/lemon.png`;
         lemon.style.left = `${coordinates.x}px`;
         lemon.style.top = `${coordinates.y}px`;
         lemon.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(lemon);

      }


      if (keyCodePressed === 77) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const moon = document.createElement('img');
         moon.className = 'moon';
         moon.src = `img/moon.png`;
         moon.style.left = `${coordinates.x}px`;
         moon.style.top = `${coordinates.y}px`;
         moon.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(moon);

      }


      if (keyCodePressed === 78) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const nail = document.createElement('img');
         nail.className = 'nail';
         nail.src = `img/nail.png`;
         nail.style.left = `${coordinates.x}px`;
         nail.style.top = `${coordinates.y}px`;
         nail.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(nail);

      }

      if (keyCodePressed === 79) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const oven = document.createElement('img');
         oven.className = 'oven';
         oven.src = `img/oven.png`;
         oven.style.left = `${coordinates.x}px`;
         oven.style.top = `${coordinates.y}px`;
         oven.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(oven);

      }

      if (keyCodePressed === 80) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const pig = document.createElement('img');
         pig.className = 'pig';
         pig.src = `img/pig.png`;
         pig.style.left = `${coordinates.x}px`;
         pig.style.top = `${coordinates.y}px`;
         pig.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(pig);

      }

      if (keyCodePressed === 81) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const quarter = document.createElement('img');
         quarter.className = 'quarter';
         quarter.src = `img/quarter.png`;
         quarter.style.left = `${coordinates.x}px`;
         quarter.style.top = `${coordinates.y}px`;
         quarter.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(quarter);

      }

      if (keyCodePressed === 82) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const rock = document.createElement('img');
         rock.className = 'rock';
         rock.src = `img/rock.png`;
         rock.style.left = `${coordinates.x}px`;
         rock.style.top = `${coordinates.y}px`;
         rock.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(rock);

      }

      if (keyCodePressed === 83) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const scissors = document.createElement('img');
         scissors.className = 'scissors';
         scissors.src = `img/scissors.png`;
         scissors.style.left = `${coordinates.x}px`;
         scissors.style.top = `${coordinates.y}px`;
         scissors.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(scissors);

      }


      if (keyCodePressed === 84) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const telephone = document.createElement('img');
         telephone.className = 'telephone';
         telephone.src = `img/telephone.png`;
         telephone.style.left = `${coordinates.x}px`;
         telephone.style.top = `${coordinates.y}px`;
         telephone.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(telephone);

      }

      if (keyCodePressed === 85) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const umbrella = document.createElement('img');
         umbrella.className = 'umbrella';
         umbrella.src = `img/umbrella.png`;
         umbrella.style.left = `${coordinates.x}px`;
         umbrella.style.top = `${coordinates.y}px`;
         umbrella.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(umbrella);

      }

      if (keyCodePressed === 86) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const violin = document.createElement('img');
         violin.className = 'violin';
         violin.src = `img/violin.png`;
         violin.style.left = `${coordinates.x}px`;
         violin.style.top = `${coordinates.y}px`;
         violin.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(violin);

      }

      if (keyCodePressed === 88) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const x = document.createElement('img');
         x.className = 'x';
         x.src = `img/x.png`;
         x.style.left = `${coordinates.x}px`;
         x.style.top = `${coordinates.y}px`;
         x.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(x);

      }

      if (keyCodePressed === 89) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const yolk = document.createElement('img');
         yolk.className = 'yolk';
         yolk.src = `img/yolk.png`;
         yolk.style.left = `${coordinates.x}px`;
         yolk.style.top = `${coordinates.y}px`;
         yolk.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(yolk);

      }

      if (keyCodePressed === 90) {

         const degreesRotaion = Math.floor(Math.random() * 360);

         const zebra = document.createElement('img');
         zebra.className = 'zebra';
         zebra.src = `img/zebra.png`;
         zebra.style.left = `${coordinates.x}px`;
         zebra.style.top = `${coordinates.y}px`;
         zebra.style.transform = `rotate(${degreesRotaion}deg)`;
         document.body.appendChild(zebra);

      }



      if (keyCodePressed === 13) {

         var audio = document.createElement('audio')
         audio.setAttribute('src', 'img/music.wav')
         audio.setAttribute('autoplay', 'autoplay')
         audio.play();
      }





      if (keyCodePressed === 32) {
         helpers.removeClass('animated');
         document.body.style.backgroundColor = helpers.generateRandomColorString();
      }





      counter++;
      messageWrapper.style.zIndex = counter;

   }

   const getPhrase = function () {
      const exclamations = ['Wow!', 'Neat!', 'Incredible!', 'JavaScript rules!', 'Bravo!', 'Fantastic!', 'Creative Computing'];
      const index = Math.floor(Math.random() * exclamations.length);
      return exclamations[index];
   }

   setInterval(function () {
      messageWrapper.style.color = helpers.generateRandomColorString(false);
   }, 1000);

   // This object contains helper functions
   const helpers = {

      removeClass: (cssClass) => {
         if (document.body.classList.contains(cssClass)) {
            document.body.classList.remove(cssClass);
         }
      },

      generateCoordinates: () => {
         const x = Math.floor(Math.random() * window.innerWidth);
         const y = Math.floor(Math.random() * window.innerHeight);
         return { x, y };
      },

      // helpers.generateRandomColorString()
      generateRandomColorString: (alpha = true) => {
         // random RBG values
         const r = Math.floor(Math.random() * 255);
         const g = Math.floor(Math.random() * 255);
         const b = Math.floor(Math.random() * 255);
         // fully opaque if `false` is passed to function
         let a = 1;
         if (alpha) {
            a = Math.random();
         }

         return `rgba(${r},${g},${b},${a})`;
      }

   }




}()); 