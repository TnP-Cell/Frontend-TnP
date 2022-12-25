const url = "http://194.113.64.156";
// var url = "http://localhost:5000";

var inst = document.querySelector("#inst1");
var people = document.querySelector("#people1");
var recruit = document.querySelector("#recruit1");
var burger = document.querySelector(".burger");
var cross = document.querySelector(".cross");
var menu = document.querySelector(".menu");

var nav = document.querySelectorAll(".nav-dropdown");
var newsItems = document.querySelectorAll(".news-items");
var eventItems = document.querySelector(".event-items");
var newsContent = document.querySelector(".news-content");

// var nI1 = document.querySelectorAll(".news-items:nth-child(1)");
// var nI2 = document.querySelectorAll(".news-items:nth-child(2)");

var carouselContainer = document.querySelector("#carousel-img");

// setTimeout(() => {
// document.querySelector(".loader").style.display = "block";
// document.querySelector(".after-load").style.display = "block";
// }, 3000);

let flag = 0;

newsContent.addEventListener("mouseover", () => {
  for (var i in newsItems) {
    newsItems[i].style.animationPlayState = "paused";
  }
});

newsContent.addEventListener("mouseout", () => {
  for (var i in newsItems) {
    newsItems[i].style.animationPlayState = "running";
  }
});

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

var prev = document.querySelector("#prev");
var next = document.querySelector("#next");

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

const arrayBufferToBase64 = (buffer) => {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
};

function displayImages() {
  var html = "";
  // console.log(data.images.length);
  // var x = data.images;
  var x = [
    {
      path: "assets/1.jpg",
    },
    {
      path: "assets/2.jpg",
    },
    {
      path: "assets/3.jpg",
    },
    {
      path: "assets/4.jpg",
    },
  ];
  // console.log(x);
  // console.log(x.length);
  for (var i in x) {
    html += `<div class="carousel-item">
      <img src="${x[i].path}">
    </div>`;
  }
  carouselContainer.innerHTML = html;
  // console.log(html);

  var carouselItem = document.querySelectorAll(".carousel-item");

  var slideIndex = 1;
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

  setInterval(() => {
    slideIndex += 1;
    displaySlides(slideIndex);
  }, 3750);
}

displayImages();

const displayNews = (data) => {
  // console.log(21);
  var html = "";
  for (var i = data.length - 1; i >= 0; i--) {
    html += `<div class="news-item-content">
    <h3>
        <a href="${data[i].news.link}">${data[i].news.desc}<span>
                (New)
            </span>
        </a>
    </h3>
</div>`;
  }
  newsItems[0].innerHTML = html;
  newsItems[1].innerHTML = html;
};

const displayEvents = (data) => {
  var html = "";
  for (var i = data.length - 1; i >= 0; i--) {
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

const fetchImages = () => {
  // fetch(`${url}/api/admin/carouselShow`, {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     displayImages(data.data);
  //   })
  //   .catch((err) => {
  //     alert("Check your Internet Connection");
  //   });
  // var data = "../Database/carouselimages.json";
  // require([data], result => (data = result));
  fetch("../Database/carouselimages.json")
    .then((res) => res.json())
    .then((data) => {
      displayImages(data);
      // console.log(data);
    });
  // displayImages(data);
  // console.log(data);
};

const fetchNewsData = () => {
  // console.log(1);
  // fetch(`${url}/api/news/newsFetch`, {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     displayNews(data.data);
  //   })
  //   .catch((err) => {
  //     alert("Check your Internet Connection");
  //   });
  // var data = "../Database/newsdetails.json";
  fetch("../Database/newsdetails.json")
    .then((res) => res.json())
    .then((data) => {
      displayNews(data);
      // console.log(data);
    });

  // console.log(data)
};

const fetchEventsData = () => {
  // console.log(2);
  // fetch(`${url}/api/events/eventsFetch`, {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     displayEvents(data.data);
  //   })
  //   .catch((err) => {
  //     alert("Check your Internet Connection");
  //   });
  // var data = "../Database/eventsdetails.json";
  fetch("../Database/eventsdetails.json")
    .then((res) => res.json())
    .then((data) => {
      displayEvents(data);
      // console.log(data);
    });

  // console.log(data)
};

fetchEventsData();
fetchNewsData();
// fetchImages();

// var script = document.getElementById("second");
// script.setAttribute("src", script.getAttribute("data-src"));

var lessThan1 = document.querySelector("#less-than-1");
var lessThan2 = document.querySelector("#less-than-2");
var lessThan3 = document.querySelector("#less-than-3");
var lessThan4 = document.querySelector("#less-than-4");
var between1 = document.querySelector("#between-1");
var between2 = document.querySelector("#between-2");
var between3 = document.querySelector("#between-3");
var between23 = document.querySelector("#between-2-3");
var between24 = document.querySelector("#between-2-4");
var between4 = document.querySelector("#between-4");
var greaterThan1 = document.querySelector("#greater-than-1");
var greaterThan2 = document.querySelector("#greater-than-2");
var greaterThan3 = document.querySelector("#greater-than-3");
var greaterThan4 = document.querySelector("#greater-than-4");

let data = {
  lessThan1: "15",
  lessThan2: "15",
  lessThan3: "15",
  lessThan4: "15",
  between1: "35",
  between2: "35",
  between3: "35",
  between23: "35",
  between24: "35",
  between4: "35",
  greaterThan1: "50",
  greaterThan2: "50",
  greaterThan3: "50",
  greaterThan4: "50",
};

lessThan1.style.width = data.lessThan1 + "%";
lessThan2.style.width = data.lessThan2 + "%";
lessThan3.style.width = data.lessThan3 + "%";
lessThan4.style.width = data.lessThan4 + "%";
between1.style.width = data.between1 + "%";
between2.style.width = data.between2 + "%";
between3.style.width = data.between3 + "%";
between23.style.width = data.between23 + "%";
between24.style.width = data.between24 + "%";
between4.style.width = data.between4 + "%";
greaterThan1.style.width = data.greaterThan1 + "%";
greaterThan2.style.width = data.greaterThan2 + "%";
greaterThan3.style.width = data.greaterThan3 + "%";
greaterThan4.style.width = data.greaterThan4 + "%";

lessThan1.style.background = "#FFBC00";
lessThan2.style.background = "#00ADEF";
lessThan3.style.background = "#80CC28";
lessThan4.style.background = "#FC2779";
between1.style.background = "#FFBC00BF";
between2.style.background = "#00ADEFBF";
between3.style.background = "#80CC28CC";
between23.style.background = "#80CC2899";
between24.style.background = "#FC277999";
between4.style.background = "#FC2779CC";
greaterThan1.style.background = "#FFBC0080";
greaterThan2.style.background = "#00ADEF80";
greaterThan3.style.background = "#80CC2866  ";
greaterThan4.style.background = "#FC277966";
