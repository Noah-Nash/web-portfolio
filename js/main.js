function menuFunction() {
  var x = document.getElementById("menu");
  if (x.className === "nav") {
    x.className += "-responsive";
  } else {
    x.className = "nav";
  }
}
