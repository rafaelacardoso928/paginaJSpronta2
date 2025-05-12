const numeroSecreto = Math.floor(Math.random() * 100) + 1;

function adivinhar() {
  const tentativa = parseInt(document.getElementById('tentativa').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
    resultado.textContent = 'Digite um número entre 1 e 100.';
    return;
  }

  if (tentativa === numeroSecreto) {
    resultado.textContent = 'Parabéns! Você acertou!';
  } else if (tentativa < numeroSecreto) {
    resultado.textContent = 'Tente um número maior.';
  } else {
    resultado.textContent = 'Tente um número menor.';
  }
}
