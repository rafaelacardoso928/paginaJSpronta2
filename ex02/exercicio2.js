function contar() {
    const inicio = Number(document.getElementById('inicio').value);
    const fim = Number(document.getElementById('fim').value);
    let passo = Number(document.getElementById('passo').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
      resultado.innerHTML = 'Por favor, preencha todos os campos com valores válidos (passo > 0).';
      return;
    }
  
    let contagem = '';
    if (inicio < fim) {
      for (let i = inicio; i <= fim; i += passo) {
        contagem += `${i} 👉 `;
      }
    } else {
      for (let i = inicio; i >= fim; i -= passo) {
        contagem += `${i} 👉 `;
      }
    }
    contagem += '🏁';
    resultado.innerHTML = contagem;
  }
  