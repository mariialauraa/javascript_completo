let controle = 0;

while (controle <= 10) {
  console.log(controle);
  controle++;
}

console.log("");

// exemplo:
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
// let rand = random(min, max);
let rand = 10;

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log("#While#");
console.log("");

// Do while
do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
