const btn = document.getElementById("dropdown-btn");
const contents = document.getElementById("menu");

btn.addEventListener("click", () => {
    contents.classList.toggle("show");
});