// return - retorna um valor
// termina a função

function soma(a, b) {
  return a + b;
}

console.log(soma(2, 5));

console.log("################################");

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const p1 = criaPessoa("Maria", "Laura");
console.log(p1);

console.log("################################");

// função dentro de outra função
function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase("Olá");
// olaMundo vira uma função = falaResto
console.log(olaMundo("mundo!"));
// Olá mundo!

// exemplo
function criaMultiplicador(multiplicador) {
  // multiplicador
  function multiplicacao(num) {
    return num * multiplicador;
  }

  return multiplicacao;
}

const duplica = criaMultiplicador(2);
console.log(duplica(2));
// 4

const triplica = criaMultiplicador(3);
console.log(triplica(2));
// 6

const quadriplica = criaMultiplicador(4);
console.log(quadriplica(2));
// 8

// função sem retorno
document.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});
