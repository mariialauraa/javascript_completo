const frutas = ["Pera", "Maçã", "Uva"];

// forma clássica
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// For in
for (let fruta in frutas) {
  console.log(`As frutas são: ${frutas[fruta]}`);
}

const pessoa = {
  nome: "Maria",
  segundoNome: "Laura",
  idade: 33,
};

// acessando:
console.log(pessoa.nome);
console.log(pessoa["nome"]);

for (let key in pessoa) {
  console.log(key, pessoa[key]);
}
// nome Maria
// segundoNome Laura
// idade 33
