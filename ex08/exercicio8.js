function verificar() {
    const texto = document.getElementById('frase').value;
    const frase = texto.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const invertida = frase.split('').reverse().join('');
    const resultado = document.getElementById('resultado');
  
    if (!texto) {
      resultado.textContent = 'Digite algo primeiro.';
      return;
    }
  
    if (frase === invertida) {
      resultado.textContent = 'É um palíndromo!';
    } else {
      resultado.textContent = 'Não é um palíndromo.';
    }
  }
  