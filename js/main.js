let bar = document.querySelector(".fa-bars-staggered");
let link = document.querySelector(".nav");


bar.addEventListener("click", () => {
    bar.classList.toggle("fa-bars-staggered");
    bar.classList.toggle("fa-x");
    link.classList.toggle("show");
});