function verificarIdade() {
    const anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    const resultadoIdade = document.getElementById('resultadoIdade');
    
    if (isNaN(anoNascimento)) {
      resultadoIdade.textContent = 'Por favor, insira um ano de nascimento válido.';
      return;
    }
    
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;
    
    if (idade < 18) {
      resultadoIdade.textContent = `Idade: ${idade}. Você é menor de idade.`;
    } else if (idade >= 18 && idade < 60) {
      resultadoIdade.textContent = `Idade: ${idade}. Você é adulto.`;
    } else {
      resultadoIdade.textContent = `Idade: ${idade}. Você é idoso.`;
    }
  }
  