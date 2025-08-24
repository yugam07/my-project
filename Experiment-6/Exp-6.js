const svg = document.getElementById("drawingArea");
let isDrawing = false;
let currentPath = null;

svg.addEventListener("mousedown", (e) => {
  isDrawing = true;
  const point = getMousePosition(e);
  currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  currentPath.setAttribute("stroke", "blue");
  currentPath.setAttribute("fill", "none");
  currentPath.setAttribute("stroke-width", "2");
  currentPath.setAttribute("d", `M${point.x},${point.y}`);
  svg.appendChild(currentPath);
});

svg.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  const point = getMousePosition(e);
  let d = currentPath.getAttribute("d");
  d += ` L${point.x},${point.y}`;
  currentPath.setAttribute("d", d);
});

svg.addEventListener("mouseup", () => {
  isDrawing = false;
  currentPath = null;
});

svg.addEventListener("mouseleave", () => {
  isDrawing = false;
  currentPath = null;
});

function getMousePosition(evt) {
  const rect = svg.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
