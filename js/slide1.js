/* Slider page atelier2bis.php  CURSEURB*/
var slider = document.getElementById("myRange1");
var output = document.getElementById("demo1");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function getValue1() {
  // Je récupère la valeur de l'id "myRange"=> pourcentage
  var input = document.getElementById("myRange1").value;
  // j'affiche la valeur récupérer du slider
  alert(input);
}