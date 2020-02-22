//selecting DOM button element
let colorChanger = document.getElementById("btn");

//adding event listener
colorChanger.addEventListener("click", function() {
  let cx = document.getElementById("chng");

  //toggle the text and color
  if (cx.innerHTML === "blue box") {
    cx.innerHTML = "green box";
    cx.style.color = "green";
  } else if (cx.innerHTML === "green box") {
    cx.innerHTML = "blue box";
    cx.style.color = "blue";
  }
});
