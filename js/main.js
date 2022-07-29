var inst = document.querySelector("#inst1");
var people = document.querySelector("#people1");
var recruit = document.querySelector("#recruit1");
var burger = document.querySelector(".burger");
var cross = document.querySelector(".cross");
var menu = document.querySelector(".menu");

var nav = document.querySelectorAll(".nav-dropdown");

let flag = 0;

// inst.addEventListener("mouseover", () => {
//   for (var i = 0; i < nav.length; i++) nav[i].style.display = "none";
//   flag = 0;
//   if (!flag) {
//     nav[0].style.display = "block";
//     flag = 1;
//   }
// });

// inst.addEventListener("mouseout", () => {
//   nav[0].style.display = "none";
//   flag = 0;
// });

// people.addEventListener("mouseover", () => {
//   for (var i = 0; i < nav.length; i++) nav[i].style.display = "none";
//   flag = 0;
//   if (!flag) {
//     nav[1].style.display = "block";
//     flag = 1;
//   }
// });

// people.addEventListener("mouseout", () => {
//   nav[1].style.display = "none";
//   flag = 0;
// });

// recruit.addEventListener("mouseover", () => {
//   for (var i = 0; i < nav.length; i++) nav[i].style.display = "none";
//   flag = 0;
//   if (!flag) {
//     nav[2].style.display = "block";
//     flag = 1;
//   }
// });

// recruit.addEventListener("mouseout", () => {
//   nav[2].style.display = "none";
//   flag = 0;
// });

burger.addEventListener("click", () => {
  menu.style.display = "flex";
  burger.style.display = "none";
});

cross.addEventListener("click", () => {
  menu.style.display = "none";
  burger.style.display = "block";
});

// nav[0].addEventListener("mouseover", () => {
//   nav[0].style.display = "block";
// });

// nav[0].addEventListener("mouseout", () => {
//   nav[0].style.display = "none";
// });

// nav[1].addEventListener("mouseover", () => {
//   nav[1].style.display = "block";
// });

// nav[1].addEventListener("mouseout", () => {
//   nav[1].style.display = "none";
// });

// nav[2].addEventListener("mouseover", () => {
//   nav[2].style.display = "block";
// });

// nav[2].addEventListener("mouseout", () => {
//   nav[2].style.display = "none";
// });

var carouselItem = document.querySelectorAll(".carousel-item");

var prev = document.querySelector("#prev");
var next = document.querySelector("#next");

var slideIndex = 1;
displaySlides(slideIndex);

// slideChanger();

// function slideChanger() {
//   prev.addEventListener("click", () => {
//     displaySlides(slideIndex-=1);
//   });

//   next.addEventListener("click", () => {
//     displaySlides(slideIndex+=1);
//   });
// }

setInterval("displaySlides(slideIndex+=1)", 3750);

function displaySlides(n) {
  if (n > carouselItem.length) slideIndex = 1;
  if (n < 1) slideIndex = carouselItem.length;
  for (let i = 0; i < carouselItem.length; i++) {
    carouselItem[i].style.display = "none";
    carouselItem[i].style.transition = "3.75s ease-out";
  }
  carouselItem[slideIndex - 1].style.display = "block";
  carouselItem[slideIndex - 1].style.transition = "3.75s ease-in";
}

var recruit = document.querySelector("#recruit");
var students = document.querySelector("#students");
var studClass = document.querySelector(".students");
var recruitClass = document.querySelector(".recruit");
let check = 0;
studClass.style.display = "none";

recruit.addEventListener("click", () => {
  recruit.className += " active-option";
  if (check) students.classList -= " active-option";
  recruitClass.style.display = "flex";
  studClass.style.display = "none";
});

students.addEventListener("click", () => {
  students.className += " active-option";
  recruit.classList -= " active-option";
  check = 1;
  recruitClass.style.display = "none";
  studClass.style.display = "flex";
});

var flipper = document.querySelectorAll(".flipper");
var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");

flipper[0].addEventListener("click", () => {
  card1.style.display = "none";
  card2.style.display = "block";
});

flipper[1].addEventListener("click", () => {
  card2.style.display = "none";
  card1.style.display = "block";
});