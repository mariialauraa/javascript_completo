// Operação ternária ? ('true') : ('false')

const pontuacaoUsuario = 500;

if (pontuacaoUsuario >= 1000) {
  console.log("Usuário VIP");
} else {
  console.log("Usuário normal");
}

const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";

console.log(nivelUsuario);

// Outro exemplo
const corUsuario = null;
const corPadrao = corUsuario || "Preto";

console.log(corPadrao);
