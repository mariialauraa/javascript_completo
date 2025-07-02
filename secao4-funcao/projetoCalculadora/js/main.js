function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      // por segurança não é bom usar eval
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta inválida");
          return;
        }

        this.display.value = conta;
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      // this -> calculadora
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
          this.display.focus();
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
          this.display.focus();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
          this.display.focus();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
          this.display.focus();
        }

        el.blur();
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
