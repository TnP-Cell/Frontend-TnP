var placement = document.querySelector("#placement");
var facilities = document.querySelector("#facilities");
var demographics = document.querySelector("#demographics");
var representatives = document.querySelector("#representatives");

var mainContainer = document.querySelectorAll(".main-container");
var buttons = document.querySelectorAll(".button");
var activeButton = document.querySelector(".active-button");

for (var i = 1; i < mainContainer.length; i++) {
  mainContainer[i].style.display = "none";
}

placement.addEventListener("click", () => {
  for (var i = 0; i < mainContainer.length; i++) {
    mainContainer[i].style.display = "none";
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-button");
  }
  if (!buttons[0].classList.contains("active-button"))
    buttons[0].classList += " active-button";
  mainContainer[0].style.display = "block";
});

facilities.addEventListener("click", () => {
  for (var i = 0; i < mainContainer.length; i++) {
    mainContainer[i].style.display = "none";
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-button");
  }
  if (!facilities.classList.contains("active-button"))
    facilities.classList += " active-button";
  mainContainer[1].style.display = "block";
});

demographics.addEventListener("click", () => {
  for (var i = 0; i < mainContainer.length; i++) {
    mainContainer[i].style.display = "none";
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-button");
  }
  if (!demographics.classList.contains("active-button"))
    demographics.classList += " active-button";
  mainContainer[2].style.display = "block";
});

representatives.addEventListener("click", () => {
  for (var i = 0; i < mainContainer.length; i++) {
    mainContainer[i].style.display = "none";
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-button");
  }
  if (!representatives.classList.contains("active-button"))
    representatives.classList += " active-button";
  mainContainer[3].style.display = "block";
});
