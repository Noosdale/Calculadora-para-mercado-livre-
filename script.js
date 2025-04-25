
function calcular() {
  const custo = parseFloat(document.getElementById('custo').value);
  if (isNaN(custo)) {
    document.getElementById('resultado').innerText = "Por favor, insira um valor válido.";
    return;
  }
  const margem = 0.3;
  const preco = custo / (1 - margem);
  const lucro = preco - custo;
  document.getElementById('resultado').innerText =
    `Preço sugerido: R$ ${preco.toFixed(2)}\nLucro estimado: R$ ${lucro.toFixed(2)}`;
}
