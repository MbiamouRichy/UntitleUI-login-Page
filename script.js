let slides = document.querySelectorAll(".card");
let btn_left = document.querySelector("#btn_left");
let btn_right = document.querySelector("#btn_right");
let labels = document.querySelectorAll("form label");
let input = document.querySelector("input");

let activeSlide = 0;
/*--- Transformer chaque letre du label en span -----*/
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
/*------------- slider ----------*/
btn_left.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  changeSlide();
});
btn_right.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  changeSlide();
});

function changeSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].className += " active";
  console.log(activeSlide);
}

/*-- focus sur l'input ---*/
input.focus();
