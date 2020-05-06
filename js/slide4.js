/* Slider page atelier2bis.php CURSEURE*/
var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value;

slider4.oninput = function() {
  output4.innerHTML = this.value;
}
function getValue4() {
  // Je récupère la valeur de l'id "myRange"=> pourcentage
  var input = document.getElementById("myRange4").value;
  // j'affiche la valeur récupérer du slider
  alert(input);
}