let timer;
let hours = 0;
let sec = 0;
let min = 0;

const handleStart = () => {
  timer = setInterval(() => {
    watch();
  }, 100);
};

const handleStop = () => {
  clearInterval(timer);
};

const handleReset = () => {
  document.querySelector(".counter").innerHTML = "00:00:00";
  clearInterval(timer);
};

const handleLap = () => {
  let valLap = document.querySelector(".counter").innerText; // Aqui vai pegar o valor que está no cronometro
  console.log(valLap);
};

const twoNumbers = (num) => {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
};

const watch = () => {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  } else if (min == 60) {
    hours++;
    min = 0;
    sec = 0;
  }
  document.querySelector(".counter").innerHTML = `${twoNumbers(
    hours
  )}:${twoNumbers(min)}:${twoNumbers(sec)}`;
};
