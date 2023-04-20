function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"))
  const altura = parseFloat(prompt("Informe a altura do triângulo:"))
  return base * altura / 2
}

function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe a base do retângulo:"))
  const altura = parseFloat(prompt("Informe a altura do retângulo:"))
  return base * altura
}

function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe a área do quadrado:"))
  return lado * lado
}