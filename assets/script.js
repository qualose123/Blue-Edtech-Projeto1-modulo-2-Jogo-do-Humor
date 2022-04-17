let imgForma = document.querySelector(".base");
let nameForma = document.querySelector("#evoluir");
let botao = document.querySelector("#transformar");

let i = 0;

console.dir(imgForma.setAttribute);

function alterarBotao() {
  i++;
  if (i == 1) {
    imgForma.setAttribute("src", "assets/img/gif/gear second.gif");
    imgForma.setAttribute("alt", "Gear Second");
    nameForma.innerHTML = "Gear Second";
  } else if (i == 2) {
    imgForma.setAttribute("src", "assets/img/gif/luffy-gear third.gif");
    imgForma.setAttribute("alt", "Gear third");
    nameForma.innerHTML = "Gear Third";
  } else if (i == 3) {
    imgForma.setAttribute("src", "assets/img/gif/gear four.gif");
    imgForma.setAttribute("alt", "Gear Four");
    nameForma.innerHTML = "Gear Four";
  } else if (i == 4) {
    imgForma.setAttribute("src", "assets/img/gif/snakeman.gif");
    imgForma.setAttribute("alt", "Gear Four snakeman");
    nameForma.innerHTML = "Gear Four Snakeman";
    botao.textContent="Retroceder";
  }

  if (i > 4) {
    i = 0;

    imgForma.setAttribute("src", "./assets/img/forma base.jpg");
    imgForma.setAttribute("alt", "Forma Base");
    nameForma.innerHTML = "Forma Base";
    botao.textContent="Transformar";
  }
}
