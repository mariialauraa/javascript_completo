// Literal
const pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio",
};

const chave = "nome";
console.log(pessoa[chave]);

console.log("");

console.log(pessoa["sobrenome"]);
console.log(pessoa.sobrenome);

console.log("");

// Construtor
const pessoa1 = new Object();
pessoa1.nome = "Maria";
pessoa1.sobrenome = "Laura";

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

console.log("");

console.log(pessoa1);
// { nome: 'Maria', sobrenome: 'Laura' }

delete pessoa1.sobrenome;
console.log(pessoa1);
// { nome: 'Maria' }

console.log("");

// método
pessoa1.falarNome = function () {
  return `${this.nome} está falando seu nome.`;
};

console.log(pessoa1.falarNome());

pessoa1.idade = 33;

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento()); // 1992

console.log("");

for (let chave in pessoa1) {
  console.log(chave);
}
// nome
// falarNome
// idade
// getDataNascimento
