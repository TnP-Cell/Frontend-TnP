var url = "https://oyster-app-i9v66.ondigitalocean.app";
// var url = "http://localhost:5000";

document.forms["admin-login"].addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`${url}/api/admin/adminLogin`, {
    method: "POST",
    body: new URLSearchParams(new FormData(e.target)),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status == 0) {
        localStorage.setItem("adminToken", data.auth_token);
        window.location.href = "./admin-panel.html";
      } else alert("Something Went Wrong!!");
    })
    .catch((err) => {
      alert("Error: " + err);
    });
});
