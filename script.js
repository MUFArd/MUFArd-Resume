const txt = document.querySelector("#txt");
const bg = document.querySelector("#bg");
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    txt.style.transform = `translateY(${scrollY * 0.5}px)`;
    bg.style.transform = `translateY(${-scrollY * 0.1}px)`;

})