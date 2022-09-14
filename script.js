"use strict";

//Elements
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const mainImage = document.getElementById("MainImg");
const smallImage = document.querySelectorAll(".small-img");

//Event Listeners

bar.addEventListener("click", () => {
  if (!bar) return;
  nav.classList.toggle("active");
});

close.addEventListener("click", () => {
  nav.classList.remove("active");
});

smallImage.forEach((img) =>
  img.addEventListener("click", function () {
    mainImage.src = img.src;
  })
);
