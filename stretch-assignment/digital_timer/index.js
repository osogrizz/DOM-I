// 10sec timer 

let msTens = document.getElementById("msTens");
let msHundreds = document.getElementById("msHundreds");
let secOnes = document.getElementById("secondOnes");
let secTens = document.getElementById("secondTens");

let allTimes = document.querySelectorAll('.digit');
console.log(allTimes)
ms = 0;

let timer = setInterval(() => {
  ms++;
  msTens.textContent = Math.floor(ms % 10)
  msHundreds.textContent = Math.floor(ms * .1) % 10;
  secOnes.textContent = Math.floor(ms * .01) % 10;
  secTens.textContent = Math.floor(ms * .001) % 10
  
  if ( secTens.textContent > '0' ) {
    msTens.textContent = 0;
    allTimes.forEach( time => {
      time.classList.add('redDigit');
    })
    clearInterval(timer)
    console.log('stop')
  }
}, 10);

// End 10sec timer
    

