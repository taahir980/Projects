
// Write a function which generates random color

function randomColorGenerator() {

      const hexVals = "0123456789ABCDEF";
      let color = '#';

      for(let i = 0; i<6; i++) {
            color += hexVals[Math.floor(Math.random() * 16)];
      }
      return color;
}

let intervalId;
const startChangingColor = function () {
      
      function changeBgColor() {
            document.body.style.backgroundColor = randomColorGenerator();
      }

      if(!intervalId) {     // Code Quality Improvement, By Checking Edge Case.
            intervalId = setInterval(changeBgColor, 1000);
      }
};

const stopChangingColor = function() {
      clearInterval(intervalId);
      intervalId = null;           // Code Quality Improvement
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);