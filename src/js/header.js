// Scroll Header
const header = document.querySelector(".js-header")

const scrollHeader = () => {
    if (window.pageYOffset >= header.offsetHeight) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
}
window.onscroll = function () { scrollHeader() };

// Burger
const burger = document.querySelector(".js-burger")
const menu = document.querySelector(".js-header-nav-user")
burger.addEventListener("click", () => {
    burger.classList.toggle("on")
    menu.classList.toggle("on")
})