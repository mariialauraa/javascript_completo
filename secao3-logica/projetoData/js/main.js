const h1 = document.querySelector(".container h1");
const data = new Date();

// documentação
const opcoes = {
  dateStyle: "full",
  timeStyle: "short",
};

h1.innerHTML = data.toLocaleString("pt-BR", opcoes);
