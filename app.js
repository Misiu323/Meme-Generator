const img = document.querySelector("#file");
const box = document.querySelector(".content_box");
const box_file = document.querySelector(".box-file");
const dow_img = document.querySelector(".getImg");

img.addEventListener("change", (e) => {
  const ladowanie = new FileReader();
  ladowanie.addEventListener("load", () => {
    const obraz = document.createElement("img");
    obraz.src = ladowanie.result;
    box.appendChild(obraz);
    dow_img.href = ladowanie.result;
  });
  ladowanie.readAsDataURL(e.target.files[0]);
  box_file.style.display = "none";
  console.log(ladowanie.result);
});

const box_text = document.querySelector(".box-text");
const text = document.querySelector("#text");
const color = document.querySelector("input[type=color]");
const size = document.querySelector("input[type=number]");
const fonts = document.querySelector(".fonts");

text.addEventListener("input", () => {
  box_text.textContent = text.value;
});
color.addEventListener("input", () => {
  box_text.style.color = color.value;
});
size.addEventListener("input", () => {
  box_text.style.fontSize = `${size.value}` + "px";
});
fonts.addEventListener("change", () => {
  box_text.style.fontFamily = fonts.value;
});

let offsetX, offsetY;

box_text.addEventListener("mousedown", (e) => {
  offsetX = e.clientX - box_text.offsetLeft;
  offsetY = e.clientY - box_text.offsetTop;

  document.addEventListener("mousemove", MyszNaDole);
});

function MyszNaDole(e) {
  let newX = e.clientX - offsetX;
  let newY = e.clientY - offsetY;

  box_text.style.left = newX + "px";
  box_text.style.top = newY + "px";
}

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", MyszNaDole);
});
