function myFunction() {
  var x = document.getElementById("myColor").value;
  document.body.style.background = "#" + x;
  document.getElementById("demo").innerHTML = "#" + x;
}

function clearInput() {
  document.getElementById("myColor").value = " ";
}
