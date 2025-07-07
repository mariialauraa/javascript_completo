// Método Splice
// Mexe no array original

// nomeArray.splice(indice, qtdeDeletar, addEle1, addEle2, addEle3)

//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

console.log(nomes);
console.log("");

// pop - remover último elemento
const removidos = nomes.splice(3, 2);
console.log(nomes, removidos);
// [ 'Maria', 'João', 'Eduardo' ] [ 'Gabriel', 'Júlia' ]

console.log("");

// remove até o final do array
nomes.splice(2, Number.MAX_VALUE);
console.log(nomes); // [ 'Maria', 'João' ]

console.log("");

// add elemento (indice, remove = 0, elemento)
nomes.splice(1, 0, "Laura");
console.log(nomes);
// [ 'Maria', 'Laura', 'João' ]
//      0        1        2

console.log("");

// trocar um elemento por outro
nomes.splice(0, 2, "José", "Pedro");
console.log(nomes);
// [ 'José', 'Pedro', 'João' ]

console.log("");

// simulando o push (add)
nomes.splice(nomes.length, 0, "Luiz", "Otávio");
console.log(nomes);
// [ 'José', 'Pedro', 'João', 'Luiz', 'Otávio' ]
