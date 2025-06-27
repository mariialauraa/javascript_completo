const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  // pula o 2 e o 5:
  if (numero === 2 || numero === 5) {
    console.log("Pulei o número");
    continue;
  }

  // para no 7:
  console.log(numero);
  if (numero === 7) {
    console.log("Número encontrado!");
    break;
  }
}
