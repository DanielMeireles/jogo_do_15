var casas = [
  [3, 2, 0, 6],
  [10, 4, 5, 15],
  [14, 8, 9, 7],
  [13, 1, 11, 12]
];
function atualiza(){
  for (var l = 0; l < casas.length; l++) {
    var linha = casas[l];
    for (var c = 0; c < linha.length; c++) {
      casa = linha[c];
      var divAtual = divCasas.children[l*4+c];
      divAtual.innerText = casa;
      divAtual.setAttribute("id", "casa-" + casa);
    }
  }
}
var divCasas = document.getElementById("tabuleiro");
for (var i = 0; i < 16; i++) {
  var novoDiv = document.createElement('div');
  divCasas.appendChild(novoDiv);
  novoDiv.setAttribute("id", "casa-" + i);
  novoDiv.style.left = (i%4 * 150) + "px";
  novoDiv.style.top = (Math.floor(i/4) * 150) + "px";
  novoDiv.addEventListener("click", (function(x){
    return function(){
            console.dir("clicou em "+x);               }
    })(i)
  );
}
