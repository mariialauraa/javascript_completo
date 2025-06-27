// objetos iteráveis: que podem ser percorridos elemento por elemento

const nomes = ["Luiz", "Otávio", "Henrique"];

// for clássico
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log("");

// for in
for (let i in nomes) {
  console.log(nomes[i]);
}

console.log("");

// for of: invés do ÍNDICE vem o VALOR
for (let valor of nomes) {
  console.log(valor);
}

console.log("");

// forEach
nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});

// Luiz 0 (3) ['Luiz', 'Otávio', 'Henrique']
// Otávio 1 (3) ['Luiz', 'Otávio', 'Henrique']
// Henrique 2 (3) ['Luiz', 'Otávio', 'Henrique']
