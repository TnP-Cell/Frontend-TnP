var url = "https://tpc-iiitbh.herokuapp.com";

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
