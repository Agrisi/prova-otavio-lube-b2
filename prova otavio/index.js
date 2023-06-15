function numprimo(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function numcheck() {
    const input = prompt("Qual é o número?");
    const number = parseInt(input);
  
    if (isNaN(number)) {
      alert("Por favor, insira um número válido!");
      return;
    }
  
    if (numprimo(number)) {
      alert(number + " é primo!");
    } else {
      alert(number + " não é primo.");
    }
  }
  
  numcheck();