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

for (var i = 1; i < mainContainer.length; i++) {
  mainContainer[i].style.display = "none";
}
for (var i = 1; i < mainContainerMb.length; i++) {
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
  if (!buttons[0].classList.contains("active-button"))
    buttons[0].classList += " active-button";
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
  if (!facilities.classList.contains("active-button"))
    facilities.classList += " active-button";
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
  if (!demographics.classList.contains("active-button"))
    demographics.classList += " active-button";
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
  if (!representatives.classList.contains("active-button"))
    representatives.classList += " active-button";
  mainContainerMb[3].style.display = "block";
});

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data1 = google.visualization.arrayToDataTable([
    ["Branch", "Strength"],
    ["CSE", 35],
    ["ECE", 24],
    ["MeA", 9],
  ]);
  var data2 = google.visualization.arrayToDataTable([
    ["Branch", "Strength"],
    ["CSE", 52],
    ["ECE", 48],
    ["MeA", 18],
  ]);

  var options1 = {
    title: "2019-2023 Batch (Branchwise Data)",
    is3D: true,
    width: 640,
    height: 380
  };
  var options2 = {
    title: "2020-2024 Batch (Branchwise Data)",
    is3D: true,
    width: 640,
    height: 380
  };

  var chart1 = new google.visualization.PieChart(
    document.getElementById("final1")
  );
  var chart2 = new google.visualization.PieChart(
    document.getElementById("pre-final1")
  );
  var chartMob1 = new google.visualization.PieChart(
    document.getElementById("final-mob1")
  );
  var chartMob2 = new google.visualization.PieChart(
    document.getElementById("pr-final-mob1")
  );

  chart1.draw(data1, options1);
  chart2.draw(data2, options2);
  chartMob1.draw(data1, options1);
  chartMob2.draw(data2, options2);
}
