function validarSenha(senha) {
    const regexLetraMaiuscula = /[A-Z]/;
    const regexLetraMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;
  
    let faltas = [];
  
    if (senha.length < 8) {
      faltas.push("pelo menos 8 caracteres");
    }
  
    if (!regexLetraMaiuscula.test(senha)) {
      faltas.push("pelo menos uma letra maiúscula");
    }
  
    if (!regexLetraMinuscula.test(senha)) {
      faltas.push("pelo menos uma letra minúscula");
    }
  
    if (!regexNumero.test(senha)) {
      faltas.push("pelo menos um número");
    }
  
    if (faltas.length === 0) {
      return "A senha é válida!";
    } else {
      return "A senha não atende aos critérios. Faltam: " + faltas.join(", ");
    }
  }
  
  const senha = prompt("Digite a senha:");
  const mensagem = validarSenha(senha);
  alert(mensagem);
  validarSenha();