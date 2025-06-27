const data = new Date();
console.log(data.toString());
// Fri Jun 20 2025 10:23:09 GMT-0300 (Horário Padrão de Brasília)

// consultar uma data
const bdayDate = new Date(2019, 3, 20, 15, 14, 27, 1000);
console.log(bdayDate.toString());
// Sat Apr 20 2019 15:14:28 GMT-0300 (Horário Padrão de Brasília)

// 0 (Jan) - 11 (Dez)

const bdayData = new Date("2019-04-20 20:15:59");
console.log(bdayData.toString());
// Sat Apr 20 2019 20:15:59 GMT-0300 (Horário Padrão de Brasília)

console.log("Dia", bdayData.getDate());
// Dia 20

console.log("Mês", bdayData.getMonth() + 1);
// Mês 3 (abril)
// Mês 4

console.log("Ano", bdayData.getFullYear());
// Ano 2019

console.log("Hora", bdayData.getHours());
// Hora 20

console.log("Minuto", bdayData.getMinutes());
// Minuto 15

console.log("Segundo", bdayData.getSeconds());
// Segundo 59

console.log("Milésimo de segundo", bdayData.getMilliseconds());
// Milésimo de segundo 0

console.log("Dia da semana", bdayData.getDay());
// Dia da semana 6 (sábado)
// 0 - domingo -> 6 - sábado

// milesimos de segundo
console.log(Date.now());
// 1750427645441
const marcoZero = new Date(1750427645441);
console.log(marcoZero);
// Fri Jun 20 2025 10:54:05 GMT-0300 (Horário Padrão de Brasília)

// Exemplo:
function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(dataAtual) {
  const dia = zeroAEsquerda(dataAtual.getDate());
  const mes = zeroAEsquerda(dataAtual.getMonth() + 1);
  const ano = dataAtual.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

const dataAtual = new Date();
const dataBrasil = formataData(dataAtual);

console.log(dataBrasil);
