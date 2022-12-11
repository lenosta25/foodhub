const burger = document.querySelector(".menu__burger");
const nav = document.querySelector(".menu__nav");
const links = document.querySelectorAll(".link");
const action = document.querySelector(".menu__action");
const body = document.body;
if (burger && nav) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    nav.classList.toggle("_active");
    action.classList.toggle("_active");
    body.classList.toggle("_disable-skroll");
  });
}
links.forEach((e) => {
  e.addEventListener("click", () => {
    burger.classList.remove("_active");
    nav.classList.remove("_active");
    action.classList.remove("_active");
    body.classList.remove("_disable-skroll");
  });
});