// Reduce - mais utilizada para reduzir um array em um único elemento

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Some todos os números (Reduce)
const total = numeros.reduce(function (acumulador, valor) {
  acumulador += valor;
  return acumulador;
}, 0);
// valor inicial = 0 -> para o acumulador
// se não colocar nenhum valor, inicia com o primeiro elemento do array -> 5.
console.log(total);
// 236

// Retorne um array com os valores pares (Filter)
const par = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(par);

// Retorne um array com o dobro dos valores (Map)
const dobro = numeros.reduce(function (acumulador, valor) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(dobro);
