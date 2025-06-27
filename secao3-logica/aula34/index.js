// criar uma variável de controle;
// criar uma condição -> para PARAR o laço;
// incrementar ou decrementar a variável de controle.

for (let i = 400; i <= 500; i += 10) {
  console.log(`Linha ${i}`);
}

// exemplo
for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? "par" : "ímpar";
  console.log(i, par);
}

// percorrer um array
const frutas = ["maçã", "pêra", "uva", "laranja", "melancia"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
