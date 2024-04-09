const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", function () {
   console.log(container);
   container.style.display = "block";
   const music = new Audio("./EidHappy.mp3");
   btn.style.display = "none";
   music.play();
   music.loop();
});
