// Filter - filtrar o array
// Sempre retorna um novo array

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Ana", idade: 73 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Retorne as pessoas que tem o nome com 7 letras ou mais
const pessoasNomeGrande = pessoas.filter(function (obj) {
  return obj.nome.length >= 7;
});
console.log(pessoasNomeGrande);

// Retorne as pessoas com mais de 50 anos
const pessoasMaisVelhas = pessoas.filter((obj) => obj.idade > 50);
console.log(pessoasMaisVelhas);

// Retorne as pessoas cujo nome termina com A
const nomeTerminaComA = pessoas.filter(function (obj) {
  return obj.nome.toLowerCase().endsWith("a");
});
console.log(nomeTerminaComA);
