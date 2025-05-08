const container = document.querySelector("#container");
container.style.display = "flex";
container.style.marginRight = "auto";
container.style.marginLeft = "auto";
container.style.flexWrap = "wrap";
container.style.border = "1px solid grey";
container.style.width = "600px";
container.style.height = "600px";

const sizeInput = document.querySelector("input");
const sizeBtn = document.querySelector("#sizeBtn");

sizeBtn.addEventListener("click", () => changeSize(sizeInput.value));

function changeSize(size) {
  container.innerHTML = "";
  if (size > 100) {
    const errorMsg = document.createElement("h2");
    errorMsg.textContent = "Invalid size, must be 100 or smaller.";
    errorMsg.style.textAlign = "center";
    errorMsg.style.marginRight = "auto";
    errorMsg.style.marginLeft = "auto";
    errorMsg.style.color = "red";
    container.appendChild(errorMsg);
  } else {
    const gridSize = 600 / size;
    for (i = 0; i < size * size; i++) {
      const gridItem = document.createElement("div");
      gridItem.style.backgroundColor = "lightgrey";
      gridItem.style.padding = "0px";
      gridItem.style.margin = "0px";
      gridItem.style.display = "flex";
      gridItem.style.width = `${gridSize}px`;
      gridItem.style.height = `${gridSize}px`;
      gridItem.style.alignItems = "center";

      gridItem.addEventListener("mouseover", () => {
        const setColor = document.querySelector('input[name="color"]:checked');
        gridItem.style.backgroundColor = setColor.value;
      });

      const clear = document.querySelector("#clear");
      clear.addEventListener("click", () => {
        gridItem.style.backgroundColor = "lightgrey";
      });
      container.appendChild(gridItem);
    }
  }
}
