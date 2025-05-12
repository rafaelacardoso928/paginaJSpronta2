function converter() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(celsius)) {
      resultado.textContent = 'Digite uma temperatura válida.';
      return;
    }
  
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;
  
    resultado.innerHTML = `
      Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
      Kelvin: ${kelvin.toFixed(2)} K
    `;
  }
  