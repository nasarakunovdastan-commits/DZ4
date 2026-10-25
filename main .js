// 1
let count = 0;

function increment() {
  count = count + 1;
  document.getElementById("count").textContent = count;
  document.getElementById("count").style.color = "green";
}

function decrement() {
  if (count > 0) {
    count = count - 1;
    document.getElementById("count").textContent = count;
    document.getElementById("count").style.color = "red";
  }
}

// 2

let block = document.getElementById("block");

block.addEventListener("mousemove", function (event) {
  let x = event.offsetX;
  let y = event.offsetY;

  document.getElementById("coordinates").textContent = "x: " + x + ", y: " + y;
});

// 3

let colorInput = document.getElementById("colorInput");

colorInput.addEventListener("input", function () {
  document.body.style.backgroundColor = colorInput.value;
});
