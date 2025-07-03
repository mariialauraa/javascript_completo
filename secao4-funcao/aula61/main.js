// Funções geradoras (lazy evaluation)

function* geradora1() {
  // Código qualquer ...
  yield "Valor 1";
  // Código qualquer ...
  yield "Valor 2";
  // Código qualquer ...
  yield "Valor 3";
}

const g1 = geradora1();
console.log(g1); // Object [Generator] {}

console.log(g1.next());
// { value: 'Valor 1', done: false }

console.log(g1.next().value); // Valor 2
console.log(g1.next().value); // Valor 3

console.log(g1.next());
// { value: undefined, done: true }

for (let valor of g1) {
  console.log(valor);
}
// Valor 1
// Valor 2
// Valor 3

console.log("");

// exemplo (infinito)
function* contador() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const contadorInfinito = contador();
console.log(contadorInfinito.next().value); // 0
console.log(contadorInfinito.next().value); // 1
console.log(contadorInfinito.next().value); // 2
console.log(contadorInfinito.next().value); // 3
console.log(contadorInfinito.next().value); // 4
console.log(contadorInfinito.next().value); // 5

console.log("");

// exemplo de gerador que delega tarefa para outro gerador
function* geradora2() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora3() {
  yield* geradora2();
  // cont do 3...6
  yield 3;
  yield 4;
  yield 5;
  yield 6;
}

const g3 = geradora3();

for (let valor of g3) {
  console.log(valor);
}
// 0 | 1 | 2 | 3 | 4 | 5 | 6

console.log("");

// exemplo com função
function* geradora4() {
  yield function () {
    console.log("Vim do y1");
  };

  //   codigo ...

  yield function () {
    console.log("Vim do y2");
  };
}

const g4 = geradora4();

const func1 = g4.next().value;
func1(); // Vim do y1

const func2 = g4.next().value;
func2(); // Vim do y2
