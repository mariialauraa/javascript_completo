// Parâmetros da função

// funções criadas com a palavra 'function' tem uma variável especial
// arguments que sustenta todos os argumentos enviados.

function funcao() {
  console.log(arguments[0]);
  //   Valor
}

funcao("Valor");

function soma() {
  let total = 0;

  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total);
  //   28
}

soma(1, 2, 3, 4, 5, 6, 7);

// -------------------------------

function funcaoComParametro(a, b, c) {
  console.log(a, b, c);
}

funcaoComParametro(1, 2);
// 1 2 undefined

// ---------------------------------

function somaComParametros(a, b = 2, c = 4) {
  console.log(a + b + c);
}

somaComParametros(2, undefined, 20);
// 24

// ---------------------------------

function atribuicaoViaDesestruturacao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

let obj = { nome: "Luiz", sobrenome: "Otavio", idade: 20 };
atribuicaoViaDesestruturacao(obj);
// Luiz Otavio 20

function desestruturacaoDeArray([v1, v2, v3]) {
  console.log(v1, v2, v3);
}

desestruturacaoDeArray(["Maria", "Laura", 33]);
// Maria Laura 33

// exemplo função com ...rest
function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    // console.log(numero);
    // 20, 30, 40, 50

    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
  }

  console.log(acumulador);
  //   340
}

conta("+", 200, 20, 30, 40, 50);
