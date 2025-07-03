// molde
function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.pressionaEnter();
  };

  this.pressionaEnter = () => {
    this.display.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.realizaConta();
      }
    });
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      // el = botão que está sendo clicado
      const el = event.target;

      if (el.classList.contains("btn-num")) {
        this.addNumDisplay(el);
        this.display.focus();
      }

      if (el.classList.contains("btn-clear")) {
        this.clear();
        this.display.focus();
      }

      if (el.classList.contains("btn-del")) {
        this.del();
        this.display.focus();
      }

      if (el.classList.contains("btn-eq")) {
        this.realizaConta();
        this.display.focus();
      }
    });
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
  };

  this.clear = () => {
    this.display.value = "";
  };

  this.del = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if (!conta) {
        alert("Conta inválida");
        return;
      }

      this.display.value = conta;
    } catch (err) {
      alert("Conta inválida");
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
