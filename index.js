const botonMenu = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

botonMenu.addEventListener("click", function () {
    menu.classList.toggle("menu-abierto");
});