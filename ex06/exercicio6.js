function gerarTabuada() {
    const numero = parseInt(document.getElementById('numeroTabuada').value);
    const resultadoTabuada = document.getElementById('resultadoTabuada');
  
    resultadoTabuada.innerHTML = ''; // Limpa a lista anterior
  
    if (isNaN(numero)) {
      resultadoTabuada.innerHTML = '<li>Por favor, insira um número válido.</li>';
      return;
    }
  
    for (let i = 1; i <= 10; i++) {
      const item = document.createElement('li');
      item.textContent = `${numero} x ${i} = ${numero * i}`;
      resultadoTabuada.appendChild(item);
    }
  }
  