// Função construtora -> retorna objetos
// Função fábrica - fabrica objetos

// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  // atributos privados -> apenas dentro da função
  const ID = 123;

  const metodoInterno = function () {
    console.log("Apenas uso interno");
  };

  // atributos públicos
  this.nome = nome;
  // Pessoa.nome
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ": sou um método.");
  };
}

const p1 = new Pessoa("Luiz", "Otávio");
const p2 = new Pessoa("Maria", "Laura");

console.log(p1.nome); // Luiz
console.log(p2.nome); // Maria

p1.metodo(); // Luiz: sou um método.
p2.metodo(); // Maria: sou um método.
