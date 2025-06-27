const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody); // rgb(17, 86, 102)

let corDaLetra = estilosBody.color;
corDaLetra = "#fff";
console.log(corDaLetra);

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = corDaLetra;
}
