const inputTarefa = document.querySelector(".input-tarefa");
const btnAdd = document.querySelector(".btn-tarefa");
const list = document.querySelector(".tarefas");

btnAdd.addEventListener("click", function () {
  // verifica se o input ta vazio antes de add
  if (!inputTarefa.value) return;

  criaTarefa(inputTarefa.value);
});

// tecla ENTER
inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function criaLi() {
  const li = document.createElement("li");
  return li;
}

// add tarefas na lista
function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  list.appendChild(li);

  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function salvarTarefas() {
  const liTarefas = list.querySelectorAll("li");
  const arrayDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    arrayDeTarefas.push(tarefaTexto);
  }

  console.log(arrayDeTarefas);
  // (4) ['t1', 't2', 't3', 't4']

  // transforma em string
  const tarefasJSON = JSON.stringify(arrayDeTarefas);

  // salva 'string'
  localStorage.setItem("tarefas", tarefasJSON);
}

function addTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  // converte para array
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

addTarefasSalvas();

// botões
function criaBotaoApagar(li) {
  // padding no botão
  li.innerText += " ";
  // cria o botão
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  // add atributos
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "apagar-tarefa");
  // add o botão
  li.appendChild(botaoApagar);
}

// onde está sendo clicado
document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    // seleciona o pai do botão('apagar')
    el.parentElement.remove();

    // apagar tarefas do Local Storage
    salvarTarefas();
  }
});
