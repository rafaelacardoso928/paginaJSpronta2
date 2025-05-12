function sacar() {
    const valor = parseInt(document.getElementById('valor').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(valor) || valor < 1) {
      resultado.textContent = 'Digite um valor válido.';
      return;
    }
  
    let restante = valor;
    const notas = [100, 50, 10, 1];
    let resposta = `Notas para R$${valor}:<br>`;
  
    for (let nota of notas) {
      const qtd = Math.floor(restante / nota);
      if (qtd > 0) {
        resposta += `${qtd} nota(s) de R$${nota}<br>`;
        restante %= nota;
      }
    }
  
    resultado.innerHTML = resposta;
  }
  