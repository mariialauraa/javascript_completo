// 72. Closures: ocorre quando uma função interna
// tem acesso às variáveis da função externa

function retornoFuncao(nome) {
  // closure: (retornoFuncao)
  return function () {
    return nome;
  };
}

const funcao = retornoFuncao("Luiz");
console.log(funcao);
// [Function (anonymous)]

console.log(funcao());
// Luiz

const funcao2 = retornoFuncao("João");
console.log(funcao2());
// João
