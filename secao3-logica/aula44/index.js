// tente executar:
try {
  console.log(naoExisto);
} catch (err) {
  console.log("Error: variável não declarada.");
}

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números");
  }

  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch (error) {
  console.log(error);
  // error = msg do throw
}
