function exibirTexto(textoId) {
  // Obter todos os elementos de texto dentro do elemento com id "conteudo"
  var textos = document.getElementById('conteudo').children;
  
  // Esconder todos os textos
  for (var i = 0; i < textos.length; i++) {
    textos[i].style.display = 'none';
  }
  
  // Exibir o texto selecionado
  document.getElementById(textoId).style.display = 'block';
}
