var divCasa = document.getElementById("tabuleiro");
for (var i = 0; i < 16; i++) {
  var novoDiv = document.createElement('div');
  divCasa.appendChild(novoDiv);
  novoDiv.setAttribute("id", "casa-" + i);
  novoDiv.innerText = i;
  novoDiv.style.left = (i%4 * 150) + "px";
  novoDiv.style.top = (Math.floor(i/4) * 150) + "px";
  novoDiv.addEventListener("click", (function(x){
    return function(){
            console.dir("clicou em "+x);               }
    })(i)
  );
}
