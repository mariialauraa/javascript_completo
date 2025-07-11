// Map - retorna um novo array com msm tamanho do original
// altera os valores do array

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Ana", idade: 73 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Retorne apenas uma string com o nome das pessoas
const nomes = pessoas.map((valor) => valor.nome);
console.log(nomes);

// Remova apenas a chave "nome" do objeto
const idades = pessoas.map(function (obj) {
  return { idade: obj.idade };
});
console.log(idades);

// Adicione uma chave de id em cada objeto (id)
const comIds = pessoas.map(function (obj, indice) {
  // para não alterar o array original
  const newObj = { ...obj };
  newObj.id = indice;
  return newObj;
});
console.log(comIds);
// { nome: 'Luiz', idade: 62, id: 0 }, { nome: 'Maria', idade: 23, id: 1 }, ...

console.log(pessoas);
// não alterou o array original
