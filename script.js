const cabecalho = document.querySelector(".cabecalho");
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");
const telaPequena = window.matchMedia("(max-width: 800px)");

function definirMenu(aberto) {
  menu.classList.toggle("aberto", aberto);
  botaoMenu.setAttribute("aria-expanded", String(aberto));
  botaoMenu.setAttribute(
    "aria-label",
    aberto ? "Fechar menu" : "Abrir menu"
  );
}

botaoMenu.addEventListener("click", () => {
  const estaAberto = menu.classList.contains("aberto");
  definirMenu(!estaAberto);
});

menu.addEventListener("click", (evento) => {
  if (telaPequena.matches && evento.target.closest("a")) {
    definirMenu(false);
    botaoMenu.focus();
  }
});

cabecalho.addEventListener("keydown", (evento) => {
  if (
    evento.key === "Escape" &&
    telaPequena.matches &&
    menu.classList.contains("aberto")
  ) {
    definirMenu(false);
    botaoMenu.focus();
  }
});

telaPequena.addEventListener("change", () => {
  definirMenu(false);
});

cabecalho.classList.add("menu-pronto");
