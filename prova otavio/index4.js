function quadradoPerfeito() {
    var numeroInput = parseFloat(prompt("Digite um número"));
    var resultado = verificarQuadradoPerfeito(numeroInput);
  }
  
  function verificarQuadradoPerfeito(numero) {
    var raiz = Math.sqrt(numero);
    var raizArredondada = Math.round(raiz);
  
    if (numero === raizArredondada ** 2) {
      if (raiz % 1 === 0) {
        alert('O número é um quadrado perfeito!');
      } else {
        alert('O número não é um quadrado perfeito. Tente novamente!');
      }
    } else {
      alert('O número não é um quadrado perfeito. Tente novamente!');
    }
  }
  
  quadradoPerfeito(); 