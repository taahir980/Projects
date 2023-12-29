
const clock = document.getElementById('clock')

// Runs the function after each 1 Sec.

setInterval( function() {
      const date = new Date();
      clock.innerText = date.toLocaleTimeString();
}, 1000);