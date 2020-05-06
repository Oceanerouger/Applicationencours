/* Slider page atelier2bis.php CURSEURD*/
var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;

slider3.oninput = function () {
  output3.innerHTML = this.value;
}

function getValue3() {
  // Je récupère la valeur de l'id "myRange"=> pourcentage
  var input = document.getElementById("myRange3").value;
  
  // j'affiche la valeur récupérer du slider
  alert(input);
}