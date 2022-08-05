var url = "https://tpc-iiitbh.herokuapp.com";

var historyItems = document.querySelector(".history-items");
var newsAdd = document.querySelector("#news-add");
var eventsAdd = document.querySelector("#events-add");
var newsAddBtn = document.querySelector("#news-ab");
var eventsAddBtn = document.querySelector("#events-ab");
var newsImg = document.querySelector("#news-img");
var eventsImg = document.querySelector("#events-img");

eventsAdd.style.display = "none";

newsAddBtn.addEventListener("click", () => {
  newsImg.src = "./assets/option-icon-active.svg";
  eventsImg.src = "./assets/option-icon-inactive.svg";
  newsAdd.style.display = "block";
  eventsAdd.style.display = "none";
});

eventsAddBtn.addEventListener("click", () => {
  eventsImg.src = "./assets/option-icon-active.svg";
  newsImg.src = "./assets/option-icon-inactive.svg";
  eventsAdd.style.display = "block";
  newsAdd.style.display = "none";
});

document.forms["news-add"].addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`${url}/api/news/newsUpload`, {
    method: "POST",
    headers: {
      auth_token: localStorage.getItem("adminToken"),
    },
    body: new URLSearchParams(new FormData(e.target)),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status == 0) {
        alert("News Added Successfully!!");
      } else {
        alert("Something went wrong while adding News!!");
      }
    })
    .catch((err) => {
      alert("Error: " + err);
    });
});

document.forms["events-add"].addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`${url}/api/events/eventsUpload`, {
    method: "POST",
    headers: {
      auth_token: localStorage.getItem("adminToken"),
    },
    body: new URLSearchParams(new FormData(e.target)),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status == 0) {
        alert("Events Added Successfully!!");
      } else {
        alert("Something went wrong while adding Events!!");
      }
    })
    .catch((err) => {
      alert("Error: " + err);
    });
});

const displayNews = (data) => {
  var html = ``;
  for (let i = data.length - 1; i >= 0; i--) {
    html += `<div class="h-item">
        <div class="time">
            <h3>${data[i].date}</h3>
            <p>${data[i].month}</p>
        </div>
        <div class="h-text">
            <a href="${data[i].news.link}">${data[i].news.desc}</a>
        </div>
        <div class="update-btn">
            <button class="add-button" id="update-data" value="${data[i]._id}">Update</button>
        </div>
        <div class="delete-btn">
            <button class="add-button" id="delete-data" value="${data[i]._id}">Delete</button>
        </div>
    </div>`;
  }
  // console.log(html);
  historyItems.innerHTML += html;
};

const displayEvents = (data) => {
  var html = ``;
  for (let i = data.length - 1; i >= 0; i--) {
    html += `<div class="h-item">
        <div class="time">
            <h3>${data[i].date}</h3>
            <p>${data[i].month}</p>
        </div>
        <div class="h-text">
            <a href="${data[i].news.link}">${data[i].news.desc}</a>
        </div>
        <div class="update-btn">
            <button class="add-button" id="update-data" value="${data[i]._id}">Update</button>
        </div>
        <div class="delete-btn">
            <button class="add-button" id="delete-data" value="${data[i]._id}">Delete</button>
        </div>
    </div>`;
  }
  // console.log(html);
  historyItems.innerHTML += html;
};

const displayData = (data) => {
  document.title = `Welcome !! ${data.name} | ${data.post}`;
};

const fetchAdminData = () => {
  fetch(`${url}/api/admin/adminShow`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      auth_token: `${localStorage.getItem("adminToken")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.data);
      if (data.status == 0) {
        displayData(data.data);
      } else {
        localStorage.removeItem("adminToken");
        window.location.href = "./admin-login.html";
        alert("Status not 0");
      }
    })
    .catch((err) => {
      // localStorage.removeItem("adminToken");
      // window.location.href = "./admin-login.html";
      alert(err);
    });
};

const fetchNewsData = () => {
  fetch(`${url}/api/news/newsFetch`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      auth_token: localStorage.getItem("adminToken"),
    },

    // body: localStorage.getItem("adminToken"),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status == 0) {
        displayNews(data.data);
      } else {
        // localStorage.removeItem("adminToken");
        // window.location.href = "./admin-login.html";
      }
    })
    .catch((err) => {
      // localStorage.removeItem("adminToken");
      // window.location.href = "./admin-login.html";
    });
};

const fetchEventsData = () => {
  fetch(`${url}/api/events/eventsFetch`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      auth_token: localStorage.getItem("authToken"),
    },
    // body: localStorage.getItem("adminToken"),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status == 0) {
        displayEvents(data.data);
      } else {
        // localStorage.removeItem("adminToken");
        // window.location.href = "./admin-login.html";
      }
    })
    .catch((err) => {
      // localStorage.removeItem("adminToken");
      // window.location.href = "./admin-login.html";
    });
};

document.querySelector("#fetch").addEventListener("click", () => {
  fetchNewsData();
  fetchEventsData();
});

if (localStorage.getItem("adminToken")) {
  fetchAdminData();
} else {
  window.location.href = "./admin-login.html";
}
