
let screenNumbers = document.querySelector(".screen-numbers");
let screenHistory = document.querySelector(".screen-history");
let button = document.querySelectorAll(".button");
let erase = document.querySelector(".erase");
let equal = document.querySelector(".equal");
let logNum = "";



let almacenar = "";

if (almacenar == "") {
  let poner_Cero = "0";
  screenNumbers.innerHTML = poner_Cero;
}



for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", addToScreen);
}

equal.addEventListener("click", equalResult);

function addToScreen(event) {
  let longitud = 9;
  while (screenNumbers.innerHTML.length < longitud) {
    if (screenNumbers.innerHTML !== "0") {
      screenNumbers.innerHTML += event.target.value;
      almacenar += event.target.value;
      break;
    } else {
      screenNumbers.innerHTML = event.target.value;
      almacenar = event.target.value;
      break;
    }

  }

}



function equalResult() {
  if (almacenar == "") {
    poner_Cero = "0";
    screenNumbers.innerHTML = poner_Cero;
  } else {
    almacenar = eval(almacenar);
    logNum += screenNumbers.innerHTML + " = " + almacenar + `<br>`;
    screenNumbers.innerHTML = almacenar;
    screenHistory.innerHTML = logNum;
  }


}

erase.addEventListener("click", eraseResult);

function eraseResult() {
  poner_Cero = "0";
  screenNumbers.innerHTML = poner_Cero;
  almacenar = "";

}

let delLog = document.querySelector('.delLog');
delLog.addEventListener('click', delete_log);

function delete_log() {
  logNum = "";
  screenHistory.innerHTML = logNum;

}

let sumrest = document.querySelector('.sumrest');
sumrest.addEventListener('click', sumRest);

function sumRest() {

  almacenar *= -1;
  screenNumbers.innerHTML *= -1;
}