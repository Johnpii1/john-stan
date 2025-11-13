//HEAD for mobile
const btns = document.getElementById("btns");
const lan = document.getElementById("langs");

btns.addEventListener("click", () => {
  lan.classList.toggle("show");
});

//HEAD for laptop
const btn1 = document.getElementById("btn1");
const lang1 = document.getElementById("langs1");

btn1.addEventListener("click", () => {
  lang1.classList.toggle("show");
});

//Heder
const btn = document.getElementById("dropdown-btn");
const contents = document.getElementById("menu");

btn.addEventListener("click", () => {
  contents.classList.toggle("show");
});

//Arrow
// const arrow = document.getElementById("arrow");

// arrow.addEventListener("click", () => {
//   arrow.classList.toggle("rotate");
// });


//Mobile Categories
const btn2 = document.getElementById("btn2");
const catigories1 = document.getElementById("menu1");
const closes = document.getElementById("close")

btn2.addEventListener("click", () => {
    catigories1.classList.toggle("show");
});

closes.addEventListener("click", () => {
  catigories1.classList.toggle.add("hidden")
});
