function createColoredDiv(rgbValue) {
  const div = document.createElement("div");
  div.style.backgroundColor = `rgb(${rgbValue}, ${rgbValue}, 255)`;
  div.style.width = "200px";
  div.style.height = "200px";
  div.style.margin = "10px";
  return div;
}

const container = document.getElementById("container");
let colorValue = 0;
const finalColorValue = 255;
const step = 5;

while (colorValue <= finalColorValue) {
  const div = createColoredDiv(colorValue);
  container.appendChild(div);
  colorValue += step;
}