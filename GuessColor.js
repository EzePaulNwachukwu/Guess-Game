const allBox = document.querySelectorAll(".color");
const message = document.querySelector(".message");
const hide = document.querySelector("h3");


let a = Math.trunc(Math.random() * 255);
let b = Math.trunc(Math.random() * 255);
let c = Math.trunc(Math.random() * 255);
let d = Math.trunc(Math.random() * 255);
let e = Math.trunc(Math.random() * 255);
let f = Math.trunc(Math.random() * 255);
let g = Math.trunc(Math.random() * 255);
let h = Math.trunc(Math.random() * 255);
let i = Math.trunc(Math.random() * 255);
let j = Math.trunc(Math.random() * 255);
let k = Math.trunc(Math.random() * 255);
let l = Math.trunc(Math.random() * 255);
let n = Math.trunc(Math.random() * 255);
let m = Math.trunc(Math.random() * 255);
let o = Math.trunc(Math.random() * 255);
let p = Math.trunc(Math.random() * 255);
let q = Math.trunc(Math.random() * 255);
let r = Math.trunc(Math.random() * 255);
let colors = [
  `rgb(${a},${b},${c})`,
  `rgb(${d},${e},${f})`,
  `rgb(${g},${h},${i})`,
  `rgb(${j},${k},${l})`,
  `rgb(${m},${n},${o})`,
  `rgb(${p},${q},${r})`,
];

let correctColor = colors[Math.trunc(Math.random() * colors.length)];

hide.style.backgroundColor = correctColor;
hide.style.display = "none";

allBox.forEach((box, i) => {
  box.style.backgroundColor = `${colors[i]}`;
  box.addEventListener("click", (e) => {
    console.log(colors);
    console.log(box.style.backgroundColor);
    if (box.style.backgroundColor == hide.style.backgroundColor) {
      message.textContent = "you guess right!";
      message.style.color = "white";
      message.style.backgroundColor = `${ hide.style.backgroundColor}`;
    } else {
      message.textContent = "wrong Guess!";
      message.style.color = "red";

      location.reload();
    }
  });
});
