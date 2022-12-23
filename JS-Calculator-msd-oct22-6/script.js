///////////////////*           SWITCH     ////////////////////////////////////////////*

let input = document.getElementsByTagName('input')[0];
input.addEventListener('click', dayNight);


function dayNight() {
  let button_day = document.querySelectorAll('.button');
  let body_day = document.querySelector("body");
  let topCalculator_day = document.querySelector(".top-calculator");
  let wholeCalculator_day = document.querySelector(".whole-calculator");
  let equal_day = document.querySelector(".equal");
  let bottomCalculator_day = document.querySelector(".bottom-calculator");
  let operator_day = document.querySelectorAll('.operator');
  let erase_day = document.querySelector(".erase");
  let imgMario = document.querySelector(".img-mario");
  let imgMushroom = document.querySelector(".img-mushroom");
  let screenNumber_day = document.querySelector(".screen-numbers");
  let screenHistory_day = document.querySelector(".screen-history");



  for (let i = 0; i < button_day.length; i++) {
    button_day[i].classList.toggle("button_day");
  }
  

  body_day.classList.toggle("body_day");
  topCalculator_day.classList.toggle("top-calculator_day");
  wholeCalculator_day.classList.toggle("whole-calculator_day");
  equal_day.classList.toggle("equal_day");
  bottomCalculator_day.classList.toggle("bottom-calculator_day");
  erase_day.classList.toggle("erase_day");
  imgMario.classList.toggle("img-mario_day");
  imgMushroom.classList.toggle("img-mushroom_day");
  log.classList.toggle("log_day");
  screenNumber_day.classList.toggle("screen-numbers_day");



  ///////////////////*     EQUAL   ////////////////////////////////////////////*

  let equalButton = document.querySelector('.equal');
  equalButton.addEventListener('mousedown', downEqual);
  equalButton.addEventListener('mouseup', upEqual);
}

let log = document.querySelector(".log");
log.addEventListener('click', logHistory);

function logHistory() {
  let screenHistory = document.querySelector(".screen-history");
  screenHistory.classList.toggle("screen-history_activate");
}

function downEqual() {

  let marioAnimation = document.querySelector(".img-mario_day");
  marioAnimation.style.margin = "-15px 0px";

  let mushroomAnimation = document.querySelector(".img-mushroom");
  mushroomAnimation.style.margin = "37px 0px";
  mushroomAnimation.style.transition = "0.05s";
}

function upEqual() {
  let marioAnimation = document.querySelector(".img-mario_day");
  marioAnimation.style.margin = "0px 0px";

  let mushroomAnimation = document.querySelector(".img-mushroom");
  mushroomAnimation.style.margin = "155px 0px";
  mushroomAnimation.style.transition = "4s";
}


///////////////////*     LOGICA   ////////////////////////////////////////////*












