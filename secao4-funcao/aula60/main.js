// Funções recursivas -> elas mesmas se chamam de volta
// Lembra uma estrutura de repetição

function recursiva(max) {
  console.log(max);
  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

  if (max >= 10) return;
  max++;

  // para chamar a função de volta
  recursiva(max);
}

recursiva(0);
