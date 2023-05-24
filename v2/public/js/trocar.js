function trocarConteudo(identificador) {
    // Oculta todos os elementos com a classe 'content'
    var elementos = document.getElementsByClassName('content');
    for (var i = 0; i < elementos.length; i++) {
      elementos[i].style.display = 'none';
    }
    
    // Exibe o elemento com o identificador correspondente
    var elemento = document.getElementById(identificador);
    elemento.style.display = 'block';
  }
  