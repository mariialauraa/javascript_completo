// IIFE -> Immediately invoked function expression
// Função auto-invocada
// Protege o código do escopo global

(function () {
  const nome = "Luiz";
  console.log(nome);
})();

// exemplo
(function (idade, peso, altura) {
  const sobrenome = "Miranda";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Luiz"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.8);
