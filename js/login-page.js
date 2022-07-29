var submitProf = document.querySelector("#subprof");
var contentDivs = document.querySelectorAll(".content-div");
var check = 1;

contentDivs[1].style.display="none";

submitProf.addEventListener("click", () => {
  if (check) {
    contentDivs[0].style.display = "none";
    contentDivs[1].style.display = "flex";
    submitProf.innerHTML = "Get Profile";
    check=0;
  }
  else {
    contentDivs[1].style.display = "none";
    contentDivs[0].style.display = "flex";
    submitProf.innerHTML = "Submit Profile";
    check=1;
  }
});
