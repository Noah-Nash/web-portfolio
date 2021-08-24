//Menu function
// function menuFunction() {
//   var x = document.getElementById("menu");
//   if (x.className === "nav") {
//     x.className += "-responsive";
//   } else {
//     x.className = "nav";
//   }
// }

//Dark Theme Toggle
var toggle = document.getElementById("theme-toggle");

var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);

toggle.onclick = function () {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
};

if (storedTheme == "light") {
  toggle.src = "images/moon.png";
}

// toggle icon
if (document.body.classList.contains("dark-theme")) {
  toggle.src = "images/sun.png";
} else {
  toggle.src = "images/moon.png";
}
