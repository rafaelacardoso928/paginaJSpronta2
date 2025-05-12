function mudarCor(cor) {
    document.getElementById('vermelho').classList.remove('ativo');
    document.getElementById('amarelo').classList.remove('ativo');
    document.getElementById('verde').classList.remove('ativo');
  
    document.getElementById(cor).classList.add('ativo');
  }
  