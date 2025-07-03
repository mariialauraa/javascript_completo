const numeros = [1, 2, 3, 4, 5];
const removidoInicio = numeros.shift();

console.log(numeros, removidoInicio);
// [ 2, 3, 4, 5 ] 1

console.log("");

// Add no final do Array
numeros.push(6, 7);
console.log(numeros); // [ 2, 3, 4, 5, 6, 7 ]

// Add no início do Array
numeros.unshift(1);
console.log(numeros);
// [1, 2, 3, 4, 5, 6, 7 ]

console.log("");

// Remove do fim
numeros.pop();
console.log(numeros);
// [1, 2, 3, 4, 5, 6 ]
//  0  1  2  3  4  5 -> indice

console.log("");

// Fatiar Array - Slice
const numerosFatiados = numeros.slice(1, 3); // na vdd pega 1 e 2 (-1)
console.log(numerosFatiados);
// [2, 3]; -> índice

const numeroSlice = numeros.slice(0, -2);
console.log(numeroSlice);
// [ 1, 2, 3, 4 ]

console.log("");

// Converter uma string em um array
const nome = "Luiz, Otávio, Miranda,outro";

const nomes = nome.split(",");
console.log(nomes);
// [ 'Luiz', ' Otávio', ' Miranda', 'outro' ]

console.log("");

// Converter um array em uma string
const meusNomes = ["Maria", "Laura", "Roriz"];
const meuNome = meusNomes.join(" ");

console.log(meuNome); // Maria Laura Roriz
