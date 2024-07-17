const h1 = document.querySelector("h1");
const cart = document.querySelector(".cart");
const del = document.querySelector("#del");
const quantity = document.querySelectorAll(".quantity");
del.style.backgroundColor = "orange";
console.log(quantity);
const title = document.createElement("h1");
title.innerHTML = "summer academy";
const body = document.querySelector("body");
body.appendChild(title);

del.addEventListener("click", function () {
  title.classList.toggle("title-style");
});