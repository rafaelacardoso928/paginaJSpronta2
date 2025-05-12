function adicionarItem() {
    const input = document.getElementById('itemInput');
    const lista = document.getElementById('lista');
    const texto = input.value.trim();
  
    if (texto === '') return;
  
    const li = document.createElement('li');
    li.innerHTML = `${texto} <button class="remover" onclick="this.parentElement.remove()">Remover</button>`;
    lista.appendChild(li);
    input.value = '';
  }
  