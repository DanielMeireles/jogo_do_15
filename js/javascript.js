var casas = [
  [0, 2, 5, 6],
  [10, 4, 3, 15],
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
            console.dir("clicou em "+ x);
            jogada(casas, x);
    }
    })(i)
  );
}
function jogada(casas, casa){
  if (casa == 0 || casa == 4 || casa == 8 || casa == 12){
    coluna = 0;
  }
  else if (casa == 1 || casa == 5 || casa == 9 || casa == 13) {
    coluna = 1;
  }
  else if (casa == 2 || casa == 6 || casa == 10 || casa == 14) {
    coluna = 2;
  }
  else if (casa == 3 || casa == 7 || casa == 11 || casa == 15) {
    coluna = 3;
  }
  if (casa == 0 || casa == 1 || casa == 2 || casa == 3){
    linha = 0;
  }
  else if (casa == 4 || casa == 5 || casa == 6 || casa == 7){
    linha = 1;
  }
  else if (casa == 8 || casa == 9 || casa == 10 || casa == 11){
    linha = 2;
  }
  else if (casa == 12 || casa == 13 || casa == 14 || casa == 15){
    linha = 3;
  }

  if (linha == 0){
    if (casas[linha][coluna+1]==0){
      casas[linha][coluna+1]=casas[linha][coluna];
      casas[linha][coluna]=0;
      atualiza();
    }
    else if (casas[linha][coluna-1]==0){
      casas[linha][coluna-1]=casas[linha][coluna];
      casas[linha][coluna]=0;
      atualiza();
    }
    else if (casas[linha+1][coluna]==0){
      casas[linha+1][coluna]=casas[linha][coluna];
      casas[linha][coluna]=0;
      atualiza();
    }
  }
  else{
    if (casas[linha][coluna+1]==0){
      casas[linha][coluna+1]=casas[linha][coluna];
      casas[linha][coluna]=0;
      atualiza();
    }
    else if (casas[linha][coluna-1]==0){
      casas[linha][coluna-1]=casas[linha][coluna];
      casas[linha][coluna]=0;
      atualiza();
    }
    else if (casas[linha-1][coluna]==0){
      casas[linha-1][coluna]=casas[linha][coluna];
      casas[linha][coluna]=0;
      atualiza();
    }
    else if (casas[linha+1][coluna]==0){
      casas[linha+1][coluna]=casas[linha][coluna];
      casas[linha][coluna]=0;
      atualiza();
    }
  }
}
document.getElementById("iniciar").onclick = atualiza();
