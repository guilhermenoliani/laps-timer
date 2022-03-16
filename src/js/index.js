"use strict";

let timer;
let hours = 0;
let sec = 0;
let min = 0;

const handleStart = () => {
  timer = setInterval(() => {
    watch();
  }, 10);
};

const handleStop = () => {
  clearInterval(timer);
};

const handleLap = () => {
  let valLap = document.querySelector(".counter").innerText; // Aqui vai pegar o valor que está no cronometro

  const item = document.createElement("div");
  item.classList.add("todo__new-item");
  item.innerHTML = `
  <div class="content__todo-item">
  <div class="item_img_arrow-right" >
    <img  src="./images/icons-laps/corner-down-right.svg" alt="" />
  </div>
  <div class="text_content_laps">Laps <span class='number'></span> -- ${valLap}</div>
    <div class="item_img_cross">
      <img onclick="clearLaps()" src="./images/icons-laps/corner-up-left.svg" alt="" />
    </div>
  </div>
  
  `;
  document.getElementById("todoList").appendChild(item);
};

function somar() {
  var counter = 1;
  counter++;
}

const clearLaps = () => {
  let item = document.querySelector(".todo__new-item");
  item.remove();
};

const handleReset = () => {
  document.querySelector(".counter").innerHTML = "00:00:00";
  document.querySelector("#todoList").innerHTML = "";
  clearInterval(timer);
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
