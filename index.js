const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", function () {
   console.log(container);
   container.style.display = "block";
   btn.style.display = "none";
});
