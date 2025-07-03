const nomes = ["Eduardo", "Maria", "Joana"];
nomes[2] = "João";
console.log(nomes);
// [ 'Eduardo', 'Maria', 'João' ]

delete nomes[2]; // remove elemento e mantém o indice
console.log(nomes);
// [ 'Eduardo', 'Maria', <1 empty item> ]

console.log("");

// Spread - cópia
const novo = [...nomes];
console.log("Spread: " + novo);
// Spread: Eduardo, Maria

novo.pop(); // remove elemento e o indice

console.log(nomes); // [ 'Eduardo', 'Maria', <1 empty item> ]
console.log(novo); // [ 'Eduardo', 'Maria' ]

console.log("");

// outra forma de construir Array
const sobrenomes = new Array("Roriz", "Melo", "Silva");
console.log(sobrenomes);
// [ 'Roriz', 'Melo', 'Silva' ]

// Valor por referência
const segundoNome = sobrenomes;

const removido = segundoNome.pop();
console.log(segundoNome, removido);
// [ 'Roriz', 'Melo' ] Silva

console.log(sobrenomes);
// [ 'Roriz', 'Melo' ]

console.log(sobrenomes.length); // 2
