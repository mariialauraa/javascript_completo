// Filter - filtrar o array
// Sempre retorna um novo array

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 23, 27];

function callbackFilter(valor, indice, array) {
  return valor > 10;
  //   if (valor > 10) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
// [50, 80, 11, 15, 23, 27];

// Função anonima
const numerosFiltradosAnonima = numeros.filter(function (valor) {
  return valor > 10;
});
console.log(numerosFiltradosAnonima);
// [ 50, 80, 11, 15, 23, 27 ]

// Arrow function - (mais utilizada!)
const numerosFiltradosArrow = numeros.filter((valor) => valor > 10);
console.log(numerosFiltradosArrow);
// [ 50, 80, 11, 15, 23, 27 ]
