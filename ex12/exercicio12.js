let segundos = 0;
let timer = null;

function formatar(seg) {
  const h = String(Math.floor(seg / 3600)).padStart(2, '0');
  const m = String(Math.floor((seg % 3600) / 60)).padStart(2, '0');
  const s = String(seg % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function atualizar() {
  document.getElementById('tempo').textContent = formatar(segundos);
}

function iniciar() {
  if (timer) return;
  timer = setInterval(() => {
    segundos++;
    atualizar();
  }, 1000);
}

function pausar() {
  clearInterval(timer);
  timer = null;
}

function zerar() {
  pausar();
  segundos = 0;
  atualizar();
}
