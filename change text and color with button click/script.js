var colorChanger = document.getElementById("btn");

colorChanger.addEventListener("click", function() {
  let cx = document.getElementById("chng");
  let tx = document.getElementById("chng");

  if (cx.innerHTML === "blue box") {
    cx.innerHTML = "green box";
    tx.style.color = "green";
  } else if (cx.innerHTML === "green box") {
    cx.innerHTML = "blue box";
    tx.style.color = "blue";
  }
});
