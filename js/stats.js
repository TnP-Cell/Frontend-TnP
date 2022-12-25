var placement = document.querySelector("#placement");
var facilities = document.querySelector("#facilities");
var demographics = document.querySelector("#demographics");
var representatives = document.querySelector("#representatives");
var placement1 = document.querySelector("#placement1");
var facilities1 = document.querySelector("#facilities1");
var demographics1 = document.querySelector("#demographics1");
var representatives1 = document.querySelector("#representatives1");

var mainContainer = document.querySelectorAll(".main-container");
var mainContainerMb = document.querySelectorAll(".main-container-mb");
var buttons = document.querySelectorAll(".button");
var activeButton = document.querySelector(".active-button");

for (var i = 0; i < mainContainer.length; i++) {
  if (i == 1) continue;
  mainContainer[i].style.display = "none";
}
for (var i = 0; i < mainContainerMb.length; i++) {
  if (i == 1) continue;
  mainContainerMb[i].style.display = "none";
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

placement1.addEventListener("click", () => {
  for (var i = 0; i < mainContainerMb.length; i++) {
    mainContainerMb[i].style.display = "none";
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-button");
  }
  if (!placement1.classList.contains("active-button"))
    placement1.classList += " active-button";
  mainContainerMb[0].style.display = "block";
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

facilities1.addEventListener("click", () => {
  for (var i = 0; i < mainContainerMb.length; i++) {
    mainContainerMb[i].style.display = "none";
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-button");
  }
  if (!facilities1.classList.contains("active-button"))
    facilities1.classList += " active-button";
  mainContainerMb[1].style.display = "block";
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

demographics1.addEventListener("click", () => {
  for (var i = 0; i < mainContainerMb.length; i++) {
    mainContainerMb[i].style.display = "none";
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-button");
  }
  if (!demographics1.classList.contains("active-button"))
    demographics1.classList += " active-button";
  mainContainerMb[2].style.display = "block";
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

representatives1.addEventListener("click", () => {
  for (var i = 0; i < mainContainerMb.length; i++) {
    mainContainerMb[i].style.display = "none";
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-button");
  }
  if (!representatives1.classList.contains("active-button"))
    representatives1.classList += " active-button";
  mainContainerMb[3].style.display = "block";
});
