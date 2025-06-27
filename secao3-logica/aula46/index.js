function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

// setInterval
const timer = setInterval(function () {
  console.log(mostraHora());
}, 60000); // a cada minuto

// setTimeout
setTimeout(function () {
  clearInterval(timer);
}, 120000);
// PARA o setInterval após 2 minutos.

setTimeout(function () {
  console.log("Olá mundo!");
}, 5000);
