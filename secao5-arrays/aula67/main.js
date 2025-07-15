// Reduce - mais utilizada para reduzir um array em um único elemento

const pessoas = [
  { nome: "Luiz", idade: 62 }, // acumulador
  { nome: "Maria", idade: 23 }, // valor...
  { nome: "Eduardo", idade: 95 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 64 },
  { nome: "Wallace", idade: 63 },
];

// Retorne a pessoa mais velha
const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);
// { nome: 'Eduardo', idade: 95 }
