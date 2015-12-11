var objectif;
function tirage() {
 objectif = Math.floor((Math.random()* 100) +1);
}

function essai() {
  proposition = document.getElementById("proposition").value;
  if (proposition < objectif) {
    window.alert("c'est plus !");
  }
  else if (proposition > objectif) {
    window.alert("c'est moin !");
  }
}
