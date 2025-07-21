// molde de objetos

// Factory functions
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Luiz", "Otávio");
console.log(p1.nomeCompleto); // Luiz Otávio
// com get não precisa (executar) o método

console.log("");

// Constructor functions
function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;

  //   Trava TODO o objeto
  Object.freeze(this);
  //   Person { name: 'Luiz', lastname: 'Miranda' }
}

// this -> person1
// this -> person2...

const person1 = new Person("Maria", "Laura");

// travar objeto
Object.freeze(person1); // não altera
person1.name = "Lucia";
console.log(person1);
// Person { name: 'Maria', lastname: 'Laura' }

const person2 = new Person("Luiz", "Miranda");
person2.name = "Pedro";
console.log(person2);
// Person { name: 'Pedro', lastname: 'Miranda' }
