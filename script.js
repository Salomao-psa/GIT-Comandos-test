function mostrarInformacao(numero) {
    // Oculta todas as informações
    var infos = document.getElementsByClassName("info");
    //enquanto o valor de i for menor que o comprimento da coleção infos.
    // i++ incrementa o valor de i em 1 a cada iteração do loop.
      // assim fazendo um loop e aplicado o estilo display:none a cada loop,
    for (var i = 0; i < infos.length; i++) {
      infos[i].style.display = "none";
    }
    
    // Mostra a informaçao correspondente ao botao clicado
    var info = document.getElementById("info" + numero);
    info.style.display = "block";
  }