// Factory function

function criaPessoa(nome, sobrenome, alt, peso) {
  return {
    // this
    nome,
    sobrenome,

    // método e transformei em Getter
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      console.log(valor);
      //   Luiz Garcia Miranda

      valor = valor.split(" ");
      console.log(valor);
      //   [ 'Marcos', 'Garcia', 'Miranda' ]

      this.nome = valor.shift();
      console.log(valor);
      //   ["Garcia", "Miranda"];
      this.sobrenome = valor.join(" ");
    },

    // método
    fala: function (assunto) {
      return `${this.nome} tem ${this.idade} anos, e está ${assunto}.`;
    },

    // this
    idade: 30,
    altura: alt,
    peso: peso,

    // método
    imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Luiz", "Otávio", 1.8, 80);
console.log("Luiz IMC: " + p1.imc());

const p2 = criaPessoa("Maria", "Laura", 1.7, 75);
console.log("Maria IMC: " + p2.imc());

console.log("");

// this é a pessoa que chama, nesse caso p2
// this.nome = p2.nome
console.log(p2.nome); // Maria

console.log("");

console.log("Nome completo antes da alteração:", p1.nomeCompleto);
// Getter não usa () - "p1.nomeCompleto()"

console.log("");

// Setter
p1.nomeCompleto = "Marcos Garcia Miranda";

console.log("");

// Verificando os valores atualizados após o setter
console.log("Nome após alteração:", p1.nome); // Marcos
console.log("Sobrenome após alteração:", p1.sobrenome); // Garcia Miranda
console.log("Nome completo após alteração:", p1.nomeCompleto); // Marcos Garcia Miranda

console.log("");

console.log(p1.fala("falando sobre JS"));
// Marcos tem 30 anos, e está falando sobre JS.

console.log(p2.fala("falando sobre os estudos"));
// Maria tem 30 anos, e está falando sobre os estudos.
