let votos = { azul: 0, vermelho: 0, verde: 0 };

function votar(cor) {
  votos[cor]++;
  atualizar();
}

function atualizar() {
  const total = votos.azul + votos.vermelho + votos.verde;
  const resultado = document.getElementById('resultado');

  if (total === 0) {
    resultado.textContent = 'Nenhum voto ainda.';
    return;
  }

  const porcentagem = (v) => ((v / total) * 100).toFixed(1);

  resultado.innerHTML = `
    Azul: ${votos.azul} voto(s) - ${porcentagem(votos.azul)}%<br>
    Vermelho: ${votos.vermelho} voto(s) - ${porcentagem(votos.vermelho)}%<br>
    Verde: ${votos.verde} voto(s) - ${porcentagem(votos.verde)}%
  `;
}
