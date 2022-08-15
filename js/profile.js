var url = "https://tpc-iiitbh.herokuapp.com";

var names = document.querySelectorAll(".name");
var branch = document.querySelectorAll(".branch");
var roll = document.querySelectorAll(".roll");
var cgpa = document.querySelectorAll(".cgpa");
var phone = document.querySelectorAll(".phone");
var email = document.querySelectorAll(".email");
var linkedin = document.querySelector("#linkedin");
var github = document.querySelector("#github");
var resume = document.querySelector(".resume");
var profilePic = document.querySelector("#profile-pic");

const arrayBufferToBase64 = (buffer) => {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
};

function display(data) {
  // console.log(data);
  document.title = `${data.name} | Profile`;
  names.forEach((n) => {
    n.innerHTML = data.name;
  });
  branch.forEach((b) => {
    b.innerHTML = data.branch;
  });
  roll.forEach((r) => {
    r.innerHTML = data.roll;
  });
  cgpa.forEach((c) => {
    c.innerHTML = data.cgpa;
  });
  phone.forEach((p) => {
    p.innerHTML = data.phone;
  });
  email.forEach((e) => {
    e.innerHTML = data.email;
  });
  linkedin.innerHTML = data.linkedin;
  github.innerHTML = data.github;
  profilePic.src = `data:image/png;base64,${arrayBufferToBase64(
    data.profilePic.data.data
  ).toString("base64")}`;
  resume.innerHTML = `<iframe src="data:application/${
    data.resume.contentType
  };base64,${arrayBufferToBase64(data.resume.data.data).toString(
    "base64"
  )}#toolbar=0&view=fill"
  scrolling="no" frameborder="0" seamless="seamless"></iframe>`;
}

fetch(`${url}/api/showProfile`, {
  method: "POST",
  headers: {
    "content-type": "application/json",
    auth_token: `${localStorage.getItem("token")}`,
  },
})
  .then((res) => res.json())
  .then((data) => {
    // console.log(data.status);
    display(data.data);
  })
  .catch((err) => {
    alert("Something Went Wrong!!" + err);
  });
