var x = document.getElementById("guide");

x.style.display = "none";

function myFunction() {
  var x = document.getElementById("guide");
  x.style.display = "block";
}

document.getElementById("guide-button").setAttribute("onclick", 'myFunction()');
