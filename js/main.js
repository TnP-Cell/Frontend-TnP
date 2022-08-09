const url = "https://tpc-iiitbh.herokuapp.com";

var inst = document.querySelector("#inst1");
var people = document.querySelector("#people1");
var recruit = document.querySelector("#recruit1");
var burger = document.querySelector(".burger");
var cross = document.querySelector(".cross");
var menu = document.querySelector(".menu");

var nav = document.querySelectorAll(".nav-dropdown");
var newsItems = document.querySelector(".news-items");
var eventItems = document.querySelector(".event-items");

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
var card1 = document.querySelector(".card1-new");
var card2 = document.querySelector(".card2-new");

flipper[0].addEventListener("click", () => {
  card1.style.display = "none";
  card2.style.display = "block";
});

flipper[1].addEventListener("click", () => {
  card2.style.display = "none";
  card1.style.display = "block";
});

const displayNews = (data) => {
  let html = "";
  for (let i = data.length - 1; i >= 0; i--) {
    html += `<div class="news-item-content">
    <h3>
        // <a href="${data[i].news.link}">${data[i].news.desc}<span>
                (New)
            </span>
        </a>
    </h3>
</div>`;
  }
  newsItems.innerHTML = html;
};

const displayEvents = (data) => {
  let html = "";
  for (let i = data.length - 1; i >= 0; i--) {
    html += `<div class="event-item-content">
    <h3>
        <a href="${data[i].events.link}">${data[i].events.desc}<span>
                (new)
            </span>
        </a>
    </h3>
</div>`;
  }
  eventItems.innerHTML = html;
};

const fetchNewsData = () => {
  fetch(`${url}/api/news/newsFetch`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      displayNews(data.data);
    })
    .catch((err) => {
      alert("Something Went Wrong!!" + err);
    });
};

const fetchEventsData = () => {
  fetch(`${url}/api/events/eventsFetch`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      displayEvents(data.data);
    })
    .catch((err) => {
      alert("Something Went Wrong!!" + err);
    });
};

fetchEventsData();
fetchNewsData();
