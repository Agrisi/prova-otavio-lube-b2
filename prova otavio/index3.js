function calcularFatorial(numero) {
    let fatorial = 1;
    let explicacao = "";
  
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
      explicacao += i === 1 ? i : " * " + i;
    }
  
    return { fatorial, explicacao };
  }
  
  const input = prompt("Digite um número de 1 a 10:");
  const numero = parseInt(input);
  
  if (isNaN(numero) || numero < 1 || numero > 10) {
    alert("Número inválido! Por favor, digite um número de 1 a 10.");
  } else {
    const { fatorial, explicacao } = calcularFatorial(numero);
  
    const mensagem =
      "O fatorial de " +
      numero +
      " é: " +
      fatorial +
      "\n\nExplicação:\n" +
      explicacao;
  
    alert(mensagem);
  }
  calcularFatorial();