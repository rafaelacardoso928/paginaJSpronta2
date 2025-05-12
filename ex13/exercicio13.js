function gerar() {
    const tamanho = parseInt(document.getElementById('tamanho').value);
    const resultado = document.getElementById('resultado');
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
  
    if (isNaN(tamanho) || tamanho < 1) {
      resultado.textContent = 'Informe um tamanho válido.';
      return;
    }
  
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[indice];
    }
  
    resultado.textContent = `Senha: ${senha}`;
  }
  