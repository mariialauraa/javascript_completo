const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}

iniciar.addEventListener("click", function (e) {
  relogio.classList.remove("pausado");
  clearInterval(timer);
  iniciaRelogio();
});

pausar.addEventListener("click", function (e) {
  clearInterval(timer);
  relogio.classList.add("pausado");
});

zerar.addEventListener("click", function (e) {
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  segundos = 0;
  relogio.classList.remove("pausado");
});

// função 00:00:00
function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}
