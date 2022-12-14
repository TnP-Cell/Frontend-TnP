var submitProf = document.querySelector("#subprof");
var contentDivs = document.querySelectorAll(".content-div");
var check = 1;
const url = "http://194.113.64.156";
// var url = "http://localhost:5000";

contentDivs[1].style.display = "none";

submitProf.addEventListener("click", () => {
  if (check) {
    contentDivs[0].style.display = "none";
    contentDivs[1].style.display = "flex";
    submitProf.innerHTML = "Get Profile";
    check = 0;
  } else {
    contentDivs[1].style.display = "none";
    contentDivs[0].style.display = "flex";
    submitProf.innerHTML = "Submit Profile";
    check = 1;
  }
});

document.forms["loginForm"].addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`${url}/api/login`, {
    method: "POST",
    body: new URLSearchParams(new FormData(e.target)),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.status == 0) {
        localStorage.setItem("token", data.auth_token);
        window.location.href = "./student-page.html";
      } else {
        alert("Invalid Credentials");
      }
    })
    .catch((err) => {
      alert("Something Went Wrong!!" + err);
    });
});

document.forms["registerForm"].addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`${url}/api/register`, {
    method: "POST",
    body: new FormData(e.target),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status == 0) {
        alert("Registered Successfully");
        window.location.href = "./login-page.html";
      } else {
        alert("Something Went Wrong!!");
      }
    })
    .catch((err) => {
      alert("Something Went Wrong!!" + err);
    });
});
