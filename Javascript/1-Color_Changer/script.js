
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (btn) => {

      btn.addEventListener('click', function (e) {

            // console.log(e);         // Event
            // console.log(e.target);  // Target Element Click

            let eleIdName = e.target.id
            switch(eleIdName) {
                  case 'white':
                        body.style.backgroundColor = eleIdName;
                        body.style.color = "black";
                        break;
                  case 'blue':
                        body.style.backgroundColor = eleIdName;
                        body.style.color = "white";
                        break;
                  case 'yellow':
                        body.style.backgroundColor = eleIdName;
                        body.style.color = "black";
                        break;
                  case 'red':
                        body.style.backgroundColor = eleIdName;
                        break;
                  case 'green':
                        body.style.backgroundColor = eleIdName;
                        break;
                  default:
                        body.style.backgroundColor = "grey"; 
            }
      });
});